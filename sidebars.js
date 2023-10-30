module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial/get-started', 'tutorial/faq'],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/adopting-tuist',
        'guides/helpers',
        'guides/resources',
        'guides/dependencies',
        'guides/third-party-dependencies',
        'guides/task',
        'guides/environment',
        'guides/version-management',
        'guides/shell-autocompletion',
        'guides/continuous-integration',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        'commands/build',
        'commands/clean',
        'commands/dependencies',
        'commands/edit',
        'commands/graph',
        'commands/generate',
        'commands/migration',
        'commands/plugin',
        'commands/scaffold',
        'commands/signing',
        'commands/test',
      ],
    },
    {
      type: 'category',
      label: 'Manifests reference',
      items: [
        'manifests/project',
        'manifests/workspace',
        'manifests/dependencies',
        'manifests/config',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      items: ['plugins/using-plugins', 'plugins/creating-plugins'],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/app-extensions',
        'examples/app-clips',
        'examples/command-line-tools',
        'examples/fixtures',
      ],
    },
    {
      type: 'category',
      label: 'Building at scale',
      items: [
        'building-at-scale/microfeatures',
        'building-at-scale/caching',
        'building-at-scale/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Tuist Cloud',
      items: [
        'cloud/get-started',
        'cloud/stats'
      ],
    },
    {
      type: 'category',
      label: 'Contributors',
      items: [
        'contributors/get-started',
        'contributors/fourier',
        'contributors/championing-projects',
        'contributors/code-reviews',
        'contributors/reporting-bugs',
        'contributors/architecture',
        'contributors/testing-strategy',
        'contributors/core-team',
        'contributors/manifesto',
        'contributors/performance-testing',
        'contributors/generation-pipeline',
        'contributors/analytics-events',
      ],
    },
  ],
}
