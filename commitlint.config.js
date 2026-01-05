export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Types autorisés
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nouvelle fonctionnalité
        'fix', // Correction de bug
        'docs', // Documentation
        'style', // Formatage (pas de changement de code)
        'refactor', // Refactoring
        'perf', // Amélioration de performance
        'test', // Ajout/modification de tests
        'build', // Changements du système de build
        'ci', // Changements CI/CD
        'chore', // Autres changements (maintenance)
        'revert', // Revert d'un commit
      ],
    ],
    // Scope optionnel mais utile pour un Design System
    'scope-enum': [
      1, // Warning seulement
      'always',
      ['tokens', 'components', 'stories', 'docs', 'ci', 'deps', 'release'],
    ],
    // Longueur max du sujet
    'subject-max-length': [2, 'always', 100],
  },
};
