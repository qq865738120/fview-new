import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    document.body.addEventListener(
      "touchmove",
      (e) => {
        alert("滑动")
        e.preventDefault();
      },
      {
        passive: false,
      }
    );
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:description" content="页面描述" />
          <meta
            property="og:image"
            content="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/share-thumb.jpg"
          />
        </Head>
        <body>
          <script src="/js/jquery.min.js"></script>
          <script type="text/javascript" src="/js/3deye.js"></script>
          {/* <script type="text/javascript" src="/js/wx.js"></script> */}
          <script type="text/javascript" src="/js/common.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
