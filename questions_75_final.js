const QUESTIONS_75 = [
  // GROUPE 1: IMMIGRATION (7 questions)
  { 
    text: "Le volume d'immigration légale devrait-il être...",
    options: ["Augmenté", "Maintenu", "Réduit", "Ne me prononce pas"],
    context: "Scrutin 3213 (19 déc 2023). La France doit-elle accueillir plus ou moins d'immigrants légaux chaque année?",
    scrutin: "immigration"
  },
  { 
    text: "L'immigration familiale (regroupement) devrait-elle être...",
    options: ["Facilitée", "Inchangée", "Restreinte", "Ne me prononce pas"],
    context: "Débat 2023. Faut-il faciliter l'arrivée des familles de migrants déjà en France, ou au contraire la limiter?",
    scrutin: "immigration"
  },
  { 
    text: "Face à l'immigration clandestine, la priorité est...",
    options: ["L'intégration & droits humains", "Équilibre", "L'expulsion & sécurité", "Ne me prononce pas"],
    context: "Scrutin 3213. Faut-il favoriser l'intégration des sans-papiers déjà présents, ou renforcer les expulsions?",
    scrutin: "immigration"
  },
  { 
    text: "Les migrants sans-papiers devraient avoir accès...",
    options: ["À tous les services publics", "Cas par cas", "Aucun service public", "Ne me prononce pas"],
    context: "Débat 2023. Doivent-ils accéder à la santé, l'école, les allocations?",
    scrutin: "immigration"
  },
  { 
    text: "Les conditions pour obtenir la nationalité française doivent-elles être...",
    options: ["Facilitées", "Inchangées", "Durcies", "Ne me prononce pas"],
    context: "Débat 2023. Faut-il réduire délais/conditions pour la naturalisation, ou les augmenter?",
    scrutin: "immigration"
  },
  { 
    text: "L'immigration de travail qualifiée devrait-elle être...",
    options: ["Prioritaire", "Égale aux autres", "Secondaire", "Ne me prononce pas"],
    context: "Débat 2023. Faut-il attirer les talents étrangers dans les secteurs clés (tech, santé)?",
    scrutin: "immigration"
  },
  { 
    text: "Entre demandeurs d'asile et immigrés économiques, qui a priorité?",
    options: ["Asile d'abord", "Égalité stricte", "Économie d'abord", "Ne me prononce pas"],
    context: "Débat 2023. Où tracer la ligne? Droit d'asile vs politique d'immigration?",
    scrutin: "immigration"
  },

  // GROUPE 2: ÉNERGIE & CLIMAT (8 questions)
  { 
    text: "Les prix de l'énergie en France devraient-ils être...",
    options: ["Très subventionnés", "Au marché", "Augmentés (signal prix)", "Ne me prononce pas"],
    context: "Scrutin 1243 (21 mars 2023). Faut-il garder l'électricité bon marché (subventions) ou la laisser au marché?",
    scrutin: "nucleaire"
  },
  { 
    text: "L'alignement des prix français sur les prix européens est...",
    options: ["Souhaitable", "Indifférent", "À éviter", "Ne me prononce pas"],
    context: "Débat 2023. La France paie moins cher son électricité que l'Europe. Faut-il aligner les prix?",
    scrutin: "nucleaire"
  },
  { 
    text: "La priorité énergétique de la France devrait être...",
    options: ["Nucléaire (80%)", "Mix équilibré", "Énergies renouvelables", "Ne me prononce pas"],
    context: "Scrutin 1243. France: 70% nucléaire. Garder cette base ou transformer vers renouvelables?",
    scrutin: "nucleaire"
  },
  { 
    text: "L'électrification des véhicules devrait se faire avec un calendrier...",
    options: ["Strict & rapide", "Progressif & réaliste", "Flexible (marché)", "Ne me prononce pas"],
    context: "Débat 2023. D'ici 2035, tous les véhicules vendus seront électriques en EU. Acceptable?",
    scrutin: "nucleaire"
  },
  { 
    text: "Les pesticides/engrais chimiques devraient être...",
    options: ["Interdits progressivement", "Régulés", "Libres", "Ne me prononce pas"],
    context: "Débat agriculture durable. Faut-il interdire les produits chimiques ou les laisser?",
    scrutin: "nucleaire"
  },
  { 
    text: "Par rapport à l'économie, les objectifs climat sont...",
    options: ["Prioritaires", "Équilibrés", "Secondaires", "Ne me prononce pas"],
    context: "Débat 2023. Faut-il sacrifier la croissance économique pour atteindre les objectifs CO2?",
    scrutin: "nucleaire"
  },
  { 
    text: "La France devrait taxer les énergies fossiles...",
    options: ["Davantage", "Pareil", "Moins", "Ne me prononce pas"],
    context: "Débat fiscalité écologique. Une taxe carbone renforcée incite à la transition.",
    scrutin: "nucleaire"
  },
  { 
    text: "Le modèle économique français devrait pencher vers...",
    options: ["Décroissance & sobriété", "Croissance verte", "Croissance sans limites", "Ne me prononce pas"],
    context: "Débat 2023. Peut-on avoir croissance ET écologie? Ou faut-il décroître?",
    scrutin: "nucleaire"
  },

  // GROUPE 3: FIN DE VIE & BIOÉTHIQUE (5 questions)
  { 
    text: "L'aide active à mourir devrait-elle être...",
    options: ["Légalisée", "En réflexion", "Interdite", "Ne me prononce pas"],
    context: "Débat bioéthique. France: euthanasie interdite. Faut-il légaliser l'aide à mourir?",
    scrutin: "sante"
  },
  { 
    text: "L'avortement devrait rester autorisé...",
    options: ["Sans limite de temps", "Jusqu'à 12-15 semaines", "Plus tôt encore", "Ne me prononce pas"],
    context: "Débat droits femmes. France: jusqu'à 15 semaines. Faut-il réduire ou augmenter?",
    scrutin: "sante"
  },
  { 
    text: "La PMA/FIV devrait être accessible...",
    options: ["À tous (couples et célibataires)", "Couples hétéro & homos", "Couples hétéro seulement", "Ne me prononce pas"],
    context: "Débat égalité. France a récemment ouvert la PMA à tous. Acceptable?",
    scrutin: "sante"
  },
  { 
    text: "La gestation pour autrui (GPA) devrait être...",
    options: ["Autorisée", "Encadrée", "Interdite", "Ne me prononce pas"],
    context: "Débat procréation. France l'interdit. Faut-il légaliser avec conditions?",
    scrutin: "sante"
  },
  { 
    text: "L'euthanasie pédiatrique en cas de souffrance extrême devrait être...",
    options: ["Autorisée", "Cas très spécialisés seulement", "Interdite", "Ne me prononce pas"],
    context: "Débat bioéthique. Cas rare mais éthique: enfant en souffrance terminale.",
    scrutin: "sante"
  },

  // GROUPE 4: POUVOIR & INSTITUTIONS (9 questions)
  { 
    text: "L'article 49.3 (gouvernement sans vote) devrait être...",
    options: ["Supprimé", "Modifié/limité", "Conservé", "Ne me prononce pas"],
    context: "Débat constitutionnel. 49.3 permet au gouvernement de passer un texte sans vote. Utile ou danger?",
    scrutin: "emploi"
  },
  { 
    text: "Pour les décisions importantes, il faudrait plus...",
    options: ["Référendums directs", "Équilibre", "Représentation indirecte", "Ne me prononce pas"],
    context: "Débat démocratie. Faut-il plus de démocratie directe (référendums) ou garder la représentation?",
    scrutin: "emploi"
  },
  { 
    text: "Les parlementaires devraient recevoir des augmentations salariales...",
    options: ["Régulièrement", "Rarement", "Jamais", "Ne me prononce pas"],
    context: "Débat train de vie. Les élus ont-ils droit à des augmentations?",
    scrutin: "budget"
  },
  { 
    text: "Le cumul des mandats (député + maire) devrait être...",
    options: ["Autorisé", "Limité (un seul)", "Interdit", "Ne me prononce pas"],
    context: "Débat pouvoir local. Faut-il que quelqu'un soit député ET maire?",
    scrutin: "budget"
  },
  { 
    text: "Les élus devraient avoir des régimes de retraite...",
    options: ["Spéciaux & généreux", "Intermédiaires", "Identiques aux citoyens", "Ne me prononce pas"],
    context: "Scrutin 2887. Faut-il des retraites de privilège pour les élus?",
    scrutin: "budget"
  },
  { 
    text: "Le nombre de parlementaires (Assemblée) devrait être...",
    options: ["Réduit", "Inchangé (577)", "Augmenté", "Ne me prononce pas"],
    context: "Débat efficacité. 577 députés: trop ou pas assez?",
    scrutin: "budget"
  },
  { 
    text: "Les pouvoirs du Président devraient être...",
    options: ["Renforcés", "Inchangés", "Limités", "Ne me prononce pas"],
    context: "Débat équilibre des pouvoirs. Le Président a-t-il trop de pouvoir?",
    scrutin: "emploi"
  },
  { 
    text: "Le système électoral devrait passer à la proportionnelle...",
    options: ["Oui", "Partiellement", "Non (scrutin majoritaire)", "Ne me prononce pas"],
    context: "Débat représentation. France: scrutin majoritaire. Faut-il plus de proportionnelle?",
    scrutin: "emploi"
  },
  { 
    text: "Le mandat présidentiel devrait être limité à...",
    options: ["1 seul terme (7 ans)", "Pas de limite", "2 termes max (14 ans)", "Ne me prononce pas"],
    context: "Débat prévention autoritarisme. Faut-il limiter la réélection présidentielle?",
    scrutin: "emploi"
  },

  // GROUPE 5: SÉCURITÉ & POLICE (5 questions)
  { 
    text: "Les moyens alloués à la police devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer", "Ne me prononce pas"],
    context: "Débat sécurité. Faut-il plus de budgets pour les forces de l'ordre?",
    scrutin: "emploi"
  },
  { 
    text: "La vidéosurveillance systématique dans l'espace public est...",
    options: ["Souhaitable", "Encadrée/limitée", "À refuser", "Ne me prononce pas"],
    context: "Débat libertés. Caméras partout: sécurité ou Big Brother?",
    scrutin: "emploi"
  },
  { 
    text: "L'armement des policiers devrait être...",
    options: ["Augmenté (armes plus puissantes)", "Inchangé", "Réduit", "Ne me prononce pas"],
    context: "Débat armement. Plus d'armes = plus sécurité?",
    scrutin: "emploi"
  },
  { 
    text: "La peine de mort devrait-elle être...",
    options: ["Réintroduite", "Débattue", "Conservée abolie (statu quo)", "Ne me prononce pas"],
    context: "Débat justice. France l'a abolie en 1981. Faut-il la réintroduire?",
    scrutin: "emploi"
  },
  { 
    text: "Les peines pour crimes de haine doivent être...",
    options: ["Durcies significativement", "Adaptées", "Pas de peines spéciales", "Ne me prononce pas"],
    context: "Débat justice. Crimes racistes, antisémites, anti-LGBTQ: peines renforcées?",
    scrutin: "emploi"
  },

  // GROUPE 6: ÉDUCATION (5 questions)
  { 
    text: "L'uniforme scolaire devrait-il être...",
    options: ["Obligatoire", "Optionnel", "Interdit", "Ne me prononce pas"],
    context: "Débat cohésion & liberté. Uniforme = égalité ou restriction liberté?",
    scrutin: "sante"
  },
  { 
    text: "Les écoles privées devraient recevoir des subventions publiques...",
    options: ["Oui", "Partiellement", "Non", "Ne me prononce pas"],
    context: "Scrutin 1488. Faut-il financer l'école privée avec l'argent public?",
    scrutin: "sante"
  },
  { 
    text: "L'école devrait privilégier...",
    options: ["L'employabilité & métiers", "Équilibre", "La culture générale & critique", "Ne me prononce pas"],
    context: "Débat pédagogique. École = préparation au marché du travail ou formation citoyens?",
    scrutin: "sante"
  },
  { 
    text: "Le système de notation (notes/points) devrait être...",
    options: ["Supprimé", "Modifié", "Conservé", "Ne me prononce pas"],
    context: "Débat évaluation. Notes créent compétition. Faut-il les remplacer?",
    scrutin: "sante"
  },
  { 
    text: "Les frais d'inscription universitaires devraient être...",
    options: ["Gratuits pour tous", "Inchangés", "Augmentés", "Ne me prononce pas"],
    context: "Scrutin 1488. Université française: peu chère. Faut-il garder?",
    scrutin: "sante"
  },

  // GROUPE 7: ÉCONOMIE & FISCALITÉ (9 questions)
  { 
    text: "Les plus hauts revenus/patrimoines devraient être taxés...",
    options: ["Plus", "Pareil", "Moins", "Ne me prononce pas"],
    context: "Scrutin 2887. Faut-il une fiscalité progressive pour réduire inégalités?",
    scrutin: "budget"
  },
  { 
    text: "L'impôt sur la fortune (ISF) devrait être...",
    options: ["Restauré & renforcé", "Débattu", "Supprimé (statu quo)", "Ne me prononce pas"],
    context: "Scrutin 2887. ISF aboli en 2017. Faut-il le rétablir?",
    scrutin: "budget"
  },
  { 
    text: "Le SMIC devrait augmenter...",
    options: ["Plus vite que l'inflation", "Avec l'inflation", "Moins vite", "Ne me prononce pas"],
    context: "Scrutin 2965. Le salaire minimum doit-il rattraper le coût de la vie?",
    scrutin: "emploi"
  },
  { 
    text: "Le télétravail généralisé devrait être...",
    options: ["Encouragé par l'État", "Libre (entreprise décide)", "Découragé", "Ne me prononce pas"],
    context: "Scrutin 2965. Post-COVID: télétravail = flexibilité ou isolement?",
    scrutin: "emploi"
  },
  { 
    text: "Les charges sociales (patron/salarié) devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer", "Ne me prononce pas"],
    context: "Scrutin 2887. Hausse charges = emploi moins cher pour patrons (débat)?",
    scrutin: "budget"
  },
  { 
    text: "Les heures supplémentaires devraient être...",
    options: ["Plus rémunérées (50%+)", "Comme actuellement", "Moins rémunérées", "Ne me prononce pas"],
    context: "Scrutin 2965. Faut-il pénaliser (ou encourager) les heures supp?",
    scrutin: "emploi"
  },
  { 
    text: "Le système de retraite devrait être...",
    options: ["Répartition (solidarité)", "Hybride", "Capitalisation (épargne privée)", "Ne me prononce pas"],
    context: "Scrutin 1240 (20 mars 2023). Réforme des retraites centrale.",
    scrutin: "retraites"
  },
  { 
    text: "Les allocations chômage devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer", "Ne me prononce pas"],
    context: "Scrutin 2887. Allocation chômage: filet de sécurité ou frein travail?",
    scrutin: "budget"
  },
  { 
    text: "Les dépenses publiques globales devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer", "Ne me prononce pas"],
    context: "Scrutin 2887. Budget État: déficit ou investir pour croissance?",
    scrutin: "budget"
  },

  // GROUPE 8: GENRE & ÉGALITÉ (5 questions)
  { 
    text: "La parité hommes-femmes devrait être imposée par...",
    options: ["Quotas obligatoires", "Incitations légales", "Rien (marché)", "Ne me prononce pas"],
    context: "Débat égalité. Quotas femmes en entreprises: efficace ou imposé?",
    scrutin: "sante"
  },
  { 
    text: "Les congés parentaux devraient être...",
    options: ["Partagés équitablement", "Flexibles", "À charge de chacun", "Ne me prononce pas"],
    context: "Débat égalité. France: 3j père, 8 semaines mère. Faut-il équilibrer?",
    scrutin: "sante"
  },
  { 
    text: "L'accès à la transition de genre (hormones, chirurgies) devrait être...",
    options: ["Facilité & remboursé", "Possible mais coûteux", "Limité", "Ne me prononce pas"],
    context: "Débat droits LGBTQ+. France: processus long & coûteux. Faut-il simplifier?",
    scrutin: "sante"
  },
  { 
    text: "Les droits des LGBTQ+ devraient être...",
    options: ["Étendus (mariage pour tous, PMA)", "Maintenus", "Restreints", "Ne me prononce pas"],
    context: "Débat égalité. France: mariage gay OK, PMA récemment élargi.",
    scrutin: "sante"
  },
  { 
    text: "Les discriminations salariales (écart M/F) doivent être combattues par...",
    options: ["Transparence obligatoire", "Incitations", "Rien (marché)", "Ne me prononce pas"],
    context: "Débat égalité. Écart France: 15-20%. Faut-il forcer transparence?",
    scrutin: "sante"
  },

  // GROUPE 9: IDENTITÉ & DISCRIMINATIONS (4 questions)
  { 
    text: "Le racisme systémique doit être...",
    options: ["Reconnu & combattu activement", "Reconnu", "Nié", "Ne me prononce pas"],
    context: "Débat justice sociale. Existe-t-il discrimination systémique en France?",
    scrutin: "emploi"
  },
  { 
    text: "Les politiques d'action affirmative pour minorités devraient être...",
    options: ["Créées", "Débattues", "Refusées", "Ne me prononce pas"],
    context: "Débat égalité. Quotas/discrimination positive pour historiquement marginalisés?",
    scrutin: "emploi"
  },
  { 
    text: "La laïcité devrait interdire les symboles religieux à l'école...",
    options: ["Oui", "Cas par cas", "Non", "Ne me prononce pas"],
    context: "Débat laïcité française. Voile, croix, kippa: à l'école publique?",
    scrutin: "emploi"
  },
  { 
    text: "L'immigration devrait être sélectionnée selon la religion/culture d'origine?",
    options: ["Oui", "Partiellement", "Non", "Ne me prononce pas"],
    context: "Scrutin 3213. Faut-il favoriser (ou défavoriser) certaines origines?",
    scrutin: "immigration"
  },

  // GROUPE 10: AGRICULTURE & RURALITÉ (4 questions)
  { 
    text: "Les subventions agricoles (PAC) devraient...",
    options: ["Augmenter", "Rester identiques", "Diminuer", "Ne me prononce pas"],
    context: "Scrutin 1488. PAC: 40% budget EU agricole. Faut-il plus?",
    scrutin: "sante"
  },
  { 
    text: "La priorité agricole devrait être...",
    options: ["Bio & durable", "Équilibrée", "Intensive & productive", "Ne me prononce pas"],
    context: "Débat environnement. France: 8% bio. Faut-il accélérer transition?",
    scrutin: "nucleaire"
  },
  { 
    text: "Les petits commerces ruraux devraient être...",
    options: ["Protégés légalement", "Soutenus partiellement", "Laissés au marché", "Ne me prononce pas"],
    context: "Débat économie locale. Amazon tue petits commerces. Faut-il protéger?",
    scrutin: "emploi"
  },
  { 
    text: "L'accaparement des terres agricoles par fonds financiers devrait être...",
    options: ["Fortement encadré", "Limité", "Libre", "Ne me prononce pas"],
    context: "Débat protection fermiers. Les fonds de PE rachètent terres. Danger?",
    scrutin: "sante"
  },

  // GROUPE 11: SANTÉ (6 questions)
  { 
    text: "Le système de santé français devrait être...",
    options: ["Renforcé (public)", "Mixte", "Plus diversifié (privé)", "Ne me prononce pas"],
    context: "Scrutin 1488. France: 75% public. Garder cette base?",
    scrutin: "sante"
  },
  { 
    text: "Les hôpitaux publics devraient recevoir...",
    options: ["Beaucoup plus de financement", "Un peu plus", "Pareil/moins", "Ne me prononce pas"],
    context: "Scrutin 1488. Hôpitaux publics en crise. Faut-il investir?",
    scrutin: "sante"
  },
  { 
    text: "Les salaires des infirmiers devraient...",
    options: ["Augmenter significativement (30%+)", "Augmenter légèrement", "Rester inchangés", "Ne me prononce pas"],
    context: "Débat 2023. Infirmiers mal payés, turnover élevé. Augmentation urgente?",
    scrutin: "sante"
  },
  { 
    text: "L'accès aux soins en zones rurales devrait être...",
    options: ["Garanti par l'État", "Encadré", "Laissé au marché", "Ne me prononce pas"],
    context: "Débat équité territoriale. Zones blanches: pas de médecins. Faut-il imposer?",
    scrutin: "sante"
  },
  { 
    text: "Les tests génétiques devraient être...",
    options: ["Remboursés & encouragés", "Accessibles (payant)", "Limités", "Ne me prononce pas"],
    context: "Débat bioéthique. Médecine préventive: tous les gènes testés?",
    scrutin: "sante"
  },
  { 
    text: "La santé mentale devrait être...",
    options: ["Mieux financée (psychiatrie)", "Pareil", "Moins prioritaire", "Ne me prononce pas"],
    context: "Scrutin 1488. Psys payants & délais longs. Crise santé mentale?",
    scrutin: "sante"
  },

  // GROUPE 12: ENVIRONNEMENT & TRANSPORTS (5 questions)
  { 
    text: "Les transports en commun devraient être...",
    options: ["Prioritaires & bien financés", "Équilibrés", "Moins prioritaires", "Ne me prononce pas"],
    context: "Scrutin 1243. Faut-il investir massivement dans bus, trains, trams?",
    scrutin: "nucleaire"
  },
  { 
    text: "Les aéroports régionaux devraient être...",
    options: ["Fermés (sauf grands aéros)", "Maintenus", "Développés", "Ne me prononce pas"],
    context: "Débat environnement. 150+ petits aéroports peu rentables. Fermer?",
    scrutin: "nucleaire"
  },
  { 
    text: "Les vols court-courrier Paris-Lyon, etc. devraient être...",
    options: ["Interdits (favoriser train)", "Découragés (taxe)", "Libres", "Ne me prononce pas"],
    context: "Débat climat. Vols court-courrier polluants & train efficient.",
    scrutin: "nucleaire"
  },
  { 
    text: "L'artificialisation des terres (béton) devrait être...",
    options: ["Stoppée/restaurée", "Limitée", "Libre pour croissance", "Ne me prononce pas"],
    context: "Débat biodiversité. France: 60000 ha/an perdus en natura. Faut-il stopper?",
    scrutin: "nucleaire"
  },
  { 
    text: "Les 'crimes écologiques' (pollution) devraient être...",
    options: ["Poursuivis pénalement", "Débattus", "Traités civilement (amendes)", "Ne me prononce pas"],
    context: "Débat justice. Polluer = crime? Faut-il prison ou juste amendes?",
    scrutin: "nucleaire"
  },

  // GROUPE 13: LOGEMENT (4 questions)
  { 
    text: "Les prix des loyers devraient être...",
    options: ["Encadrés (plafonds)", "Peu régulés", "Totalement libres", "Ne me prononce pas"],
    context: "Débat accessibilité. Loyers explosent en grandes villes. Faut-il encadrer?",
    scrutin: "budget"
  },
  { 
    text: "Les politiques devraient favoriser...",
    options: ["La propriété (PMI)", "Équilibre", "La location", "Ne me prononce pas"],
    context: "Débat politique logement. Accès à la propriété ou flexibilité location?",
    scrutin: "budget"
  },
  { 
    text: "Les constructeurs devraient être obligés de créer du logement social...",
    options: ["Oui (quotas stricts)", "Partiellement (quotas souples)", "Non", "Ne me prononce pas"],
    context: "Débat mixité sociale. Faut-il imposer 20-30% social dans nouveaux immeubles?",
    scrutin: "budget"
  },
  { 
    text: "Les logements vacants depuis 2+ ans devraient être taxés...",
    options: ["Fortement (30%+)", "Modérément", "Pas (propriété sacrée)", "Ne me prononce pas"],
    context: "Débat offre immobilière. Spéculateurs gardent appart vides. Faut-il taxer?",
    scrutin: "budget"
  },

  // GROUPE 14: PATRIMOINE (6 QUESTIONS - NOUVELLES)
  { 
    text: "L'héritage devrait être taxé...",
    options: ["Fortement (50%+)", "Modérément (15-20%)", "Légèrement (5%)", "Ne me prononce pas"],
    context: "Débat égalité. France: droits succession 60%. Faut-il augmenter pour égalité des chances?",
    scrutin: "budget"
  },
  { 
    text: "La limite d'exonération de droits de succession aux enfants devrait être...",
    options: ["Baissée (égalité)", "Inchangée", "Augmentée (plus libre)", "Ne me prononce pas"],
    context: "Débat transmission richesse. Actuellement: 100k€ exonérés par enfant.",
    scrutin: "budget"
  },
  { 
    text: "Faut-il d'un impôt sur le patrimoine net annuel?",
    options: ["Oui (comme ISF)", "Oui mais léger", "Non", "Ne me prononce pas"],
    context: "Débat fiscalité. Suisse/Suède: impôt fortune. Faut-il en France?",
    scrutin: "budget"
  },
  { 
    text: "La fortune immobilière (maisons secondaires) devrait être taxée...",
    options: ["Davantage", "Pareil", "Moins", "Ne me prononce pas"],
    context: "Débat accès logement. Résidences secondaires = spéculation ou liberté propriété?",
    scrutin: "budget"
  },
  { 
    text: "Les donations entre vivants devraient être...",
    options: ["Plus taxées", "Pareil", "Moins taxées", "Ne me prononce pas"],
    context: "Débat transmission. Donation = contourner succession. Faut-il taxer égal?",
    scrutin: "budget"
  },
  { 
    text: "Faut-il créer un impôt sur les grandes fortunes (>5M€)?",
    options: ["Oui, très progressif", "Oui mais léger", "Non", "Ne me prononce pas"],
    context: "Débat redistribution. Ultra-riches: faut-il une contribution exceptionnelle?",
    scrutin: "budget"
  }
];
