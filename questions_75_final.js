const QUESTIONS_75 = [
  // GROUPE 1: IMMIGRATION (7 questions)
  { 
    text: "Le volume d'immigration légale devrait-il être...",
    options: ["Augmenté", "Maintenu", "Réduit"],
    context: "Scrutin 3213 (19 déc 2023) — Loi immigration",
    scrutin: "immigration"
  },
  { 
    text: "L'immigration familiale devrait-elle être...",
    options: ["Facilitée", "Inchangée", "Restreinte"],
    context: "Débat regroupement familial — Scrutin 3213",
    scrutin: "immigration"
  },
  { 
    text: "Face à l'immigration clandestine, la priorité est...",
    options: ["L'intégration", "Entre les deux", "L'expulsion"],
    context: "Scrutin 3213 — Position sur sans-papiers",
    scrutin: "immigration"
  },
  { 
    text: "Les migrants sans-papiers devraient avoir accès aux services publics (santé, école)?",
    options: ["Oui, priorité aux droits humains", "Cas par cas", "Non, priorité aux citoyens"],
    context: "Scrutin 3213 — Débat protection sociale",
    scrutin: "immigration"
  },
  { 
    text: "Les conditions pour obtenir la nationalité française doivent-elles être...",
    options: ["Facilitées", "Inchangées", "Durcies"],
    context: "Scrutin 3213 — Naturalisation",
    scrutin: "immigration"
  },
  { 
    text: "L'immigration de travail qualifiée devrait-elle être...",
    options: ["Prioritaire", "Égale aux autres", "Secondaire"],
    context: "Position groupe — Politique emploi",
    scrutin: "immigration"
  },
  { 
    text: "Entre demandeurs d'asile et immigrés économiques, qui a priorité?",
    options: ["Asile d'abord", "Égalité", "Économie d'abord"],
    context: "Scrutin 3213 — Droit d'asile",
    scrutin: "immigration"
  },

  // GROUPE 2: ÉNERGIE & CLIMAT (8 questions)
  { 
    text: "Les prix de l'énergie en France devraient-ils être...",
    options: ["Subventionnés (bas)", "Au marché", "Augmentés (signal prix)"],
    context: "Scrutin 1243 — Débat énergie",
    scrutin: "nucleaire"
  },
  { 
    text: "L'alignement des prix français sur les prix européens est...",
    options: ["Souhaitable", "Indifférent", "À éviter"],
    context: "Position groupe — Marché énergétique",
    scrutin: "nucleaire"
  },
  { 
    text: "La priorité énergétique de la France devrait être...",
    options: ["Nucléaire", "Mix équilibré", "Énergies renouvelables"],
    context: "Scrutin 1243 (21 mars 2023) — Énergie",
    scrutin: "nucleaire"
  },
  { 
    text: "L'électrification des véhicules devrait se faire avec un calendrier...",
    options: ["Strict et rapide", "Progressif", "Flexible (marché)"],
    context: "Position groupe — Transition automobile",
    scrutin: "emploi"
  },
  { 
    text: "Les pesticides/engrais chimiques doivent être...",
    options: ["Interdits", "Régulés progressivement", "Libres"],
    context: "Position groupe — Agriculture durable",
    scrutin: "nucleaire"
  },
  { 
    text: "Par rapport à l'économie, les objectifs de réduction de CO2 sont...",
    options: ["Prioritaires", "Équilibrés", "Secondaires"],
    context: "Scrutin 1243 — Débat climat-emploi",
    scrutin: "nucleaire"
  },
  { 
    text: "La France devrait taxer les énergies fossiles...",
    options: ["Davantage", "Pareil", "Moins"],
    context: "Position groupe — Fiscalité écologique",
    scrutin: "nucleaire"
  },
  { 
    text: "Le modèle économique français devrait pencher vers...",
    options: ["Décroissance/Sobriété", "Croissance verte", "Croissance libre"],
    context: "Position groupe — Modèle économique",
    scrutin: "nucleaire"
  },

  // GROUPE 3: FIN DE VIE & BIOÉTHIQUE (5 questions)
  { 
    text: "L'aide active à mourir devrait-elle être...",
    options: ["Légalisée", "En réflexion", "Interdite"],
    context: "Débat bioéthique — Libertés individuelles",
    scrutin: "sante"
  },
  { 
    text: "L'avortement devrait rester autorisé...",
    options: ["Jusqu'au terme", "Jusqu'à terme intermédiaire", "Plus tôt"],
    context: "Débat bioéthique — Droits des femmes",
    scrutin: "sante"
  },
  { 
    text: "La PMA/GPA devrait être accessible...",
    options: ["À tous", "À certains", "À personne"],
    context: "Débat bioéthique — Égalité",
    scrutin: "sante"
  },
  { 
    text: "La gestation pour autrui (GPA) devrait être...",
    options: ["Autorisée", "Encadrée", "Interdite"],
    context: "Débat bioéthique — Procréation",
    scrutin: "sante"
  },
  { 
    text: "L'euthanasie pédiatrique en cas de souffrance extrême devrait être...",
    options: ["Autorisée", "Cas très spéciaux", "Interdite"],
    context: "Débat bioéthique — Protection enfance",
    scrutin: "sante"
  },

  // GROUPE 4: POUVOIR & INSTITUTIONS (9 questions)
  { 
    text: "L'article 49.3 (gouvernement sans vote) devrait être...",
    options: ["Supprimé", "Modifié", "Conservé"],
    context: "Débat constitutionnel — Pouvoir gouvernement",
    scrutin: "emploi"
  },
  { 
    text: "Démocratie décisionnelle: priorité à...",
    options: ["Référendum (direct)", "Équilibre", "Représentation (indirecte)"],
    context: "Débat système politique — Démocratie",
    scrutin: "emploi"
  },
  { 
    text: "Les parlementaires devraient recevoir des augmentations salariales...",
    options: ["Régulièrement", "Rarement", "Jamais"],
    context: "Débat train de vie — Élus",
    scrutin: "budget"
  },
  { 
    text: "Le cumul des mandats (député + maire) devrait être...",
    options: ["Autorisé", "Limité", "Interdit"],
    context: "Débat concentration pouvoir — Régimes élus",
    scrutin: "budget"
  },
  { 
    text: "Les élus devraient avoir des régimes de retraite...",
    options: ["Spéciaux", "Intermédiaires", "Égaux aux citoyens"],
    context: "Scrutin 2887 — Débat fiscal",
    scrutin: "budget"
  },
  { 
    text: "Le nombre de parlementaires devrait être...",
    options: ["Réduit", "Inchangé", "Augmenté"],
    context: "Débat efficacité — Dépenses publiques",
    scrutin: "budget"
  },
  { 
    text: "Les pouvoirs du Président devraient être...",
    options: ["Renforcés", "Inchangés", "Limités"],
    context: "Débat équilibre pouvoir — Institutions",
    scrutin: "emploi"
  },
  { 
    text: "Le système électoral devrait passer à la proportionnelle...",
    options: ["Oui", "Partiellement", "Non"],
    context: "Débat représentativité — Système électoral",
    scrutin: "emploi"
  },
  { 
    text: "Le mandat présidentiel devrait être limité à...",
    options: ["1 seul terme", "Pas de limite", "2 termes max"],
    context: "Débat prévention autoritarisme — Constitution",
    scrutin: "emploi"
  },

  // GROUPE 5: SÉCURITÉ & POLICE (5 questions)
  { 
    text: "Les moyens alloués à la police devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer"],
    context: "Débat sécurité — Budget forces ordre",
    scrutin: "emploi"
  },
  { 
    text: "La vidéosurveillance systématique dans l'espace public est...",
    options: ["Souhaitable", "Encadrée", "À refuser"],
    context: "Débat libertés — Surveillance État",
    scrutin: "emploi"
  },
  { 
    text: "L'armement des policiers devrait être...",
    options: ["Augmenté", "Inchangé", "Réduit"],
    context: "Débat armement — Protection policiers",
    scrutin: "emploi"
  },
  { 
    text: "La peine de mort devrait-elle être...",
    options: ["Réintroduite", "Débattue", "Conservée abolie"],
    context: "Débat justice — Peines maximales",
    scrutin: "emploi"
  },
  { 
    text: "Les peines pour crimes de haine doivent être...",
    options: ["Durcies", "Adaptées", "Pas spéciales"],
    context: "Débat justice — Discriminations",
    scrutin: "emploi"
  },

  // GROUPE 6: ÉDUCATION (5 questions)
  { 
    text: "L'uniforme scolaire devrait-il être...",
    options: ["Obligatoire", "Optionnel", "Interdit"],
    context: "Débat cohésion — Libertés école",
    scrutin: "sante"
  },
  { 
    text: "Les écoles privées devraient recevoir des subventions publiques...",
    options: ["Oui", "Partiellement", "Non"],
    context: "Scrutin 1488 — Débat école publique/privée",
    scrutin: "sante"
  },
  { 
    text: "L'école devrait privilégier...",
    options: ["L'employabilité", "Équilibre", "La culture générale"],
    context: "Débat pédagogique — Orientation scolaire",
    scrutin: "sante"
  },
  { 
    text: "Le système de notation (notes) devrait être...",
    options: ["Supprimé", "Modifié", "Conservé"],
    context: "Débat évaluation — Égalité élèves",
    scrutin: "sante"
  },
  { 
    text: "Les frais d'inscription universitaires devraient être...",
    options: ["Baissés", "Inchangés", "Augmentés"],
    context: "Scrutin 1488 — Accès enseignement",
    scrutin: "sante"
  },

  // GROUPE 7: ÉCONOMIE & FISCALITÉ (9 questions)
  { 
    text: "Les hauts revenus/patrimoines devraient être taxés...",
    options: ["Plus", "Pareil", "Moins"],
    context: "Scrutin 2887 (4 nov 2023) — Fiscalité",
    scrutin: "budget"
  },
  { 
    text: "L'impôt sur la fortune (ISF) devrait être...",
    options: ["Restauré", "Débattu", "Supprimé"],
    context: "Scrutin 2887 — Fiscalité progressive",
    scrutin: "budget"
  },
  { 
    text: "Le SMIC devrait augmenter...",
    options: ["Plus vite que l'inflation", "Avec l'inflation", "Moins vite"],
    context: "Scrutin 2965 — Salaire minimum",
    scrutin: "emploi"
  },
  { 
    text: "Le télétravail généralisé devrait être...",
    options: ["Encouragé par l'État", "Libre", "Découragé"],
    context: "Scrutin 2965 — Conditions travail",
    scrutin: "emploi"
  },
  { 
    text: "Les charges sociales devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer"],
    context: "Scrutin 2887 — Financement social",
    scrutin: "budget"
  },
  { 
    text: "Les heures supplémentaires devraient être...",
    options: ["Plus rémunérées", "Comme actuellement", "Moins rémunérées"],
    context: "Scrutin 2965 — Rémunération travail",
    scrutin: "emploi"
  },
  { 
    text: "Le système de retraite devrait être...",
    options: ["Répartition (solidarité)", "Hybride", "Épargne individuelle"],
    context: "Scrutin 1240 (20 mars 2023) — Retraites",
    scrutin: "retraites"
  },
  { 
    text: "Les allocations chômage devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer"],
    context: "Scrutin 2887 — Protection sociale",
    scrutin: "budget"
  },
  { 
    text: "Les dépenses publiques globales devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer"],
    context: "Scrutin 2887 — Budget État",
    scrutin: "budget"
  },

  // GROUPE 8: GENRE & ÉGALITÉ (5 questions)
  { 
    text: "La parité hommes-femmes devrait être imposée par...",
    options: ["Quotas obligatoires", "Incitations", "Rien (marché)"],
    context: "Débat égalité — Représentation femmes",
    scrutin: "sante"
  },
  { 
    text: "Les congés parentaux devraient être...",
    options: ["Partagés équitablement", "Flexibles", "À la charge de chacun"],
    context: "Débat égalité — Famille travail",
    scrutin: "sante"
  },
  { 
    text: "L'accès à la transition de genre (hormones, chirurgies) devrait être...",
    options: ["Facilité & remboursé", "Possible mais coûteux", "Limité"],
    context: "Débat droits LGBTQ+ — Santé",
    scrutin: "sante"
  },
  { 
    text: "Les droits des LGBTQ+ devraient être...",
    options: ["Étendus (mariage, PMA pour tous)", "Maintenus", "Restreints"],
    context: "Débat égalité — Mariage, PMA",
    scrutin: "sante"
  },
  { 
    text: "Les discriminations salariales (pay gap) devraient être combattues par...",
    options: ["Transparence obligatoire", "Incitations", "Rien (marché)"],
    context: "Débat égalité — Salaires femmes",
    scrutin: "sante"
  },

  // GROUPE 9: IDENTITÉ & DISCRIMINATIONS (4 questions)
  { 
    text: "Le racisme systémique doit être...",
    options: ["Reconnu & combattu activement", "Reconnu", "Nié"],
    context: "Débat justice sociale — Discriminations",
    scrutin: "emploi"
  },
  { 
    text: "Les politiques d'action affirmative pour minorités devraient être...",
    options: ["Créées", "Débattues", "Refusées"],
    context: "Débat égalité — Réparation historique",
    scrutin: "emploi"
  },
  { 
    text: "La laïcité devrait interdire les symboles religieux à l'école...",
    options: ["Oui", "Cas par cas", "Non"],
    context: "Débat laïcité — Neutralité État",
    scrutin: "emploi"
  },
  { 
    text: "L'immigration devrait être sélectionnée selon la religion/culture d'origine?",
    options: ["Oui", "Partiellement", "Non"],
    context: "Scrutin 3213 — Intégration migrants",
    scrutin: "immigration"
  },

  // GROUPE 10: AGRICULTURE & RURALITÉ (4 questions)
  { 
    text: "Les subventions agricoles (PAC) devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer"],
    context: "Scrutin 1488 — Politique agricole",
    scrutin: "sante"
  },
  { 
    text: "La priorité agricole devrait être...",
    options: ["Biologique & durable", "Équilibrée", "Intensive & productive"],
    context: "Débat environnement — Agriculture durable",
    scrutin: "nucleaire"
  },
  { 
    text: "Les petits commerces ruraux devraient être...",
    options: ["Protégés", "Soutenus partiellement", "Laissés au marché"],
    context: "Débat économie locale — Ruralité",
    scrutin: "emploi"
  },
  { 
    text: "L'accaparement des terres agricoles par les fonds de placement devrait être...",
    options: ["Encadré", "Limité", "Libre"],
    context: "Débat protection paysans — Agriculture",
    scrutin: "sante"
  },

  // GROUPE 11: SANTÉ (6 questions)
  { 
    text: "Le système de santé français devrait être...",
    options: ["Renforcé (public)", "Mixte", "Diversifié (plus privé)"],
    context: "Scrutin 1488 (10 mai 2023) — Système santé",
    scrutin: "sante"
  },
  { 
    text: "Les hôpitaux publics devraient recevoir...",
    options: ["Plus de financement", "Pareil", "Moins"],
    context: "Scrutin 1488 — Services public",
    scrutin: "sante"
  },
  { 
    text: "Les salaires des infirmiers et médecins devraient...",
    options: ["Augmenter significativement", "Augmenter légèrement", "Rester inchangés"],
    context: "Scrutin 1488 — Attractivité métiers santé",
    scrutin: "sante"
  },
  { 
    text: "L'accès aux soins en zones rurales devrait être...",
    options: ["Garanti par l'État", "Encadré", "Laissé au marché"],
    context: "Scrutin 1488 — Égalité territoriale",
    scrutin: "sante"
  },
  { 
    text: "Les tests génétiques devraient être...",
    options: ["Remboursés & encouragés", "Accessibles", "Limités"],
    context: "Débat bioéthique — Médecine préventive",
    scrutin: "sante"
  },
  { 
    text: "La santé mentale devrait être...",
    options: ["Mieux financée", "Pareil", "Moins prioritaire"],
    context: "Scrutin 1488 — Priorités santé",
    scrutin: "sante"
  },

  // GROUPE 12: ENVIRONNEMENT & TRANSPORTS (5 questions)
  { 
    text: "Les transports en commun devraient être...",
    options: ["Prioritaires & financés", "Équilibrés", "Moins prioritaires"],
    context: "Scrutin 1243 — Transition écologique",
    scrutin: "nucleaire"
  },
  { 
    text: "Les aéroports devraient être...",
    options: ["Limités (restrictions vols)", "Maintenus", "Développés"],
    context: "Débat environnement — Mobilité",
    scrutin: "nucleaire"
  },
  { 
    text: "Les vols court-courrier devraient être...",
    options: ["Interdits", "Découragés", "Libres"],
    context: "Débat climat — Sobriété transport",
    scrutin: "nucleaire"
  },
  { 
    text: "Les terres agricoles artificialisées devraient être...",
    options: ["Restaurées", "Partiellement", "Utilisables"],
    context: "Débat biodiversité — Aménagement",
    scrutin: "nucleaire"
  },
  { 
    text: "Les 'crimes écologiques' devraient être...",
    options: ["Poursuivis pénalement", "Débattus", "Traités civilement"],
    context: "Débat justice écologique — Environnement",
    scrutin: "nucleaire"
  },

  // GROUPE 13: LOGEMENT (4 questions)
  { 
    text: "Les prix des loyers devraient être...",
    options: ["Encadrés", "Peu régulés", "Totalement libres"],
    context: "Débat accessibilité — Marché immobilier",
    scrutin: "budget"
  },
  { 
    text: "Les politiques devraient favoriser...",
    options: ["La propriété", "Équilibre", "La location"],
    context: "Débat politique logement — Patrimoine",
    scrutin: "budget"
  },
  { 
    text: "Les constructeurs devraient être obligés de créer du logement social...",
    options: ["Oui", "Partiellement", "Non"],
    context: "Débat mixité — Offre logement",
    scrutin: "budget"
  },
  { 
    text: "Les logements vacants depuis 2+ ans devraient être taxés...",
    options: ["Fortement", "Modérément", "Pas"],
    context: "Débat offre immobilière — Fiscalité",
    scrutin: "budget"
  }
];
