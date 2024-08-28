import styles from './MyWork.module.css';
function MyWork() {
  return (
    <section className={styles.myWork} id={styles.work}>
      <h2 className={styles.title}>My work</h2>
      <p className={styles.subtitle}>A section of my range of work</p>
      <div className={styles.portfolio}>
        <a href="#" className={styles.portfolioitem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-01.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioitem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-02.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioitem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-03.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioitem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-04.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioitem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-01.jpg"
            alt="Screenshot of my project"
          />
        </a>
      </div>
    </section>
  );
}
export default MyWork;
