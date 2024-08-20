import { defaultTheme } from "vuepress";
module.exports = {
  lang: "id-ID",
  title: "Hawa",
  theme: defaultTheme({
    logo: "/cems-online-light.png",
    logoDark: "/cems-online-dark.png",

    // Assumes GitHub. Can also be a full GitLab url.
    repo: "cems-online/docs",
    repoLabel: "Kontribusi!",

    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "main",

    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Perbaiki halaman ini!",
    contributors: true,
    contributorsText: "Kontributor",
    lastUpdated: true,
    lastUpdatedText: "Terakhir Diperbarui",

    navbar: [
      {
        text: "Hawa Backup",
        link: "/backup/",
      },
      {
        text: "Setting",
        link: "/setting/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "FAQ",
        link: "/faq/",
      },
      {
        text: "Dukungan teknis",
        children: [
          { text: "GRC Teknik", link: "https://grcteknik.com/contact-us/" },
        ],
      },
    ],

    sidebar: {
      "/petunjuk-pengoperasian/read.md": [
        {
          text: "Petunjuk Pengoperasian",
          sidebarDepth: 2,
          collapsable: true,

          children: [
            "/petunjuk-pengoperasian/membuka-hawa.md",
            "/petunjuk-pengoperasian/report.md",
            "/petunjuk-pengoperasian/historycal-trend.md",
            "/petunjuk-pengoperasian/alarm.md",
            "/petunjuk-pengoperasian/sync-logs.md",
          ],
        },
      ],

      "/panduan-installasi/": [
        {
          text: "Panduan Installasi",
          sidebarDepth: 3,
          collapsable: true,
          children: ["/panduan-installasi/index.md"],
        },
      ],

      "/setting/": [
        {
          text: "Setting",
          sidebarDepth: 3,
          collapsable: true,
          link: "/setting/readme.md",

          children: [
            "/setting/company-profile/readme.md",
            {
              text: "Chimney",
              sidebarDepth: 3,
              collapsable: true,
              link: "/setting/chimney/readme.md",
              children: ["/setting/chimney/parameter.md"],
            },
            "/setting/sispek/readme.md",
            "/setting/device/readme.md",
            "/setting/telegram/readme.md",
            "/setting/report-template/readme.md",
            "/setting/views/readme.md",
            "/setting/users/readme.md",
            "/setting/developer/readme.md",
          ],
        },
      ],

      "/api/": [
        {
          text: "Hawa Web API",
          sidebarDepth: 3,
          collapsable: true,

          children: [
            "/api/index.md",
            "/api/getting-started.md",

            {
              text: "Referensi API",
              sidebarDepth: 2,
              collapsable: true,
              // link: '/api/index.md',
              children: [
                "/api/controllers/mendapatkan-csrf-token.md",
                "/api/controllers/cerobong.md",
                "/api/controllers/parameter.md",
                "/api/controllers/record.md",
              ],
            },
          ],
        },
      ],
      "/backup/": [
        {
          text: "Panduan Backup Data Hawa",
          sidebarDepth: 3,
          collapsable: true,

          children: ["/backup/"],
        },
      ],

      "/faq/": [
        {
          text: "FAQ",
          sidebarDepth: 3,
          collapsable: true,
          link: "/faq/readme.md",

          children: [
            "/faq/nilai-parameter/readme.md",
            "/faq/generate-report/readme.md",
            "/faq/kendala-pengiriman-data/readme.md",
            "/faq/data-sispek/readme.md",
            "/faq/set-status-chimney/readme.md",
            "/faq/set-status-parameter/readme.md",

          ],
        },
      ],

      "/users/": [""],
    },
  }),
  description: "Dokumentasi aplikasi CEMS Online berbasis Hawa",
};
