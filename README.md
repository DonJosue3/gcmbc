# GCMBC Group — Site Web Vue.js

Site web professionnel pour **GCMBC Group**, entreprise spécialisée en architecture, génie civil, vente de plans de maisons et matériaux de construction au Burundi.

---

## 🗂️ Structure du projet

```
gcmbc-group/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── main.css              # Variables CSS globales & styles de base
│   ├── components/
│   │   ├── AppNav.vue            # Navigation principale (fixe + mobile drawer)
│   │   ├── AppFooter.vue         # Pied de page
│   │   ├── HeroSection.vue       # Section héro de la page d'accueil
│   │   ├── StatsBar.vue          # Barre de statistiques
│   │   ├── ServiceCard.vue       # Carte service réutilisable
│   │   ├── PlanCard.vue          # Carte plan de maison réutilisable
│   │   ├── TestimonialCard.vue   # Carte témoignage réutilisable
│   │   ├── ContactForm.vue       # Formulaire de contact avec validation
│   │   ├── CtaBand.vue           # Bandeau call-to-action réutilisable
│   │   └── PageHeader.vue        # En-tête de page intérieure réutilisable
│   ├── composables/
│   │   └── useReveal.js          # Composable pour animations au scroll
│   ├── data/
│   │   └── index.js              # Toutes les données (services, plans, projets…)
│   ├── router/
│   │   └── index.js              # Vue Router – 7 routes
│   ├── views/
│   │   ├── HomeView.vue          # Page d'accueil
│   │   ├── ServicesView.vue      # Page services
│   │   ├── PlansView.vue         # Catalogue de plans
│   │   ├── MateriauxView.vue     # Matériaux de construction
│   │   ├── ProjetsView.vue       # Portfolio réalisations
│   │   ├── AProposView.vue       # À propos / équipe / valeurs
│   │   └── ContactView.vue       # Contact + FAQ
│   ├── App.vue                   # Composant racine
│   └── main.js                   # Point d'entrée
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Installation & démarrage

### Prérequis
- **Node.js** v18 ou supérieur
- **npm** v9 ou supérieur

### Étapes

```bash
# 1. Aller dans le dossier du projet
cd gcmbc-group

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# → http://localhost:5173
```

### Build production

```bash
npm run build
# Les fichiers sont générés dans /dist

npm run preview
# Pour prévisualiser le build
```

---

## 🎨 Charte graphique

| Couleur         | Valeur    | Usage                          |
|----------------|-----------|-------------------------------|
| Bleu principal  | `#1A3A6B` | Titres, footer, boutons        |
| Bleu moyen      | `#2B5BA8` | Accents, liens, icônes         |
| Bleu clair      | `#4A80D4` | États hover                    |
| Bleu pâle       | `#EAF0FB` | Fonds de cartes                |
| Jaune           | `#F5C212` | Accents, badges, CTA           |
| Blanc           | `#FFFFFF` | Fond principal                 |
| Gris clair      | `#F7F9FC` | Sections alternées             |

**Polices :**
- `Playfair Display` — titres & chiffres
- `DM Sans` — texte courant
- `Barlow Condensed` — boutons & labels

---

## 📄 Pages disponibles

| Route         | Vue                | Description                    |
|--------------|-------------------|-------------------------------|
| `/`           | HomeView           | Accueil complet                |
| `/services`   | ServicesView       | 6 services détaillés           |
| `/plans`      | PlansView          | Catalogue + filtres            |
| `/materiaux`  | MateriauxView      | 12 catégories de matériaux     |
| `/projets`    | ProjetsView        | Portfolio + processus          |
| `/a-propos`   | AProposView        | Histoire, équipe, valeurs      |
| `/contact`    | ContactView        | Formulaire + FAQ               |

---

## ⚙️ Personnalisation

### Modifier les données
Éditez uniquement le fichier `src/data/index.js` pour mettre à jour :
- Les informations de contact
- Les services proposés
- Le catalogue de plans
- Les matériaux
- Les projets réalisés
- L'équipe
- Les témoignages

### Changer les couleurs
Modifiez les variables CSS dans `src/assets/main.css` sous `:root { … }`.

---

## 📦 Dépendances

| Package        | Version | Usage            |
|---------------|---------|-----------------|
| vue           | ^3.4.21 | Framework JS     |
| vue-router    | ^4.3.0  | Navigation SPA   |
| vite          | ^5.2.0  | Build tool       |
| @vitejs/plugin-vue | ^5.0.4 | Plugin Vue  |

---

*© 2025 GCMBC Group – Tous droits réservés*
