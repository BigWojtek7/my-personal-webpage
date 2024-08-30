import styles from './MyWork.module.css';
import { Link } from 'react-router-dom';
import projectsArray from '../../assets/projects/projects';

function MyWork() {
  return (
    <section className={styles.myWork} id='work'>
      <h2 className={styles.title}>Moje projekty</h2>
      <p className={styles.subtitle}>Moje wybrane projekty</p>
      <div className={styles.portfolio}>
        
        <Link to='/projects/1' className={styles.portfolioItem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-01.jpg"
            alt="Screenshot of my project"
          />
        </Link>

        <a href="#" className={styles.portfolioItem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-02.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioItem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-03.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioItem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-04.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioItem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-05.jpg"
            alt="Screenshot of my project"
          />
        </a>

        <a href="#" className={styles.portfolioItem}>
          <img
            className={styles.portfolioImg}
            src="/images/portfolio-06.jpg"
            alt="Screenshot of my project"
          />
        </a>
      </div>
    </section>
  );
}
export default MyWork;
