# Quiz Affinités Politiques

Découvre ton alignement politique réel en répondant à 15 questions basées sur **les votes authentiques des groupes parlementaires à l'Assemblée nationale** entre 2021 et 2024.

## Caractéristiques

- **15 questions** couvrant les grands domaines politiques (retraites, immigration, climat, économie, défense, etc.)
- **Basé sur les votes réels** : chaque question correspond à une ou plusieurs lois majeures votées à l'Assemblée
- **Sources transparentes** : liens directs aux scrutins officiels pour vérifier les données
- **Résultats instantanés** : vois ton alignement en % pour chaque groupe parlementaire
- **Pas de dépendance** : application HTML standalone, fonctionne hors ligne

## Utilisation

### Local (en ligne de commande)
```bash
git clone https://github.com/ComeBalguerie/quiz-affinites-politiques.git
cd quiz-affinites-politiques
# Ouvre index.html dans ton navigateur
open index.html
```

### Vercel (déploiement)

1. Push ce repo vers GitHub
2. Va sur [vercel.com](https://vercel.com)
3. Clique "Import Git Repository"
4. Sélectionne ce repo
5. Déploie (ne prend que quelques secondes)

L'app est accessible via l'URL Vercel unique générée automatiquement.

## Comment c'est construit

- **Données** : votes parlementaires 2021-2024 (sources Assemblée nationale)
- **Algorithme** : mapping position/parti pour chaque question
- **Scoring** : somme pondérée → pourcentage d'alignement par parti
- **Frontend** : HTML + CSS + vanilla JS (zéro dépendances)

## Sources et méthodologie

Toutes les sources sont détaillées dans **`SOURCES.md`**. Chaque loi est linée avec :
- Numéro du scrutin officiel
- Date du vote
- Résultat du scrutin
- Position de chaque groupe

## Limites importantes

1. **Les votes ≠ promesses présidentielles** : un parti peut voter différemment au pouvoir
2. **Une photo temporelle** : positions figées 2021-2024 ; peuvent bouger d'ici 2027
3. **Pas de pronostic** : le quiz te montre l'alignement réel, pas un prédicteur de vote
4. **Votes vs stratégie** : certains votes sont tactiques, pas toujours idéologiques

## Partis couverts

- **RE** (Renaissance)
- **Dem** (Démocrates)
- **HOR** (Horizons)
- **LR** (Les Républicains)
- **LFI-NUPES** (La France insoumise)
- **SOC** (Socialistes)
- **ECOLO** (Écologistes)
- **GDR** (Gauche démocrate)
- **RN** (Rassemblement national)
- **LIOT** (Libertés, Indépendants, Outre-mer, Territoires)

## Partager

L'URL déployée peut être partagée directement. Invite tes amis à faire le quiz et comparer vos résultats !

## Contribution

Des corrections ou des lois oubliées ? Ouvre une issue ou propose un pull request. Tous les scrutins doivent être sourcés.

## License

MIT (utilise librement, accrédite juste l'origine)

---

**Créé par Côme Balguerie** | Données à jour jusqu'à septembre 2024
