import styles from './ProjectIndividual.module.css';

function ProjectIndividual({
  descriptionIntro,
  descriptionBody,
  descriptionEnding,
  imageUrl,
  imageAlt,
  githubUrl,
}) {
  return (
    <div className={styles.projectIndividual}>
      <p>{descriptionIntro}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>{descriptionBody}</p>
      <p>{descriptionEnding}</p>
      <div className={styles.githubLinks}>
        <p>Linki do projektu na gitHub:</p>
        <a
          href={githubUrl.frontend}
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend
        </a>
        <a
          href={githubUrl.backend}
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend
        </a>
      </div>
    </div>
  );
}
export default ProjectIndividual;
