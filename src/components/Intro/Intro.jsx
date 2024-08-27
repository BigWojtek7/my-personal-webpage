import styles from './Intro.module.css';
function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>
        Cześć, jestem
        <span className={styles.boldTitle}>Wojciech Zagórowski</span>
      </h1>
      <div className={styles.profession}>
        <p>full-stack dev</p>
      </div>
      <div className={styles.introImg}>
        <img src="../../assets/images/wojtek-01.jpeg" alt="Image of my face" />
      </div>
    </section>
  );
}
export default Intro;
