export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616b52454f06f9cac9356c79',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-46yvmosm',
                  apiId: '8c3703c5-f33f-41b1-9bf0-0b3d1e167eb3'
                },
                {
                  buildHookId: '616b5246ca5b34f5440e0e14',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9wvtmh82',
                  apiId: 'fdf18619-2eea-4114-ac21-beaa4f4149d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/princebazawule/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9wvtmh82.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
