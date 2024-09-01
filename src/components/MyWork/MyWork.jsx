import styles from './MyWork.module.css';
import { Link } from 'react-router-dom';
import projectsArray from '../../assets/projects/projects';

function MyWork() {
  return (
    <section className={styles.myWork} id="work">
      <h2 className={styles.title}>My projects</h2>
      <p className={styles.subtitle}>My selected projects</p>
      <div className={styles.portfolio}>
        {projectsArray.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className={styles.portfolioItem}
          >
            <img
              className={styles.portfolioImg}
              src={project.image_screenshot.image_url}
              alt={project.image_screenshot.image_alt}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
export default MyWork;
