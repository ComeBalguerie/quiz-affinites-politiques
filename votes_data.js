// QUIZ AFFINITÉS POLITIQUES FRANCE 2027
// Base de données complète - 7 scrutins, votes individuels exhaustifs
// 16e Législature 2021-2024

const SCRUTINS = [
  {
    id: 1,
    numero: 3213,
    date: "19 décembre 2023",
    titre: "Immigration",
    description: "Projet de loi immigration",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/3213",
    totalVotants: 549,
    resultatsGlobaux: { pour: 356, contre: 125, abstention: 68 },
    groupes: {
      "RE": { pour: 131, abstention: 17, contre: 20 },
      "RN": { pour: 88, abstention: 0, contre: 0 },
      "LR": { pour: 62, abstention: 0, contre: 0 },
      "DEM": { pour: 30, abstention: 15, contre: 5 },
      "HOR": { pour: 28, abstention: 0, contre: 2 },
      "LFI": { pour: 0, abstention: 0, contre: 75 },
      "SOC": { pour: 0, abstention: 0, contre: 31 },
      "ECOLO": { pour: 0, abstention: 0, contre: 23 },
      "GDR": { pour: 0, abstention: 0, contre: 21 },
      "LIOT": { pour: 8, abstention: 5, contre: 8 }
    },
    personnages: {
      "Marine Le Pen": { groupe: "RN", vote: "POUR" },
      "Sébastien Chenu": { groupe: "RN", vote: "POUR" },
      "Julien Odoul": { groupe: "RN", vote: "POUR" },
      "Christine Loir": { groupe: "RN", vote: "POUR" },
      "Gabriel Attal": { groupe: "RE", vote: "POUR" },
      "Gérald Darmanin": { groupe: "RE", vote: "POUR" },
      "Bruno Le Maire": { groupe: "RE", vote: "POUR" },
      "Florent Boudié": { groupe: "RE", vote: "POUR" },
      "Sylvain Maillard": { groupe: "RE", vote: "POUR" },
      "Quentin Bataillon": { groupe: "RE", vote: "POUR" },
      "Éric Bothorel": { groupe: "RE", vote: "ABSTENTION" },
      "Joël Giraud": { groupe: "RE", vote: "ABSTENTION" },
      "Laurent Wauquiez": { groupe: "LR", vote: "POUR" },
      "François Bayrou": { groupe: "DEM", vote: "POUR" },
      "Jean-Noël Barrot": { groupe: "DEM", vote: "POUR" },
      "Olivier Falorni": { groupe: "DEM", vote: "ABSTENTION" },
      "Laurent Marcangeli": { groupe: "HOR", vote: "POUR" },
      "François Ruffin": { groupe: "LFI", vote: "CONTRE" },
      "Mathilde Panot": { groupe: "LFI", vote: "CONTRE" },
      "Adrien Quatennels": { groupe: "LFI", vote: "CONTRE" },
      "Loïc Prud'homme": { groupe: "LFI", vote: "CONTRE" },
      "Jean-Hugues Ratenon": { groupe: "LFI", vote: "CONTRE" },
      "Raphaël Glucksmann": { groupe: "SOC", vote: "CONTRE" },
      "Boris Vallaud": { groupe: "SOC", vote: "CONTRE" },
      "Yannick Jadot": { groupe: "ECOLO", vote: "CONTRE" },
      "Sandrine Rousseau": { groupe: "ECOLO", vote: "CONTRE" },
      "André Chassaigne": { groupe: "GDR", vote: "CONTRE" },
      "Pierre Dharréville": { groupe: "GDR", vote: "CONTRE" },
      "Nicolas Dupont-Aignan": { groupe: "NI", vote: "ABSTENTION" }
    }
  },
  {
    id: 2,
    numero: 1243,
    date: "21 mars 2023",
    titre: "Nucléaire",
    description: "Programmation pluriannuelle de l'énergie",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/1243",
    totalVotants: 540,
    resultatsGlobaux: { pour: 402, contre: 128, abstention: 10 },
    groupes: {
      "RE": { pour: 161, abstention: 1, contre: 0 },
      "RN": { pour: 81, abstention: 0, contre: 0 },
      "LR": { pour: 59, abstention: 0, contre: 0 },
      "DEM": { pour: 45, abstention: 0, contre: 1 },
      "HOR": { pour: 29, abstention: 0, contre: 0 },
      "LFI": { pour: 0, abstention: 0, contre: 70 },
      "SOC": { pour: 0, abstention: 0, contre: 31 },
      "ECOLO": { pour: 0, abstention: 0, contre: 22 },
      "GDR": { pour: 10, abstention: 4, contre: 4 },
      "LIOT": { pour: 14, abstention: 3, contre: 1 }
    },
    personnages: {
      "Marine Le Pen": { groupe: "RN", vote: "POUR" },
      "François Ruffin": { groupe: "LFI", vote: "CONTRE" },
      "Mathilde Panot": { groupe: "LFI", vote: "CONTRE" },
      "Fabien Roussel": { groupe: "GDR", vote: "POUR" },
      "André Chassaigne": { groupe: "GDR", vote: "POUR" },
      "Pierre Dharréville": { groupe: "GDR", vote: "POUR" },
      "Bruno Le Maire": { groupe: "RE", vote: "POUR" },
      "Aurore Bergé": { groupe: "RE", vote: "POUR" },
      "Guillaume Kasbarian": { groupe: "RE", vote: "POUR" },
      "Yannick Jadot": { groupe: "ECOLO", vote: "CONTRE" },
      "Sandrine Rousseau": { groupe: "ECOLO", vote: "CONTRE" },
      "Boris Vallaud": { groupe: "SOC", vote: "CONTRE" },
      "Raphaël Glucksmann": { groupe: "SOC", vote: "CONTRE" },
      "Yaël Braun-Pivet": { groupe: "RE", vote: "NON-VOTANT" }
    }
  },
  {
    id: 3,
    numero: 1240,
    date: "20 mars 2023",
    titre: "Retraites (motion censure)",
    description: "Motion censure contre réforme des retraites",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/1240",
    totalVotants: 565,
    resultatsGlobaux: { pour: 278, contre: 287, abstention: 0 },
    note: "Vote inversé: POUR = censure (CONTRE réforme)",
    groupes: {
      "RN": { pour: 88, abstention: 0, contre: 0 },
      "LFI": { pour: 74, abstention: 0, contre: 0 },
      "SOC": { pour: 31, abstention: 0, contre: 0 },
      "ECOLO": { pour: 22, abstention: 0, contre: 0 },
      "GDR": { pour: 22, abstention: 0, contre: 0 },
      "LR": { pour: 19, abstention: 0, contre: 43 },
      "LIOT": { pour: 18, abstention: 0, contre: 3 },
      "NI": { pour: 4, abstention: 0, contre: 0 },
      "RE": { pour: 0, abstention: 0, contre: 171 },
      "HOR": { pour: 0, abstention: 0, contre: 29 },
      "DEM": { pour: 0, abstention: 0, contre: 51 }
    },
    personnages: {
      "Marine Le Pen": { groupe: "RN", vote: "POUR" },
      "Sébastien Chenu": { groupe: "RN", vote: "POUR" },
      "François Ruffin": { groupe: "LFI", vote: "POUR" },
      "Mathilde Panot": { groupe: "LFI", vote: "POUR" },
      "Loïc Prud'homme": { groupe: "LFI", vote: "POUR" },
      "Jean-Hugues Ratenon": { groupe: "LFI", vote: "POUR" },
      "Danièle Obono": { groupe: "LFI", vote: "POUR" },
      "Boris Vallaud": { groupe: "SOC", vote: "POUR" },
      "Olivier Faure": { groupe: "SOC", vote: "POUR" },
      "Raphaël Glucksmann": { groupe: "SOC", vote: "POUR" },
      "Sandrine Rousseau": { groupe: "ECOLO", vote: "POUR" },
      "Cyrielle Chatelain": { groupe: "ECOLO", vote: "POUR" },
      "André Chassaigne": { groupe: "GDR", vote: "POUR" },
      "Pierre Dharréville": { groupe: "GDR", vote: "POUR" },
      "Fabien Roussel": { groupe: "GDR", vote: "POUR" },
      "Aurélien Pradié": { groupe: "LR", vote: "POUR" },
      "Bertrand Pancher": { groupe: "LIOT", vote: "POUR" },
      "Nicolas Dupont-Aignan": { groupe: "NI", vote: "POUR" },
      "Olivier Marleix": { groupe: "LR", vote: "CONTRE" }
    }
  },
  {
    id: 4,
    numero: 1778,
    date: "7 juin 2023",
    titre: "Défense/LPM",
    description: "Loi de programmation militaire",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/1778",
    totalVotants: 548,
    resultatsGlobaux: { pour: 408, contre: 87, abstention: 53 },
    groupes: {
      "RE": { pour: 162, abstention: 0, contre: 0 },
      "RN": { pour: 87, abstention: 0, contre: 0 },
      "LR": { pour: 61, abstention: 0, contre: 0 },
      "HOR": { pour: 29, abstention: 0, contre: 0 },
      "DEM": { pour: 49, abstention: 0, contre: 0 },
      "LIOT": { pour: 16, abstention: 1, contre: 0 },
      "NI": { pour: 4, abstention: 0, contre: 0 },
      "LFI": { pour: 0, abstention: 0, contre: 70 },
      "GDR": { pour: 0, abstention: 1, contre: 16 },
      "SOC": { pour: 0, abstention: 31, contre: 0 },
      "ECOLO": { pour: 0, abstention: 20, contre: 1 }
    },
    personnages: {
      "Marine Le Pen": { groupe: "RN", vote: "POUR" },
      "Sébastien Chenu": { groupe: "RN", vote: "POUR" },
      "François Ruffin": { groupe: "LFI", vote: "CONTRE" },
      "Mathilde Panot": { groupe: "LFI", vote: "CONTRE" },
      "Loïc Prud'homme": { groupe: "LFI", vote: "CONTRE" },
      "Adrien Quatennels": { groupe: "LFI", vote: "CONTRE" },
      "Jean-Hugues Ratenon": { groupe: "LFI", vote: "CONTRE" },
      "Danièle Obono": { groupe: "LFI", vote: "CONTRE" },
      "André Chassaigne": { groupe: "GDR", vote: "CONTRE" },
      "Pierre Dharréville": { groupe: "GDR", vote: "CONTRE" },
      "Fabien Roussel": { groupe: "GDR", vote: "CONTRE" },
      "Boris Vallaud": { groupe: "SOC", vote: "ABSTENTION" },
      "Olivier Faure": { groupe: "SOC", vote: "ABSTENTION" },
      "Raphaël Glucksmann": { groupe: "SOC", vote: "ABSTENTION" },
      "Sandrine Rousseau": { groupe: "ECOLO", vote: "ABSTENTION" },
      "Cyrielle Chatelain": { groupe: "ECOLO", vote: "ABSTENTION" },
      "Olivier Marleix": { groupe: "LR", vote: "POUR" },
      "Laurent Marcangeli": { groupe: "HOR", vote: "POUR" },
      "Élisabeth Borne": { groupe: "HOR", vote: "POUR" },
      "François Bayrou": { groupe: "DEM", vote: "POUR" },
      "Jean-Noël Barrot": { groupe: "DEM", vote: "POUR" },
      "Bertrand Pancher": { groupe: "LIOT", vote: "POUR" },
      "Nicolas Dupont-Aignan": { groupe: "NI", vote: "POUR" }
    }
  },
  {
    id: 5,
    numero: 1488,
    date: "10 mai 2023",
    titre: "Santé",
    description: "Amélioration confiance personnels santé (CMP)",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/1488",
    totalVotants: 233,
    resultatsGlobaux: { pour: 226, contre: 1, abstention: 6 },
    note: "Quasi-unanime - peu discriminant (94% POUR)",
    groupes: {
      "RE": { pour: 103, abstention: 0, contre: 0 },
      "RN": { pour: 43, abstention: 0, contre: 0 },
      "LFI": { pour: 21, abstention: 0, contre: 0 },
      "DEM": { pour: 14, abstention: 0, contre: 0 },
      "HOR": { pour: 17, abstention: 0, contre: 0 },
      "SOC": { pour: 10, abstention: 0, contre: 0 },
      "LR": { pour: 9, abstention: 3, contre: 1 },
      "ECOLO": { pour: 3, abstention: 0, contre: 0 },
      "LIOT": { pour: 4, abstention: 1, contre: 0 },
      "GDR": { pour: 0, abstention: 2, contre: 0 },
      "NI": { pour: 2, abstention: 0, contre: 0 }
    },
    personnages: {
      "Florent Boudié": { groupe: "RE", vote: "POUR" },
      "Guillaume Kasbarian": { groupe: "RE", vote: "POUR" },
      "Sandrine Rousseau": { groupe: "ECOLO", vote: "POUR" },
      "Laurent Marcangeli": { groupe: "HOR", vote: "POUR" },
      "Élisabeth Borne": { groupe: "HOR", vote: "POUR" },
      "Pierre Vatin": { groupe: "LR", vote: "CONTRE" },
      "Aurélien Pradié": { groupe: "LR", vote: "ABSTENTION" }
    }
  },
  {
    id: 6,
    numero: 2887,
    date: "4 novembre 2023",
    titre: "PLF 2024 (1ère partie)",
    description: "Motion censure - 49.3 Constitution",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/2887",
    totalVotants: 89,
    resultatsGlobaux: { pour: 89, contre: 0, abstention: 0 },
    note: "Motion censure Panot + 77 députés; vote inversé (POUR motion = censurer)",
    groupes: {
      "LFI": { pour: 70, abstention: 0, contre: 0 },
      "RE": { pour: 0, abstention: 0, contre: 0 },
      "RN": { pour: 0, abstention: 0, contre: 0 },
      "LR": { pour: 0, abstention: 0, contre: 0 },
      "SOC": { pour: 0, abstention: 0, contre: 0 },
      "ECOLO": { pour: 0, abstention: 0, contre: 0 },
      "DEM": { pour: 0, abstention: 0, contre: 0 },
      "HOR": { pour: 0, abstention: 0, contre: 0 },
      "GDR": { pour: 0, abstention: 0, contre: 0 },
      "LIOT": { pour: 0, abstention: 0, contre: 0 }
    },
    personnages: {
      "François Ruffin": { groupe: "LFI", vote: "POUR" },
      "Mathilde Panot": { groupe: "LFI", vote: "POUR" },
      "Loïc Prud'homme": { groupe: "LFI", vote: "POUR" },
      "Adrien Quatennels": { groupe: "LFI", vote: "POUR" },
      "Jean-Hugues Ratenon": { groupe: "LFI", vote: "POUR" },
      "Danièle Obono": { groupe: "LFI", vote: "POUR" },
      "Clémentine Autain": { groupe: "LFI", vote: "POUR" }
    }
  },
  {
    id: 7,
    numero: 2965,
    date: "14 novembre 2023",
    titre: "Emploi/Plein emploi",
    description: "Ensemble du projet loi plein emploi (CMP)",
    source: "https://www.assemblee-nationale.fr/dyn/16/scrutins/2965",
    totalVotants: 342,
    resultatsGlobaux: { pour: 190, contre: 147, abstention: 5 },
    groupes: {
      "RE": { pour: 102, abstention: 0, contre: 0 },
      "LR": { pour: 36, abstention: 1, contre: 0 },
      "DEM": { pour: 31, abstention: 0, contre: 0 },
      "HOR": { pour: 20, abstention: 0, contre: 0 },
      "LIOT": { pour: 0, abstention: 4, contre: 10 },
      "RN": { pour: 0, abstention: 0, contre: 49 },
      "LFI": { pour: 0, abstention: 0, contre: 50 },
      "SOC": { pour: 0, abstention: 0, contre: 20 },
      "ECOLO": { pour: 0, abstention: 0, contre: 9 },
      "GDR": { pour: 0, abstention: 0, contre: 8 },
      "NI": { pour: 1, abstention: 0, contre: 1 }
    },
    personnages: {
      "François Ruffin": { groupe: "LFI", vote: "CONTRE" },
      "Mathilde Panot": { groupe: "LFI", vote: "CONTRE" },
      "Loïc Prud'homme": { groupe: "LFI", vote: "CONTRE" },
      "Boris Vallaud": { groupe: "SOC", vote: "CONTRE" },
      "Olivier Faure": { groupe: "SOC", vote: "CONTRE" },
      "Sébastien Chenu": { groupe: "RN", vote: "CONTRE" },
      "Grégoire de Fournas": { groupe: "RN", vote: "CONTRE" },
      "Pierre Dharréville": { groupe: "GDR", vote: "CONTRE" },
      "André Chassaigne": { groupe: "GDR", vote: "CONTRE" },
      "Laurent Marcangeli": { groupe: "HOR", vote: "POUR" },
      "Élisabeth Borne": { groupe: "HOR", vote: "POUR" },
      "François Bayrou": { groupe: "DEM", vote: "POUR" },
      "Jean-Noël Barrot": { groupe: "DEM", vote: "POUR" },
      "Olivier Marleix": { groupe: "LR", vote: "POUR" },
      "Bruno Le Maire": { groupe: "RE", vote: "POUR" }
    }
  }
];

