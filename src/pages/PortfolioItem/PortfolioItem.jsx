import Intro from '../../components/Intro/Intro';
import ProjectIndividual from '../../components/ProjectIndividual/ProjectIndividual';

import projectsArray from '../../assets/projects/projects';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function PortfolioItem() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const { projectid } = useParams();
  console.log(projectsArray[0].id === +projectid);

  const [project] = projectsArray.filter(
    (project) => +projectid === project.id
  );
  console.log(project);
  return (
    <>
      <Intro
        style={{ height: 'auto', marginTop: '3em', marginBottom: '0' }}
        title={`Project#${project.id}`}
        name={project.name}
        subtitle={project.subtitle}
        imageSrc={project.image_screenshot.image_url}
        imageAlt={project.image_screenshot.image_alt}
      />
      <ProjectIndividual
        descriptionIntro={project.description.intro}
        descriptionBody={project.description.body}
        descriptionEnding={project.description.ending}
        imageUrl={project.image_details.image_url}
        imageAlt={project.image_details.image_alt}
        githubUrl={project.github_url}
      />
    </>
  );
}
export default PortfolioItem;
