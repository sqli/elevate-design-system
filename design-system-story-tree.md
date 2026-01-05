# Elevate Design System - Story Tree

> Documentation de l'arborescence complète des stories Storybook.
> Version: 0.9.0-alpha | Date: 2025-12-21

## Vue d'ensemble

| Section                | Stories JS | MDX Docs | Total   |
| ---------------------- | ---------- | -------- | ------- |
| 0-Governance           | 0          | 6        | 6       |
| 1-Foundations          | 8          | 0        | 8       |
| 2-Primitives           | 56         | 7        | 63      |
| 3-Compositions-UI      | 23         | 0        | 23      |
| 4-Compositions-Domains | 3          | 0        | 3       |
| **Total**              | **90**     | **13**   | **103** |

---

## 0-Governance

Documentation de gouvernance et guides du design system.

```
stories/0-Governance/
├── Welcome.mdx                  # Page d'accueil du design system
├── Changelog.mdx                # Historique des versions
├── ComponentIndex.mdx           # Index de tous les composants
├── ContributionGuide.mdx        # Guide de contribution
├── QATesting.mdx                # Guide QA et testing
└── StabilityVersioning.mdx      # Politique de versioning
```

**Fichier racine:**

```
stories/
└── 0-Introduction.mdx           # Introduction générale
```

---

## 1-Foundations

Tokens de design et fondations visuelles.

```
stories/1-Foundations/
├── BEMConventions.stories.js    # Conventions de nommage BEM
├── Branding.stories.js          # Logo, Ascender, identité visuelle
├── Colors.stories.js            # Palette de couleurs et tokens
├── GridSpacing.stories.js       # Grille et espacements
├── Icons.stories.js             # Bibliothèque d'icônes (Heroicons)
├── Motion.stories.js            # Animations et transitions
├── Theming.stories.js           # Light/Dark mode, thèmes
└── Typography.stories.js        # Échelle typographique, TWK Everett
```

---

## 2-Primitives

Composants atomiques de base (56 stories + 7 intro MDX).

### Actions (6)

```
stories/2-Primitives/Actions/
├── _intro.mdx                   # Introduction catégorie
├── Button.stories.js            # Boutons (primary, secondary, danger, sizes)
├── FAB.stories.js               # Floating Action Button
├── IconButton.stories.js        # Boutons icône only
├── Link.stories.js              # Liens texte
├── LinkButton.stories.js        # Liens stylés comme boutons
└── SplitButton.stories.js       # Boutons avec dropdown
```

### Data Display (12)

```
stories/2-Primitives/DataDisplay/
├── _intro.mdx                   # Introduction catégorie
├── Avatar.stories.js            # Avatars (image, initiales, sizes)
├── Badge.stories.js             # Badges et labels (colors, sizes, dot)
├── Card.stories.js              # Cartes conteneur
├── Icon.stories.js              # Icônes individuelles
├── Popover.stories.js           # Popovers informatifs
├── Stat.stories.js              # Statistiques individuelles
├── Status.stories.js            # Indicateurs de statut
├── Table.stories.js             # Tableaux de données
├── Tag.stories.js               # Tags/chips
├── Timeline.stories.js          # Timeline verticale
└── Tooltip.stories.js           # Tooltips au survol
```

### Feedback (6)

```
stories/2-Primitives/Feedback/
├── _intro.mdx                   # Introduction catégorie
├── Alert.stories.js             # Alertes (info, success, warning, error)
├── Progress.stories.js          # Barre de progression
├── RadialProgress.stories.js    # Progression circulaire
├── Skeleton.stories.js          # Placeholders de chargement
├── Spinner.stories.js           # Indicateurs de chargement
└── Toast.stories.js             # Notifications toast
```

### Forms (17)

