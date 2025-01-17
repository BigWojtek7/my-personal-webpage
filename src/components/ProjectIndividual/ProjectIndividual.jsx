import Button from '../Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectList from '../ProjectList/ProjectList';
import projectsArray from '../../assets/projects/projects';

function ProjectIndividual({ id, imageUrl, imageAlt, githubUrl, liveUrl }) {
  const { currentLanguage } = useLanguage();
  const { translations } = currentLanguage;

  const project = projectsArray.find((p) => p.id === parseInt(id));
  const translatedProjects = ProjectList({ projects: [project] });
  const translatedProject = translatedProjects[0];

  return (
    <div className="mx-auto max-w-5xl px-8 py-8">
      <p>{translatedProject.description.intro}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>{translatedProject.description.body}</p>
      <p>{translatedProject.description.ending}</p>

      <p className="text-center font-black">GitHub links:</p>
      <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-4">
        <Button
          url={githubUrl.frontend}
          isNewTab={true}
          style={{ textAlign: 'center' }}
        >
          {translations.portfolio.buttons.frontend}
        </Button>
        <Button
          url={githubUrl.backend}
          isNewTab={true}
          style={{ textAlign: 'center' }}
        >
          {translations.portfolio.buttons.backend}
        </Button>
        <Button url={liveUrl} isNewTab={true} style={{ textAlign: 'center' }}>
          {translations.portfolio.buttons.live}
        </Button>
      </div>
    </div>
  );
}
export default ProjectIndividual;
