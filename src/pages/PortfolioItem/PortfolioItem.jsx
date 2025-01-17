import Intro from '../../components/Intro/Intro';
import ProjectIndividual from '../../components/ProjectIndividual/ProjectIndividual';
import projectsArray from '../../assets/projects/projects';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function PortfolioItem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { projectid } = useParams();
  const { currentLanguage } = useLanguage();

  const [project] = projectsArray.filter(
    (project) => +projectid === project.id
  );

  return (
    <>
      <Intro
        style={{ height: 'auto', marginTop: '3em', marginBottom: '0' }}
        title={`${currentLanguage.translations.intro.projectTitle}${project.id}`}
        name={project.name}
        subtitle={project.subtitle}
        imageSrc={project.image_screenshot.image_url}
        imageAlt={project.image_screenshot.image_alt}
      />
      <ProjectIndividual
        id={projectid}
        imageUrl={project.image_details.image_url}
        imageAlt={project.image_details.image_alt}
        githubUrl={project.github_url}
        liveUrl={project.live_url}
      />
    </>
  );
}
export default PortfolioItem;
