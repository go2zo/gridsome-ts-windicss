// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'WindicssStarter',
  siteDescription: 'Gridsome starter with Windicss',
  chainWebpack: (config, { isServer }) => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(
        nodeExternals({
          whitelist: [
            /\.css$/,
            /\?vue&type=style/,
            /vue-instantsearch/,
            /instantsearch.js/,
            /typeface-league-spartan/,
          ],
        })
      )
    }
  },
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug',
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'DocPage',
        index: ['README'],
        baseDir: './content/docs',
        ignore: ['README.md'],
        template: './src/templates/DocPage.vue',
        pathPrefix: '/docs',
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#',
            },
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: 'content/blog/**/index.*',
      },
    },
    { use: 'gridsome-plugin-windicss' },
    { use: 'gridsome-plugin-composition-api' },
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
