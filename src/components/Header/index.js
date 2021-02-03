import Head from 'next/head';
import db from '../../../db.json';

export default function Header() {
  return (
    <Head>
      <title>{db.title}</title>
      <meta property="og:title" content={db.title} />
      <meta property="og:image" content={db.bg} />
      <meta property="og:description" content={db.description} />
      <meta property="og:url" content={db.link}/>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={db.link} />
      <meta property="twitter:title" content={db.title} />
      <meta property="twitter:description" content={db.description} />
      <meta property="twitter:image" content={db.bg} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
  );
}