```
stories/2-Primitives/Forms/
├── _intro.mdx                   # Introduction catégorie
├── Checkbox.stories.js          # Cases à cocher (colors, sizes)
├── Combobox.stories.js          # Combobox avec recherche
├── DatePicker.stories.js        # Sélecteur de date
├── ErrorMessage.stories.js      # Messages d'erreur de formulaire
├── Fieldset.stories.js          # Groupement de champs
├── FileUpload.stories.js        # Upload de fichiers
├── HelperText.stories.js        # Texte d'aide
├── Input.stories.js             # Champs texte (types, sizes, states)
├── Label.stories.js             # Labels de formulaire
├── Radio.stories.js             # Boutons radio (colors, sizes)
├── RadioGroup.stories.js        # Groupe de boutons radio
├── Rating.stories.js            # Notation étoiles
├── SearchInput.stories.js       # Champ de recherche
├── Select.stories.js            # Sélecteurs dropdown
├── Slider.stories.js            # Curseurs de valeur
├── Textarea.stories.js          # Zones de texte multi-lignes
└── Toggle.stories.js            # Interrupteurs on/off (colors, sizes)
```

### Layout (13)

```
stories/2-Primitives/Layout/
├── _intro.mdx                   # Introduction catégorie
├── Accordion.stories.js         # Accordéons dépliables
├── AspectRatio.stories.js       # Conteneurs ratio fixe
├── Columns.stories.js           # Disposition en colonnes
├── Container.stories.js         # Conteneur centré responsive
├── Divider.stories.js           # Séparateurs horizontaux/verticaux
├── Grid.stories.js              # Grille CSS
├── Inline.stories.js            # Éléments en ligne
├── Modal.stories.js             # Modales/dialogues
├── ScrollArea.stories.js        # Zones scrollables personnalisées
├── Spacer.stories.js            # Espacements flexibles
├── Stack.stories.js             # Empilement vertical
├── Surface.stories.js           # Surfaces avec élévation
└── VisuallyHidden.stories.js    # Contenu accessible uniquement SR
```

### Navigation (10)

```
stories/2-Primitives/Navigation/
├── _intro.mdx                   # Introduction catégorie
├── AnchorLink.stories.js        # Liens d'ancrage
├── Breadcrumb.stories.js        # Fil d'Ariane
├── Drawer.stories.js            # Panneaux latéraux
├── Dropdown.stories.js          # Menus déroulants
├── NavigationMenu.stories.js    # Menu de navigation principal
├── Pagination.stories.js        # Pagination
├── SidebarNav.stories.js        # Navigation latérale
├── Stepper.stories.js           # Étapes de processus
└── Tabs.stories.js              # Onglets
```

### Typography (4)

```
stories/2-Primitives/Typography/
├── _intro.mdx                   # Introduction catégorie
├── Headings.stories.js          # Titres h1-h6
├── Kbd.stories.js               # Touches clavier
└── Text.stories.js              # Paragraphes, styles texte
```

---

## 3-Compositions-UI

Compositions génériques (non liées au domaine métier).

### Cards (1)

```
stories/3-Compositions-UI/Cards/
└── CardGrid.stories.js          # Grille de cartes
```

### Code (4)

```
stories/3-Compositions-UI/Code/
├── CodeBlock.stories.js         # Blocs de code avec syntaxe
├── InlineCode.stories.js        # Code inline
├── Markdown.stories.js          # Rendu Markdown
└── Mermaid.stories.js           # Diagrammes Mermaid
```

### Content (1)

```
stories/3-Compositions-UI/Content/
└── QuoteBlock.stories.js        # Blocs de citation
```

### DataDisplay (4)

```
stories/3-Compositions-UI/DataDisplay/
├── Chart.stories.js             # Graphiques et charts
├── ListItem.stories.js          # Éléments de liste enrichis
├── StatsRow.stories.js          # Ligne de statistiques
└── SummaryRow.stories.js        # Résumé en ligne
```

### Feedback (2)

```
stories/3-Compositions-UI/Feedback/
├── LoadingOverlay.stories.js    # Overlay de chargement
└── SkeletonLayout.stories.js    # Layout skeleton complet
```

### Forms (4)

```
stories/3-Compositions-UI/Forms/
├── FieldsetGroup.stories.js     # Groupe de fieldsets
├── FormPatterns.stories.js      # Patterns de formulaires
├── InlineValidation.stories.js  # Validation inline
└── SearchBar.stories.js         # Barre de recherche complète
```

### Navigation (3)

