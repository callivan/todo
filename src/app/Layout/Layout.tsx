import { Footer, Header, Main } from '@widgets';

import styles from './styles.module.scss';

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <Main />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
