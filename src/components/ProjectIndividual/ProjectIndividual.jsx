import Button from '../Button/Button';
import styles from './ProjectIndividual.module.css';

function ProjectIndividual({
  descriptionIntro,
  descriptionBody,
  descriptionEnding,
  imageUrl,
  imageAlt,
  githubUrl,
  liveUrl,
}) {
  return (
    <div className={styles.projectIndividual}>
      <p>{descriptionIntro}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>{descriptionBody}</p>
      <p>{descriptionEnding}</p>
      <div className={styles.githubLinks}>
        <p>Linki do projektu na gitHub:</p>
        <Button url={githubUrl.frontend} isNewTab={true}>
          Frontend
        </Button>
        <Button
          url={githubUrl.backend}
          isNewTab={true}
          style={{ marginLeft: '1em' }}
        >
          Backend
        </Button>
        <Button url={liveUrl} isNewTab={true} style={{ marginLeft: '1em' }}>
          Live
        </Button>
      </div>
    </div>
  );
}
export default ProjectIndividual;
