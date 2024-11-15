import { Html, Head, Main, NextScript } from 'next/document';
export const metadata = {
  title: "Tiger Names",
  description: "We will give you the sweetiest tiger name",
};
export default function Document() {
  return (
    <Html>
      <Head>

        <link rel='icon' href='/favicon.ico' />
        {/* google font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
