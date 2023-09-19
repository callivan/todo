import { Helmet } from 'react-helmet-async';

import { Layout } from './Layout';
import styles from './styles.module.scss';

export function App() {
  const host = import.meta.env.VITE_HOST;
  const protocol = import.meta.env.VITE_PROTOCOL;
  const websiteUrl = `${protocol}://${host}/`;

  return (
    <>
      <Helmet>
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:site_name" content={host} />
        <meta property="og:image" content={`${websiteUrl}/social.png`} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="214" />

        <meta property="twitter:url" content={websiteUrl} />
        <meta name="twitter:image" content={`${websiteUrl}/social.png`} />

        <link rel="icon" type="image/svg+xml" href={`${websiteUrl}/favicon.svg`} />
        <link rel="manifest" href={`${websiteUrl}/manifest.json`} />
      </Helmet>
      <div className={styles.wrapper}>
        <Layout />
      </div>
    </>
  );
}
