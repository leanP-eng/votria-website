/*
 * VotrIA — Moteur d'orientation "Vérifier mon besoin" (Jalon 8)
 *
 * Fonction pure, sans dépendance au DOM, pour pouvoir être testée
 * directement avec Node (aucune dépendance ajoutée) et utilisée
 * telle quelle dans le navigateur via une balise <script> classique.
 *
 * Règles reprises de VOTRIA_VERIFIER_MON_BESOIN_V0_9.md (Partie I) et
 * précisées par VOTRIA_CODEX_QUESTIONNAIRE_SITE_JALON_8_V0_9.md (Étape 5).
 * Aucune pondération cachée : chaque condition est une règle explicite,
 * évaluée dans l'ordre décrit ci-dessous.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VotrIAQualification = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  var ORIENTATIONS = {
    STANDARD: 'standard',
    COMPLEXE: 'complexe',
    HORS_PERIMETRE: 'hors_perimetre',
    REVUE_HUMAINE: 'revue_humaine'
  };

  var CONSEQUENCES_SIGNIFICATIVES = ['facturation_encaissement', 'risque_marge'];
  var ATTENTES_COMPATIBLES_ECHANGE_COURT = [
    'dossiers_action',
    'transmission_chantier_bureau',
    'priorites_direction',
    'relier_sans_remplacer'
  ];
  var REPARTITIONS_SIMPLES = ['logiciel_et_messagerie', 'logiciel_et_fichiers'];
  var FREQUENCES_ELEVEES = ['plusieurs_par_jour', 'presque_chaque_jour', 'plusieurs_par_semaine'];
  var REPARTITIONS_DECLENCHANT_DIAGNOSTIC = [
    'plusieurs_entites',
    'plusieurs_outils',
    'informations_dispersees',
    'inconnue'
  ];
  // Champs dont le cumul d'inconnues empêche toute classification fiable
  // (voir REVUE HUMAINE : "réponses contradictoires", "plusieurs réponses inconnues").
  var CHAMPS_SURVEILLES_POUR_INCERTITUDE = ['zone', 'frequence', 'attente', 'modele_recurrent'];
  var SEUIL_INCONNUES_POUR_REVUE = 2;

  function isSignificantConsequence(consequence) {
    return CONSEQUENCES_SIGNIFICATIVES.indexOf(consequence) !== -1;
  }

  function countUnknowns(answers, fields) {
    var count = 0;
    for (var i = 0; i < fields.length; i++) {
      if (answers[fields[i]] === 'inconnue') count++;
    }
    return count;
  }

  /**
   * evaluateOrientation(answers) -> 'standard' | 'complexe' | 'hors_perimetre' | 'revue_humaine'
   *
   * answers attend les identifiants stables suivants (voir Étape 3) :
   *   zone, frequence, consequence, activite, effectif, repartition,
   *   attente, modele_recurrent
   * (outil_principal et situation sont transmis à la synthèse mais
   * n'entrent pas dans la logique de décision.)
   */
  function evaluateOrientation(answers) {
    var a = answers || {};

    // 1) Non-adéquation manifeste — priorité absolue, avant toute autre règle.
    if (a.attente === 'remplacer_erp') return ORIENTATIONS.HORS_PERIMETRE;
    if (a.attente === 'outil_sur_mesure') return ORIENTATIONS.HORS_PERIMETRE;
    if (a.attente === 'technologie_seule') return ORIENTATIONS.HORS_PERIMETRE;
    if (a.modele_recurrent === 'non_ponctuel') return ORIENTATIONS.HORS_PERIMETRE;
    if (a.activite === 'negoce_hors_travaux') return ORIENTATIONS.HORS_PERIMETRE;
    if (a.frequence === 'occasionnellement' && !isSignificantConsequence(a.consequence)) {
      return ORIENTATIONS.HORS_PERIMETRE;
    }

    // 2) Effectif hors segment principal — règles dédiées, avant le diagnostic générique.
    if (a.effectif === 'moins_10') {
      var douleurFrequente = FREQUENCES_ELEVEES.indexOf(a.frequence) !== -1;
      var perimetreBorne = a.zone !== 'plusieurs_zones' && a.zone !== 'inconnue';
      var attenteCompatible = ATTENTES_COMPATIBLES_ECHANGE_COURT.indexOf(a.attente) !== -1;
      var repartitionSimple = REPARTITIONS_SIMPLES.indexOf(a.repartition) !== -1;
      if (douleurFrequente && perimetreBorne && attenteCompatible && repartitionSimple) {
        return ORIENTATIONS.REVUE_HUMAINE;
      }
      return ORIENTATIONS.HORS_PERIMETRE;
    }

    if (a.effectif === 'plus_50') {
      // Jamais standard automatiquement ; revue humaine systématique.
      return ORIENTATIONS.REVUE_HUMAINE;
    }

    // 3) Incertitude trop élevée pour appliquer une règle spécifique.
    if (countUnknowns(a, CHAMPS_SURVEILLES_POUR_INCERTITUDE) >= SEUIL_INCONNUES_POUR_REVUE) {
      return ORIENTATIONS.REVUE_HUMAINE;
    }

    // 4) Diagnostic obligatoire ou fortement recommandé.
    if (a.effectif === 'de_35_a_50') return ORIENTATIONS.COMPLEXE;
    if (REPARTITIONS_DECLENCHANT_DIAGNOSTIC.indexOf(a.repartition) !== -1) return ORIENTATIONS.COMPLEXE;
    if (a.zone === 'plusieurs_zones') return ORIENTATIONS.COMPLEXE;

    // 5) Échange court — uniquement si toutes les conditions sont réunies.
    var effectifCoeurCible = a.effectif === 'de_10_a_24' || a.effectif === 'de_25_a_34';
    var zoneIdentifiee = a.zone !== 'plusieurs_zones' && a.zone !== 'inconnue';
    var frequenceElevee = FREQUENCES_ELEVEES.indexOf(a.frequence) !== -1;
    var consequenceIdentifiee = !!a.consequence && a.consequence !== 'autre' && a.consequence !== 'inconnue';
    var repartitionSimpleEchange = REPARTITIONS_SIMPLES.indexOf(a.repartition) !== -1;
    var attenteCompatibleEchange = ATTENTES_COMPATIBLES_ECHANGE_COURT.indexOf(a.attente) !== -1;
    var modeleAccepte = a.modele_recurrent === 'oui' || a.modele_recurrent === 'a_comprendre';
    var neDemandePasRemplacement = a.attente !== 'remplacer_erp';

    if (
      effectifCoeurCible &&
      zoneIdentifiee &&
      frequenceElevee &&
      consequenceIdentifiee &&
      repartitionSimpleEchange &&
      attenteCompatibleEchange &&
      modeleAccepte &&
      neDemandePasRemplacement
    ) {
      return ORIENTATIONS.STANDARD;
    }

    // 6) Revue humaine — état de sécurité par défaut, jamais "standard" par défaut.
    return ORIENTATIONS.REVUE_HUMAINE;
  }

  return {
    ORIENTATIONS: ORIENTATIONS,
    evaluateOrientation: evaluateOrientation
  };
});
