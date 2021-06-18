import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            id="gtm-js"
            async
            src="https://www.googletagmanager.com/gtm.js?id=GTM-PN8GQK4"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
