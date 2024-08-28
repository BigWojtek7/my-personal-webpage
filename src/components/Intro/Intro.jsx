import styles from './Intro.module.css';
function Intro() {
  return (
    <section className={styles.intro} id={styles.home}>
      <h1 className={styles.title}>
        Cześć, jestem
        <strong>Wojciech Zagórowski</strong>
      </h1>
      <p className={styles.profession}> full-stack dev</p>
      <div className={styles.introImg}>
        <img src="/images/wojtek-01.jpeg" alt="Image of my face" />
      </div>
    </section>
  );
}
export default Intro;
