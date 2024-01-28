// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '罗莉安的小飞龙',
  tagline: '今天，也是充满希望的一天。',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      //搜索插件
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        docsRouteBasePath: '/',
      },
    ],
    'plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '罗莉安的小飞龙',
        logo: {
          alt: 'My Site Logo',
          src: 'favicon.ico',
        },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar2',
            position: 'left',
            label: 'java',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar3',
            position: 'left',
            label: '运维',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar4',
            position: 'left',
            label: '数据库',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar5',
            position: 'left',
            label: '虚拟化',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar6',
            position: 'left',
            label: '网络',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar7',
            position: 'left',
            label: '面试',
          },
          // { to: '/manager', label: '后台管理', position: 'left' },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/desmond789/docusaurus_blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      //右上角显示一个目录栏
      tableOfContents: {
        // 显示 h2 到 h4 标题
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      //自动折叠其他侧边栏
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/desmond789/docusaurus_blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 罗莉安的小飞龙, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
