import styles from './MyWork.module.css';
function MyWork() {
  return (
    <section className={styles.myWork}>
      <h2>My work</h2>
      <p>A section of my range of work</p>
      <div className={styles.portfolio}>
        <div className={styles.portfolioItem}>
          <a href="#">
            <img
              src="/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.portfolioItem}>
          <a href="#">ń
            <img
              src="/images/portfolio-02.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.portfolioItem}>
          <a href="#">
            <img
              src="/images/portfolio-03.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.portfolioItem}>
          <a href="#">
            <img
              src="/images/portfolio-04.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.portfolioItem}>
          <a href="#">
            <img
              src="/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
export default MyWork;
