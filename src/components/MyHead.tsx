import Head from 'next/head';

const MyHead: React.FC = () => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta
        name='format-detection'
        content='telephone=no'
      />
      <title>FKRK</title>
      <meta
        name='description'
        content='FKRKは不可意思が摂取したモノやコトを記録するサイトです。'
      />
      <link
        rel='canonical'
        href='https://fkrk.fkxsh.com'
      />
      <meta
        property='og:title'
        content='FKRK'
      />
      <meta
        property='og:type'
        content='website'
      />
      <meta
        property='og:url'
        content='https://fkrk.fkxsh.com'
      />
      <meta
        property='og:image'
        content='https://fkrk.fkxsh.com/share.png'
      />
      <meta
        property='og:image:width'
        content='1200'
      />
      <meta
        property='og:image:height'
        content='630'
      />
      <meta
        property='og:site_name'
        content='FKRK'
      />
      <meta
        property='og:description'
        content='FKRKは不可意思が摂取したモノやコトを記録するサイトです。'
      />
      <meta
        property='og:locale'
        content='ja_JP'
      />
      <meta
        name='twitter:card'
        content='summary_large_image'
      />

      <link
        rel='icon'
        type='image/x-icon'
        href='/favicon.ico'
      />
    </Head>
  );
};

export default MyHead;
