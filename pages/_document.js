// import Document, { Head, Main, NextScript } from "next/document";
// import { StyleSheetServer } from "aphrodite";
// export default class MyDocument extends Document {
//   static async getInitialProps({ renderPage }) {
//     const { html, css } = StyleSheetServer.renderStatic(() => renderPage());
//     const ids = css.renderedClassNames;
//     return { ...html, css, ids };
//   }
//   constructor(props) {
//     super(props);
//     const { __NEXT_DATA__, ids } = props;
//     if (ids) {
//       __NEXT_DATA__.ids = this.props.ids;
//     }
//   }
//   render() {
//     return (
//       <html>
//         <Head>
//           <style
//             data-aphrodite
//             dangerouslySetInnerHTML={{ __html: this.props.css.content }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add custom meta tags, styles, or other head elements */}
          <meta
            name="viewportTest"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link rel="stylesheet" href="/path/to/custom.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
