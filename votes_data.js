// GROUPES PARLEMENTAIRES
const GROUPES = {
  "RE": { label: "Renaissance", couleur: "#1f4788" },
  "RN": { label: "Rassemblement National", couleur: "#000000" },
  "LR": { label: "Les Républicains", couleur: "#1e90ff" },
  "DEM": { label: "Démocrate Mouvement", couleur: "#ff8c00" },
  "HOR": { label: "Horizons", couleur: "#87ceeb" },
  "LFI": { label: "La France insoumise", couleur: "#ee1c25" },
  "SOC": { label: "Socialistes", couleur: "#e91e63" },
  "ECOLO": { label: "Écologistes", couleur: "#228b22" },
  "GDR": { label: "Gauche démocrate républicaine", couleur: "#ff0000" },
  "LIOT": { label: "Libertés et Territoires", couleur: "#ffa500" },
  "NI": { label: "Non inscrits", couleur: "#cccccc" }
};

// SCRUTINS ET VOTES PERSONNAGES
const SCRUTINS = [
  {
    id: "immigration",
    titre: "Immigration",
    description: "Projet de loi sur l'immigration et l'asile (19 déc 2023)",
    scrutinAN: 3213,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Gabriel Attal": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Florent Boudié": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Éric Bothorel": { groupe: "RE", votes: ["abstention", "pour", "pour", "pour", "pour"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Olivier Marleix": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["abstention", "pour", "abstention", "pour", "pour"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "François Ruffin": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Danièle Obono": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Olivier Faure": { groupe: "SOC", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "André Chassaigne": { groupe: "GDR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["abstention", "pour", "abstention", "pour", "pour"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] }
    }
  },
  {
    id: "nucleaire",
    titre: "Énergie Nucléaire",
    description: "Programmation pluriannuelle de l'énergie (21 mars 2023)",
    scrutinAN: 1243,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Gabriel Attal": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Florent Boudié": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Éric Bothorel": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Olivier Marleix": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "François Ruffin": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Danièle Obono": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Olivier Faure": { groupe: "SOC", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "André Chassaigne": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour"] }
    }
  },
  {
    id: "retraites",
    titre: "Réforme des Retraites",
    description: "Motion de censure contre la réforme (20 mars 2023)",
    scrutinAN: 1240,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Gabriel Attal": { groupe: "RE", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Florent Boudié": { groupe: "RE", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Éric Bothorel": { groupe: "RE", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Olivier Marleix": { groupe: "LR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["contre", "contre", "contre", "contre", "contre"] },
      "François Ruffin": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Danièle Obono": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Olivier Faure": { groupe: "SOC", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "André Chassaigne": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["pour", "pour", "pour", "pour", "pour"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["contre", "contre", "contre", "contre", "contre"] }
    }
  },
  {
    id: "defense",
    titre: "Défense & Loi de Programmation Militaire",
    description: "Programmation militaire 2024-2030 (7 juin 2023)",
    scrutinAN: 1778,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Gabriel Attal": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Florent Boudié": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Éric Bothorel": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Olivier Marleix": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "François Ruffin": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Danièle Obono": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["abstention", "abstention", "abstention", "abstention", "abstention", "abstention"] },
      "Olivier Faure": { groupe: "SOC", votes: ["abstention", "abstention", "abstention", "abstention", "abstention", "abstention"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["abstention", "abstention", "abstention", "abstention", "abstention", "abstention"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["abstention", "abstention", "abstention", "abstention", "abstention", "abstention"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["abstention", "abstention", "abstention", "abstention", "abstention", "abstention"] },
      "André Chassaigne": { groupe: "GDR", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["contre", "contre", "contre", "contre", "contre", "contre"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["pour", "pour", "pour", "pour", "pour", "pour"] }
    }
  },
  {
    id: "sante",
    titre: "Santé & Politique Sanitaire",
    description: "Commission mixte paritaire sur la santé (10 mai 2023)",
    scrutinAN: 1488,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["pour", "pour", "pour", "pour"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["pour", "pour", "pour", "pour"] },
      "Gabriel Attal": { groupe: "RE", votes: ["pour", "pour", "pour", "pour"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["pour", "pour", "pour", "pour"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["pour", "pour", "pour", "pour"] },
      "Florent Boudié": { groupe: "RE", votes: ["pour", "pour", "pour", "pour"] },
      "Éric Bothorel": { groupe: "RE", votes: ["pour", "pour", "pour", "pour"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["pour", "pour", "pour", "pour"] },
      "Olivier Marleix": { groupe: "LR", votes: ["pour", "pour", "pour", "pour"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["abstention", "pour", "pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["pour", "pour", "pour", "pour"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["pour", "pour", "pour", "pour"] },
      "François Ruffin": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour"] },
      "Danièle Obono": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["pour", "pour", "pour", "pour"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["pour", "pour", "pour", "pour"] },
      "Olivier Faure": { groupe: "SOC", votes: ["pour", "pour", "pour", "pour"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["pour", "pour", "pour", "pour"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["pour", "pour", "pour", "pour"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["pour", "pour", "pour", "pour"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["pour", "pour", "pour", "pour"] },
      "André Chassaigne": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["pour", "pour", "pour", "pour"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["pour", "pour", "pour", "pour"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["pour", "pour", "pour", "pour"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["pour", "pour", "pour", "pour"] }
    }
  },
  {
    id: "budget",
    titre: "Budget & Fiscalité",
    description: "Projet de loi de finances 2024 (4 nov 2023)",
    scrutinAN: 2887,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["abstention", "contre", "contre"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["abstention", "contre", "contre"] },
      "Gabriel Attal": { groupe: "RE", votes: ["abstention", "pour", "pour"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["abstention", "pour", "pour"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["abstention", "pour", "pour"] },
      "Florent Boudié": { groupe: "RE", votes: ["abstention", "pour", "pour"] },
      "Éric Bothorel": { groupe: "RE", votes: ["abstention", "pour", "pour"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["abstention", "pour", "pour"] },
      "Olivier Marleix": { groupe: "LR", votes: ["abstention", "pour", "pour"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["abstention", "pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["abstention", "pour", "pour"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["abstention", "pour", "pour"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["abstention", "pour", "pour"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["abstention", "pour", "pour"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["abstention", "pour", "pour"] },
      "François Ruffin": { groupe: "LFI", votes: ["pour", "contre", "contre"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["pour", "contre", "contre"] },
      "Danièle Obono": { groupe: "LFI", votes: ["pour", "contre", "contre"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["pour", "contre", "contre"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["abstention", "contre", "contre"] },
      "Olivier Faure": { groupe: "SOC", votes: ["abstention", "contre", "contre"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["abstention", "contre", "contre"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["abstention", "contre", "contre"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["abstention", "contre", "contre"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["abstention", "contre", "contre"] },
      "André Chassaigne": { groupe: "GDR", votes: ["abstention", "contre", "contre"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["abstention", "contre", "contre"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["abstention", "contre", "contre"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["abstention", "pour", "pour"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["abstention", "pour", "pour"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["abstention", "pour", "pour"] }
    }
  },
  {
    id: "emploi",
    titre: "Emploi & Travail",
    description: "Commission mixte paritaire sur l'emploi (14 nov 2023)",
    scrutinAN: 2965,
    personnages: {
      "Marine Le Pen": { groupe: "RN", votes: ["contre", "contre"] },
      "Sébastien Chenu": { groupe: "RN", votes: ["contre", "contre"] },
      "Gabriel Attal": { groupe: "RE", votes: ["pour", "pour"] },
      "Gérald Darmanin": { groupe: "RE", votes: ["pour", "pour"] },
      "Bruno Le Maire": { groupe: "RE", votes: ["pour", "pour"] },
      "Florent Boudié": { groupe: "RE", votes: ["pour", "pour"] },
      "Éric Bothorel": { groupe: "RE", votes: ["pour", "pour"] },
      "Laurent Wauquiez": { groupe: "LR", votes: ["pour", "pour"] },
      "Olivier Marleix": { groupe: "LR", votes: ["pour", "pour"] },
      "Aurélien Pradié": { groupe: "LR", votes: ["pour", "pour"] },
      "François Bayrou": { groupe: "DEM", votes: ["pour", "pour"] },
      "Jean-Noël Barrot": { groupe: "DEM", votes: ["pour", "pour"] },
      "Olivier Falorni": { groupe: "DEM", votes: ["pour", "pour"] },
      "Laurent Marcangeli": { groupe: "HOR", votes: ["pour", "pour"] },
      "Élisabeth Borne": { groupe: "HOR", votes: ["pour", "pour"] },
      "François Ruffin": { groupe: "LFI", votes: ["contre", "contre"] },
      "Mathilde Panot": { groupe: "LFI", votes: ["contre", "contre"] },
      "Danièle Obono": { groupe: "LFI", votes: ["contre", "contre"] },
      "Clémentine Autain": { groupe: "LFI", votes: ["contre", "contre"] },
      "Boris Vallaud": { groupe: "SOC", votes: ["contre", "contre"] },
      "Olivier Faure": { groupe: "SOC", votes: ["contre", "contre"] },
      "Raphaël Glucksmann": { groupe: "SOC", votes: ["contre", "contre"] },
      "Yannick Jadot": { groupe: "ECOLO", votes: ["contre", "contre"] },
      "Sandrine Rousseau": { groupe: "ECOLO", votes: ["contre", "contre"] },
      "Cyrielle Chatelain": { groupe: "ECOLO", votes: ["contre", "contre"] },
      "André Chassaigne": { groupe: "GDR", votes: ["contre", "contre"] },
      "Pierre Dharréville": { groupe: "GDR", votes: ["contre", "contre"] },
      "Fabien Roussel": { groupe: "GDR", votes: ["contre", "contre"] },
      "Bertrand Pancher": { groupe: "LIOT", votes: ["contre", "abstention"] },
      "Nicolas Dupont-Aignan": { groupe: "NI", votes: ["pour", "contre"] },
      "Yaël Braun-Pivet": { groupe: "RE", votes: ["pour", "pour"] }
    }
  }
];

// CALCUL DES AFFINITÉS
function calculerAffiniteParti(reponses, parti) {
  let totalAccord = 0;
  let totalVotes = 0;
  
  SCRUTINS.forEach((scrutin, scrutinIdx) => {
    let scoreParti = 0;
    let compteur = 0;
    
    Object.values(scrutin.personnages).forEach(perso => {
      if (perso.groupe === parti) {
        for (let i = 0; i < perso.votes.length; i++) {
          const reponseUser = reponses[scrutinIdx * 5 + i];
          if (reponseUser && perso.votes[i]) {
            if (reponseUser === perso.votes[i]) {
              scoreParti++;
            }
            compteur++;
          }
        }
      }
    });
    
    if (compteur > 0) {
      totalAccord += scoreParti;
      totalVotes += compteur;
    }
  });
  
  return totalVotes > 0 ? Math.round((totalAccord / totalVotes) * 100) : 0;
}

function calculerAffinitePersonnage(reponses, perso) {
  let totalAccord = 0;
  let totalVotes = 0;
  
  SCRUTINS.forEach((scrutin, scrutinIdx) => {
    if (scrutin.personnages[perso]) {
      const votes = scrutin.personnages[perso].votes;
      for (let i = 0; i < votes.length; i++) {
        const qIdx = scrutinIdx * 5 + i;
        const reponseUser = reponses[qIdx];
        if (reponseUser && votes[i]) {
          if (reponseUser === votes[i]) {
            totalAccord++;
          }
          totalVotes++;
        }
      }
    }
  });
  
  return totalVotes > 0 ? Math.round((totalAccord / totalVotes) * 100) : 0;
}
