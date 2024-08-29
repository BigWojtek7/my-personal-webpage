import styles from './Intro.module.css';
function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Cześć, jestem <strong>Wojciech Zagórowski</strong>
        </h1>
        <p className={styles.subtitle}> full-stack dev</p>
        <img
          className={styles.introImg}
          src="/images/wojtek-01.jpeg"
          alt="Image of my face"
        />
      </div>
    </section>
  );
}
export default Intro;
