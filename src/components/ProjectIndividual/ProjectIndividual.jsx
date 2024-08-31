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

      <p className={styles.linksTitle}>Linki do projektu na gitHub:</p>
      <div className={styles.githubLinks}>
        <Button url={githubUrl.frontend} isNewTab={true} style={{textAlign: 'center'}}>
          Frontend
        </Button>
        <Button
          url={githubUrl.backend}
          isNewTab={true}
          style={{textAlign: 'center'}}
        >
          Backend
        </Button>
        <Button url={liveUrl} isNewTab={true} style={{textAlign: 'center'}}>
          Live
        </Button>
      </div>
    </div>
  );
}
export default ProjectIndividual;
