import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

export default class DocumentPage extends Document {
  static getInitialProps ({ renderPage, req }) {
    const isServer = !!req
    if (!isServer) {
      return { page: renderPage(), styleTags: null }
    }

    const sheet = new ServerStyleSheet()
    // Bind is not enough as we receive a component and not an element
    // https://github.com/styled-components/styled-components-website/blob/master/pages/_document.js#L151
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleTags()
    return { ...page, styleTags }
  }
  render () {
    return (
      <html>
        <Head>
        <title>Nadim Islam</title>

          <link href='https://fonts.googleapis.com/css?family=Nunito+Sans:200,400,700,900' rel='stylesheet' />
          <link href='https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css' rel='stylesheet' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicons/manifest.json' />
          <link rel='mask-icon' href='/static/favicons/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='theme-color' content='#ffffff' />

          <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1' />
          <style>
            {`
                body { 
                  font: 15px Nunito Sans;
                  margin: 0;
                  overflow-x: hidden;
                  padding: 0;
                  font-family: Nunito Sans;
                }
                h1,h2,h3,h4,h5,h6 {
                  font-family: Nunito Sans;
                }
                h1 {
                  cursor: default;
                  user-select: none; 
                }
                p, h3 {
                  margin-top: 0;
                  font-size: 15px;
                  line-height: 1.5em;
                  margin: 7px 0px;
                  font-weight: 400;
                }
              `}
          </style>

        </Head>
        <head dangerouslySetInnerHTML={{__html: this.props.styleTags}} />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
