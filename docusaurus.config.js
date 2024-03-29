// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PeCoReT',
    tagline: 'An Open Source Pentest Collaboration and Reporting Tool',
    favicon: 'favicon.svg',
    trailingSlash: true,

    // Set the production url of your site here
    url: 'https://pecoret.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'pecoret', // Usually your GitHub org/user name.
    projectName: 'pecoret.github.io', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        require.resolve("docusaurus-plugin-image-zoom")
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
        {
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true
            },
            navbar: {
                title: '',
                logo: {
                    alt: 'PeCoReT Logo',
                    src: 'img/logo-no-slogan.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/PeCoReT',
                        "aria-label": 'GitHub',
                        position: 'right',
                        className: 'header-github-link'
                    },

                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Introduction',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discussions',
                                href: 'https://github.com/PeCoReT/pecoret-issues/discussions',
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
                                href: 'https://github.com/pecoret',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} PeCoReT.`,
            },
            prism: {
                theme: darkCodeTheme,
                darkTheme: darkCodeTheme,
            },
            zoom: {
                selector: '.markdown img',
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    background: {
                        light: 'rgb(255, 255, 255)',
                        dark: 'rgb(50, 50, 50)'
                    }
                }
            },
        },
    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
            }),
        ],
    ],
};

module.exports = config;
