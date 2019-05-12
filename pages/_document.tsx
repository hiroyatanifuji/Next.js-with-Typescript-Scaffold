import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

// execute only in SS
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return <html>
    <Head>
      <meta name='viewport' content='width=device-width,initial-scale=1.0,viewport-fit=cover'/>
      <link rel='stylesheet' href='/static/style.css'/>
      <link rel='stylesheet' href='/static/reboot.css'/>
      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
            integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'
            crossOrigin='anonymous'/>

    </Head>
    <body>
    <Main/>
    <NextScript/>
    </body>
    <style jsx>{`
      html, body {
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', YuGothic, 'Yu Gothic', '游ゴシック  Medium', Meiryo, sans-serif;
      }
    `}</style>
    </html>;
  }
}
