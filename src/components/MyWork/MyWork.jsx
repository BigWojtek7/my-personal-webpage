import styles from './MyWork.module.css';
function MyWork() {
  return (
    <section className={styles.myWork}>
      <h2>My work</h2>
      <p>A section of my range of work</p>
      <div className={styles.works}>
        <div className={styles.work}>
          <a href="#">
            <img
              src="../../assets/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.work}>
          <a href="#">
            <img
              src="../../assets/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.work}>
          <a href="#">
            <img
              src="../../assets/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.work}>
          <a href="#">
            <img
              src="../../assets/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
        <div className={styles.work}>
          <a href="#">
            <img
              src="../../assets/images/portfolio-01.jpg"
              alt="Screenshot of my project"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
export default MyWork;
