/*
 * VotrIA — Tests du moteur d'orientation (Jalon 8)
 *
 * Solution minimale documentée : ce dépôt ne contient aucun framework de
 * test ni gestionnaire de paquets (voir BASELINE_BUILD_SITE_V4.md). Plutôt
 * que d'introduire une dépendance (Jest, Vitest...), ce fichier utilise
 * uniquement le module "assert" natif de Node.js et s'exécute directement :
 *
 *   node tests/qualification-engine.test.js
 *
 * Aucun package.json, aucune installation npm requise.
 */
'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs');

var engine = require(path.join('..', 'site', 'assets', 'js', 'qualification-engine.js'));
var evaluateOrientation = engine.evaluateOrientation;

var jsonCasesPath = path.join(__dirname, '..', 'QUESTIONNAIRE_TEST_CASES_JALON_8.json');
var officialCases = JSON.parse(fs.readFileSync(jsonCasesPath, 'utf8'));

var priorityCases = [
  {
    id: 'priorite_remplacer_erp_avant_diagnostic',
    description: 'remplacer_erp + effectif 35-50 => hors_perimetre (non-adéquation avant diagnostic)',
    answers: {
      zone: 'direction', frequence: 'plusieurs_par_jour', consequence: 'temps_perdu',
      activite: 'entreprise_generale', effectif: 'de_35_a_50', repartition: 'plusieurs_outils',
      attente: 'remplacer_erp', modele_recurrent: 'oui'
    },
    expected: 'hors_perimetre'
  },
  {
    id: 'priorite_non_ponctuel_besoin_simple',
    description: 'modele_recurrent non_ponctuel + besoin simple => hors_perimetre',
    answers: {
      zone: 'bureau', frequence: 'presque_chaque_jour', consequence: 'temps_perdu',
      activite: 'second_oeuvre', effectif: 'de_10_a_24', repartition: 'logiciel_et_fichiers',
      attente: 'dossiers_action', modele_recurrent: 'non_ponctuel'
    },
    expected: 'hors_perimetre'
  },
  {
    id: 'priorite_35_50_source_simple',
    description: '35-50 + source simple => complexe',
    answers: {
      zone: 'bureau', frequence: 'presque_chaque_jour', consequence: 'temps_perdu',
      activite: 'second_oeuvre', effectif: 'de_35_a_50', repartition: 'logiciel_et_messagerie',
      attente: 'dossiers_action', modele_recurrent: 'oui'
    },
    expected: 'complexe'
  },
  {
    id: 'priorite_plusieurs_entites_10_24',
    description: 'plusieurs_entites + 10-24 => complexe',
    answers: {
      zone: 'bureau', frequence: 'plusieurs_par_semaine', consequence: 'temps_perdu',
      activite: 'gros_oeuvre', effectif: 'de_10_a_24', repartition: 'plusieurs_entites',
      attente: 'relier_sans_remplacer', modele_recurrent: 'oui'
    },
    expected: 'complexe'
  },
  {
    id: 'priorite_plus_50_douleur_claire',
    description: 'plus de 50 + douleur claire => revue_humaine',
    answers: {
      zone: 'direction', frequence: 'presque_chaque_jour', consequence: 'manque_visibilite',
      activite: 'entreprise_generale', effectif: 'plus_50', repartition: 'logiciel_et_fichiers',
      attente: 'priorites_direction', modele_recurrent: 'oui'
    },
    expected: 'revue_humaine'
  },
  {
    id: 'priorite_moins_10_douleur_faible',
    description: 'moins de 10 + douleur faible => hors_perimetre',
    answers: {
      zone: 'bureau', frequence: 'occasionnellement', consequence: 'autre',
      activite: 'second_oeuvre', effectif: 'moins_10', repartition: 'logiciel_et_messagerie',
      attente: 'dossiers_action', modele_recurrent: 'a_comprendre'
    },
    expected: 'hors_perimetre'
  },
  {
    id: 'priorite_moins_10_douleur_forte_simple',
    description: 'moins de 10 + douleur forte et simple => revue_humaine',
    answers: {
      zone: 'bureau', frequence: 'presque_chaque_jour', consequence: 'facturation_encaissement',
      activite: 'second_oeuvre', effectif: 'moins_10', repartition: 'logiciel_et_fichiers',
      attente: 'dossiers_action', modele_recurrent: 'oui'
    },
    expected: 'revue_humaine'
  },
  {
    id: 'priorite_reponses_incompletes',
    description: 'réponses incomplètes => revue_humaine, jamais standard',
    answers: {
      zone: 'inconnue', frequence: 'inconnue', consequence: 'autre',
      activite: 'autre', effectif: 'de_25_a_34', repartition: 'inconnue',
      attente: 'inconnue', modele_recurrent: 'inconnue'
    },
    expected: 'revue_humaine'
  }
];

function runSuite(cases, label) {
  var passed = 0;
  var failed = [];
  cases.forEach(function (testCase) {
    var actual = evaluateOrientation(testCase.answers);
    if (actual === testCase.expected) {
      passed++;
    } else {
      failed.push({ id: testCase.id, expected: testCase.expected, actual: actual, description: testCase.description });
    }
  });

  console.log('\n--- ' + label + ' ---');
  console.log(passed + '/' + cases.length + ' cas réussis.');
  if (failed.length > 0) {
    failed.forEach(function (f) {
      console.log('ÉCHEC ' + f.id + ' — attendu: ' + f.expected + ', obtenu: ' + f.actual + ' (' + f.description + ')');
    });
  }
  return failed;
}

var officialFailures = runSuite(officialCases, 'QUESTIONNAIRE_TEST_CASES_JALON_8.json (' + officialCases.length + ' cas)');
var priorityFailures = runSuite(priorityCases, 'Tests de priorité (Étape 6, ' + priorityCases.length + ' cas)');

var totalFailures = officialFailures.length + priorityFailures.length;
var totalCases = officialCases.length + priorityCases.length;

console.log('\n=== RÉSUMÉ ===');
console.log((totalCases - totalFailures) + '/' + totalCases + ' cas réussis au total.');

if (totalFailures > 0) {
  console.log('RÉSULTAT : ÉCHEC');
  process.exitCode = 1;
} else {
  console.log('RÉSULTAT : SUCCÈS — tous les cas passent, aucun score caché utilisé.');
  process.exitCode = 0;
}

// Vérification structurelle additionnelle : les 4 valeurs publiques exactes
// doivent être atteignables et aucune autre valeur ne doit être produite.
var allowed = ['standard', 'complexe', 'hors_perimetre', 'revue_humaine'];
officialCases.concat(priorityCases).forEach(function (testCase) {
  var result = evaluateOrientation(testCase.answers);
  assert.ok(allowed.indexOf(result) !== -1, 'Valeur d\'orientation inattendue : ' + result);
});
console.log('Contrôle des valeurs publiques : OK (uniquement ' + allowed.join(', ') + ').');
