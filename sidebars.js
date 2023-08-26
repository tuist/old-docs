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
        {
          type: 'category',
          label: 'Commands',
          collapsed: false,
          items: [
            'cloud/commands/init',
            {
              type: 'category',
              label: 'Manage your Tuist Cloud session',
              items: [
                'cloud/commands/auth/auth',
                'cloud/commands/auth/session',
                'cloud/commands/auth/logout',
              ],
            },
            {
              type: 'category',
              label: 'Manage projects',
              items: [
                'cloud/commands/project/create',
                'cloud/commands/project/list',
                'cloud/commands/project/delete'
              ],
            },
            {
              type: 'category',
              label: 'Manage organizations',
              items: [
                'cloud/commands/organization/create',
                'cloud/commands/organization/list',
                'cloud/commands/organization/delete',
                'cloud/commands/organization/show',
                'cloud/commands/organization/invite',
                {
                  type: 'category',
                  label: 'tuist cloud project remove',
                  items: [
                    'cloud/commands/organization/remove/invite',
                    'cloud/commands/organization/remove/member',
                  ],
                },
                {
                  type: 'category',
                  label: 'tuist cloud project update',
                  items: [
                    'cloud/commands/organization/update/member',
                  ],
                },
              ],
            },
          ],
        },
        'cloud/stats',
        {
          type: 'category',
          label: 'Legal',
          items: [
            'cloud/legal/privacy-policy',
            'cloud/legal/terms-of-service',
          ],
        },
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
