import styles from './Intro.module.css';
function Intro({ title, name, subtitle, imageSrc, imageAlt, style }) {
  return (
    <section className={styles.intro} style={style}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {title} <strong>{name}</strong>
        </h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <img className={styles.introImg} src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}
export default Intro;