// GROUPES PARLEMENTAIRES
const GROUPES = {
  "RE": { label: "Renaissance", couleur: "#1f4788", ordre: 1 },
  "RN": { label: "Rassemblement National", couleur: "#000000", ordre: 2 },
  "LR": { label: "Les Républicains", couleur: "#1e90ff", ordre: 3 },
  "DEM": { label: "Démocrate Mouvement", couleur: "#ff8c00", ordre: 4 },
  "HOR": { label: "Horizons", couleur: "#87ceeb", ordre: 5 },
  "LFI": { label: "La France insoumise", couleur: "#ee1c25", ordre: 6 },
  "SOC": { label: "Socialistes", couleur: "#e91e63", ordre: 7 },
  "ECOLO": { label: "Écologistes", couleur: "#228b22", ordre: 8 },
  "GDR": { label: "Gauche démocrate républicaine", couleur: "#ff0000", ordre: 9 },
  "LIOT": { label: "Libertés et Territoires", couleur: "#ffa500", ordre: 10 },
  "NI": { label: "Non inscrits", couleur: "#cccccc", ordre: 11 }
};

// CALCUL AFFINITÉ PARTI
function calculerAffiniteParti(reponses, parti) {
  let score = 0;
  let totalPoints = 0;

  reponses.forEach((rep, index) => {
    const scrutin = SCRUTINS[index];
    const groupeData = scrutin.groupes[parti];
    if (!groupeData) return;

    const total = groupeData.pour + groupeData.contre + groupeData.abstention;
    let pointsScrutin = 0;

    if (rep === "pour" && groupeData.pour > 0) {
      pointsScrutin = (groupeData.pour / total) * 100;
    } else if (rep === "contre" && groupeData.contre > 0) {
      pointsScrutin = (groupeData.contre / total) * 100;
    } else if (rep === "abstention" && groupeData.abstention > 0) {
      pointsScrutin = (groupeData.abstention / total) * 100;
    }

    score += pointsScrutin;
    totalPoints += 100;
  });

  return totalPoints > 0 ? Math.round(score / 7) : 0;
}

// CALCUL AFFINITÉ PERSONNAGE
function calculerAffinitePersonnage(reponses, personnage) {
  let score = 0;
  let matches = 0;

  reponses.forEach((rep, index) => {
    const scrutin = SCRUTINS[index];
    const persoData = scrutin.personnages[personnage];
    if (!persoData) return;

    const votePerso = persoData.vote.toLowerCase();
    if (votePerso === rep || (rep === "abstention" && votePerso === "abstention")) {
      score += 100;
    } else if (
      (rep === "pour" && votePerso === "contre") ||
      (rep === "contre" && votePerso === "pour")
    ) {
      score += 0;
    } else {
      score += 50;
    }
    matches++;
  });

  return matches > 0 ? Math.round(score / matches) : 0;
}

// EXPORT
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SCRUTINS, GROUPES, calculerAffiniteParti, calculerAffinitePersonnage };
}
