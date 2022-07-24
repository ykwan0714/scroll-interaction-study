const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const myConfig = async () => {
  const plugins = []
  const folders = glob.sync('./src/**/*.js')
  const entry = folders.reduce((acc, item, idx) => {
    const path = item.replace('./src/', '').split('/')
    path.pop()
    const name = path.join('/')
    acc[name === '' ? '.' : name] = item
    return acc
  }, {})
  Object.keys(entry).forEach((ent) => {
    const htmlPlugin = new HtmlWebpackPlugin({
      inject: true,
      title: `${ent.replace('.', '')}`,
      template: '/index.html',
      filename: `${ent}/index.html`,
      chunks: [ent]
    })
    plugins.push(htmlPlugin)
  })
  return {
    entry,
    output: {
      filename: '[name]/index.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    /* https://webpack.js.org/guides/asset-management/ */
    module: {
      rules: [
        {
          test: /\.s?css$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpe?g|gif|mp4|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins
  }
}

module.exports = myConfig()
