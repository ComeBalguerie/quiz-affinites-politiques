const QUESTIONS_75 = [
  // GROUPE 1: IMMIGRATION (7 questions) — Scrutin 3213
  { text: "Faut-il augmenter ou réduire le volume d'immigration légale?", context: "Scrutin 3213 (19 déc 2023) — Loi immigration", scrutin: "immigration" },
  { text: "L'immigration familiale doit-elle être facilitée ou restreinte?", context: "Débat regroupement familial — Scrutin 3213", scrutin: "immigration" },
  { text: "Comment traiter l'immigration clandestine: intégration ou expulsion?", context: "Scrutin 3213 — Position sur sans-papiers", scrutin: "immigration" },
  { text: "Les migrants sans-papiers doivent-ils avoir accès aux services publics?", context: "Scrutin 3213 — Débat protection sociale", scrutin: "immigration" },
  { text: "Quelle politique pour la nationalité: faciliter ou durcir les conditions?", context: "Scrutin 3213 — Naturalisation", scrutin: "immigration" },
  { text: "L'immigration de travail qualifiée doit-elle être prioritaire?", context: "Position groupe — Politique emploi", scrutin: "immigration" },
  { text: "Demandeurs d'asile ou immigrés économiques: qui prioritaire?", context: "Scrutin 3213 — Droit d'asile", scrutin: "immigration" },

  // GROUPE 2: ÉNERGIE & CLIMAT (8 questions)
  { text: "Faut-il maintenir les prix de l'énergie bas (subventions) ou au marché?", context: "Scrutin 1243 — Débat énergie", scrutin: "nucleaire" },
  { text: "Doit-on aligner les prix français sur les prix européens?", context: "Position groupe — Débat marchand énergétique", scrutin: "nucleaire" },
  { text: "Le nucléaire ou les énergies renouvelables doivent-ils être prioritaires?", context: "Scrutin 1243 (21 mars 2023) — Énergie", scrutin: "nucleaire" },
  { text: "Faut-il imposer un calendrier strict d'électrification des véhicules?", context: "Position groupe — Transition automobile", scrutin: "emploi" },
  { text: "Doit-on interdire les pesticides ou les réguler graduellement?", context: "Position groupe — Agriculture durable", scrutin: "nucleaire" },
  { text: "Objectifs CO2: prioritaires ou secondaires par rapport à l'économie?", context: "Scrutin 1243 — Débat climat-emploi", scrutin: "nucleaire" },
  { text: "La France doit-elle taxer davantage les énergies fossiles?", context: "Position groupe — Fiscalité écologique", scrutin: "nucleaire" },
  { text: "Faut-il favoriser la décroissance/sobriété ou la croissance verte?", context: "Position groupe — Modèle économique", scrutin: "nucleaire" },

  // GROUPE 3: FIN DE VIE & BIOÉTHIQUE (5 questions)
  { text: "L'aide active à mourir doit-elle être légalisée ou interdite?", context: "Débat bioéthique — Libertés individuelles", scrutin: "sante" },
  { text: "L'IVG doit-elle rester autorisée et jusqu'à quel terme?", context: "Débat bioéthique — Droits des femmes", scrutin: "sante" },
  { text: "La PMA/GPA accessible à tous ou réservée aux couples hétérosexuels?", context: "Débat bioéthique — Égalité", scrutin: "sante" },
  { text: "Doit-on autoriser la gestation pour autrui (GPA)?", context: "Débat bioéthique — Procréation", scrutin: "sante" },
  { text: "L'euthanasie pédiatrique: autorisée en souffrance extrême?", context: "Débat bioéthique — Protection enfance", scrutin: "sante" },

  // GROUPE 4: POUVOIR & INSTITUTIONS (9 questions)
  { text: "L'article 49.3 doit-il être supprimé ou conservé?", context: "Débat constitutionnel — Pouvoir gouvernement", scrutin: "emploi" },
  { text: "Référendum ou démocratie représentative?", context: "Débat système politique — Démocratie directe", scrutin: "emploi" },
  { text: "Parlementaires: augmentations salariales régulières ou gel?", context: "Débat train de vie — Élus", scrutin: "budget" },
  { text: "Cumul des mandats (député + maire): autorisé ou interdit?", context: "Débat concentration pouvoir — Régimes élus", scrutin: "budget" },
  { text: "Élus: régimes retraite spéciaux ou égalité avec citoyens?", context: "Scrutin 2887 — Débat fiscal", scrutin: "budget" },
  { text: "Faut-il réduire le nombre de parlementaires?", context: "Débat efficacité — Dépenses publiques", scrutin: "budget" },
  { text: "Présidence: plus ou moins de pouvoirs?", context: "Débat équilibre pouvoir — Institutions", scrutin: "emploi" },
  { text: "Proportionnelle pour les élections législatives?", context: "Débat représentativité — Système électoral", scrutin: "emploi" },
  { text: "Limiter mandat présidentiel à 1 seul terme?", context: "Débat prévention autoritarisme — Constitution", scrutin: "emploi" },

  // GROUPE 5: SÉCURITÉ & POLICE (5 questions)
  { text: "Moyens police: augmenter ou diminuer?", context: "Débat sécurité — Budget forces ordre", scrutin: "emploi" },
  { text: "Vidéosurveillance systématique: autorisée?", context: "Débat libertés — Surveillance État", scrutin: "emploi" },
  { text: "Policiers: davantage armés?", context: "Débat armement — Protection policiers", scrutin: "emploi" },
  { text: "Peine de mort: doit-elle être réintroduite?", context: "Débat justice — Peines maximales", scrutin: "emploi" },
  { text: "Durcir peines pour crimes de haine (racisme, homophobie)?", context: "Débat justice — Discriminations", scrutin: "emploi" },

  // GROUPE 6: ÉDUCATION (5 questions)
  { text: "Uniforme scolaire: obligatoire?", context: "Débat cohésion — Libertés école", scrutin: "sante" },
  { text: "Écoles privées: subventions publiques?", context: "Scrutin 1488 — Débat école publique/privée", scrutin: "sante" },
  { text: "École: employabilité ou culture générale?", context: "Débat pédagogique — Orientation scolaire", scrutin: "sante" },
  { text: "Faut-il supprimer les notes?", context: "Débat évaluation — Égalité élèves", scrutin: "sante" },
  { text: "Frais université: bas ou augmentés?", context: "Scrutin 1488 — Accès enseignement", scrutin: "sante" },

  // GROUPE 7: ÉCONOMIE & FISCALITÉ (9 questions)
  { text: "Hauts revenus/patrimoine: plus ou moins taxés?", context: "Scrutin 2887 (4 nov 2023) — Fiscalité", scrutin: "budget" },
  { text: "Restaurer impôt sur la fortune (ISF)?", context: "Scrutin 2887 — Fiscalité progressive", scrutin: "budget" },
  { text: "SMIC: augmenter plus vite que inflation?", context: "Scrutin 2965 — Salaire minimum", scrutin: "emploi" },
  { text: "Télétravail: encourager par État?", context: "Scrutin 2965 — Conditions travail", scrutin: "emploi" },
  { text: "Charges sociales: augmenter ou baisser?", context: "Scrutin 2887 — Financement social", scrutin: "budget" },
  { text: "Heures supplémentaires: davantage rémunérées?", context: "Scrutin 2965 — Rémunération travail", scrutin: "emploi" },
  { text: "Retraite: répartition ou épargne individuelle?", context: "Scrutin 1240 (20 mars 2023) — Retraites", scrutin: "retraites" },
  { text: "Allocations chômage: augmenter ou réduire?", context: "Scrutin 2887 — Protection sociale", scrutin: "budget" },
  { text: "Dépenses publiques: réduire ou maintenir?", context: "Scrutin 2887 — Budget État", scrutin: "budget" },

  // GROUPE 8: GENRE & ÉGALITÉ (5 questions)
  { text: "Parité hommes-femmes: imposer par quotas?", context: "Débat égalité — Représentation femmes", scrutin: "sante" },
  { text: "Congés parentaux: partagés ou libres?", context: "Débat égalité — Famille travail", scrutin: "sante" },
  { text: "Transition genre: faciliter l'accès?", context: "Débat droits LGBTQ+ — Santé", scrutin: "sante" },
  { text: "Droits LGBTQ+: être étendus?", context: "Débat égalité — Mariage, PMA", scrutin: "sante" },
  { text: "Discriminations salariales: interdire (transparence)?", context: "Débat égalité — Salaires femmes", scrutin: "sante" },

  // GROUPE 9: IDENTITÉ & DISCRIMINATIONS (4 questions)
  { text: "Racisme systémique: être reconnu et combattu?", context: "Débat justice sociale — Discriminations", scrutin: "emploi" },
  { text: "Créer politiques d'action affirmative pour minorités?", context: "Débat égalité — Réparation historique", scrutin: "emploi" },
  { text: "Laïcité: interdire symboles religieux à l'école?", context: "Débat laïcité — Neutralité État", scrutin: "emploi" },
  { text: "Immigration: sélection par religion/culture?", context: "Scrutin 3213 — Intégration migrants", scrutin: "immigration" },

  // GROUPE 10: AGRICULTURE & RURALITÉ (4 questions)
  { text: "Subventions agricoles (PAC): augmenter ou diminuer?", context: "Scrutin 1488 — Politique agricole", scrutin: "sante" },
  { text: "Agriculture intensive ou biologique: priorité?", context: "Débat environnement — Agriculture durable", scrutin: "nucleaire" },
  { text: "Protéger petits commerces contre grande distribution?", context: "Débat économie locale — Ruralité", scrutin: "emploi" },
  { text: "Encadrer accaparement terres par fonds placement?", context: "Débat protection paysans — Agriculture", scrutin: "sante" },

  // GROUPE 11: SANTÉ (6 questions)
  { text: "Santé: renforcer public ou diversifier privé?", context: "Scrutin 1488 (10 mai 2023) — Système santé", scrutin: "sante" },
  { text: "Hôpitaux publics: plus de financement?", context: "Scrutin 1488 — Services public", scrutin: "sante" },
  { text: "Infirmiers et médecins: augmenter les salaires?", context: "Scrutin 1488 — Attractivité métiers santé", scrutin: "sante" },
  { text: "Soins en zones rurales: garantis ou marché?", context: "Scrutin 1488 — Égalité territoriale", scrutin: "sante" },
  { text: "Tests génétiques: remboursés?", context: "Débat bioéthique — Médecine préventive", scrutin: "sante" },
  { text: "Santé mentale: mieux financée?", context: "Scrutin 1488 — Priorités santé", scrutin: "sante" },

  // GROUPE 12: ENVIRONNEMENT & TRANSPORTS (5 questions)
  { text: "Transports en commun: prioritaire?", context: "Scrutin 1243 — Transition écologique", scrutin: "nucleaire" },
  { text: "Aéroports: développer ou limiter?", context: "Débat environnement — Mobilité", scrutin: "nucleaire" },
  { text: "Interdire vols court-courrier?", context: "Débat climat — Sobriété transport", scrutin: "nucleaire" },
  { text: "Terres artificialisées: restaurer?", context: "Débat biodiversité — Aménagement", scrutin: "nucleaire" },
  { text: "Crimes écologiques: reconnaître et poursuivre?", context: "Débat justice écologique — Environnement", scrutin: "nucleaire" },

  // GROUPE 13: LOGEMENT (4 questions)
  { text: "Prix loyers: encadrer ou libéraliser?", context: "Débat accessibilité — Marché immobilier", scrutin: "budget" },
  { text: "Propriété ou location: favoriser?", context: "Débat politique logement — Patrimoine", scrutin: "budget" },
  { text: "Constructeurs: obligés de créer logement social?", context: "Débat mixité — Offre logement", scrutin: "budget" },
  { text: "Vacant depuis 2 ans: taxer?", context: "Débat offre immobilière — Fiscalité", scrutin: "budget" }
];