```
stories/3-Compositions-UI/Navigation/
├── BreadcrumbBar.stories.js     # Barre de fil d'Ariane
├── Footer.stories.js            # Pied de page
├── HeaderShell.stories.js       # Structure header
└── TabsHeader.stories.js        # Header avec onglets
```

---

## 4-Compositions-Domains

Compositions spécifiques aux domaines métier SQLI.

### Corporate (3)

```
stories/4-Compositions-Domains/Corporate/
├── CaseStudyTeaser.stories.js   # Teaser étude de cas
├── ContactCta.stories.js        # CTA contact
└── HeroCorporate.stories.js     # Hero section corporate
```

### À venir (planifiés)

```
# Team
├── TeamCard.stories.js
├── PartnerCard.stories.js
├── ExpertHeader.stories.js
└── ContactExpertCta.stories.js

# Offers
├── OfferCard.stories.js
├── OfferGrid.stories.js
└── OfferComparisonTable.stories.js

# Portfolio
├── PortfolioGrid.stories.js
├── CaseStudyResults.stories.js
└── CaseStudyTimeline.stories.js

# Careers
├── JobList.stories.js
├── JobDescriptionLayout.stories.js
└── ApplyCta.stories.js

# Editorial
└── PostBodyLayout.stories.js
```

---

## Récapitulatif par catégorie

### Primitives (56 composants)

| Catégorie    | Composants | Status |
| ------------ | ---------- | ------ |
| Actions      | 6          | Stable |
| Data Display | 12         | Stable |
| Feedback     | 6          | Stable |
| Forms        | 17         | Stable |
| Layout       | 13         | Stable |
| Navigation   | 10         | Stable |
| Typography   | 4          | Stable |

### Compositions UI (23 composants)

| Catégorie    | Composants | Status   |
| ------------ | ---------- | -------- |
| Cards        | 1          | En cours |
| Code         | 4          | Stable   |
| Content      | 1          | En cours |
| Data Display | 4          | Stable   |
| Feedback     | 2          | Stable   |
| Forms        | 4          | Stable   |
| Navigation   | 4          | Stable   |

### Compositions Domains (3 composants)

| Catégorie | Composants | Status   |
| --------- | ---------- | -------- |
| Corporate | 3          | En cours |
| Team      | 0          | Planifié |
| Offers    | 0          | Planifié |
| Portfolio | 0          | Planifié |
| Careers   | 0          | Planifié |
| Editorial | 0          | Planifié |

---

## Notes d'évolution

### Améliorations suggérées

1. **Compositions UI manquantes:**
   - Blog (AuthorBio, TableOfContents, ShareBar)
   - Overlays (ConfirmDialog, ContextMenu)
   - Empty States

2. **Compositions Domains à implémenter:**
   - Team, Offers, Portfolio, Careers, Editorial

3. **Cohérence des stories:**
   - Standardiser les variants: Default, Variants, Sizes, States, DarkMode, Interactive
   - Ajouter systématiquement les stories "Semantic HTML vs sqli-\*"

4. **Documentation:**
   - Ajouter des `_intro.mdx` aux Compositions UI et Domains
   - Compléter les accessibility guidelines

---

## Conventions de nommage

### Fichiers stories

- Format: `ComponentName.stories.js`
- PascalCase pour le nom du composant
- Toujours inclure `.stories` dans le nom

### Titres Storybook

```javascript
export default {
  title: 'Category/Subcategory/ComponentName',
  // Exemples:
  // 'Primitives/Forms/Checkbox'
  // 'Compositions UI/Navigation/HeaderShell'
  // 'Compositions Domains/Corporate/HeroCorporate'
};
```

### Structure des stories par composant

```javascript
// 1. Default (état de base)
export const Default = () => `...`;

// 2. Variants (toutes les variantes visuelles)
export const Variants = () => `...`;

// 3. Sizes (xs, sm, md, lg, xl si applicable)
export const Sizes = () => `...`;

// 4. States (hover, focus, disabled, error)
export const States = () => `...`;

// 5. DarkMode
export const DarkMode = () => `...`;

// 6. Interactive (avec controls Storybook)
export const Interactive = {
  render: (args) => `...`,
  args: {...},
  argTypes: {...},
};
```
