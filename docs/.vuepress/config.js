import {defaultTheme} from 'vuepress'
module.exports = {
  lang: 'id-ID',
  // title: 'Panduan',
  theme:defaultTheme({
    logo: '/cems-online-light.png',
    logoDark: '/cems-online-dark.png',

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'cems-online/docs',
    repoLabel: 'Kontribusi!',

    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Perbaiki halaman ini!',
    contributors: true,
    contributorsText: 'Kontributor',
    lastUpdated: true,
    lastUpdatedText: 'Terakhir Diperbarui',

    
    navbar: [
      {
        text: 'Setting',
        link: '/setting/telegram/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'Dukungan teknis',
        children: [
          { text: 'GRC Teknik', link: 'https://grcteknik.com/contact-us/' },
        ],
      },
    ],

    

    sidebar: {
      '/petunjuk-pengoperasian/': [
        {
          text: 'Petunjuk Pengoperasian',
          sidebarDepth: 2,
          collapsable: true,

          children: [
            '/petunjuk-pengoperasian/membuka-hawa.md',
            '/petunjuk-pengoperasian/report.md',
            '/petunjuk-pengoperasian/historycal-trend.md',
            '/petunjuk-pengoperasian/alarm.md',
            '/petunjuk-pengoperasian/sync-logs.md',
          ],
        },
      ],

      '/panduan-installasi/': [
        {
          text: 'Panduan Installasi',
          sidebarDepth: 2,
          collapsable: true,
          children: ['/dev.md'],
        },
      ],

      '/setting/': [
        {
          text: 'Setting',
          sidebarDepth: 3,
          collapsable: true,

          children: [
            {
              text: 'Chimney',
              sidebarDepth: 3,
              collapsable: true,
              link: '/setting/chimney/parameter.html',
              children: ['/setting/chimney/parameter.md'],
            },
            '/setting/telegram/readme.md',
          ],
        },
      ],

      '/api/': [
        {
          text: 'Hawa Web API',
          sidebarDepth: 3,
          collapsable: true,

          children: [
            '/api/index.md',
            '/api/getting-started.md',

            {
              text: 'Referensi API',
              sidebarDepth: 2,
              collapsable: true,
              children: [
                '/api/controllers/cerobong.md',
                '/api/controllers/parameter.md',
              ],
            },
          ],
        },
      ],

      '/users/': [''],
    },
  }),
  description: 'Dokumentasi aplikasi CEMS Online berbasis hawa',

}
