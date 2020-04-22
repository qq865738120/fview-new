import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script src="/js/jquery.min.js"></script>
          <script type="text/javascript" src="/js/3deye.js"></script>   
          
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument