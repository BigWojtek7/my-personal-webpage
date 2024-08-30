import Intro from '../../components/Intro/Intro';
import ProjectIndividual from '../../components/ProjectIndividual/ProjectIndividual';

import projectsArray from '../../assets/projects/projects';
import { useParams } from 'react-router-dom';

function PortfolioItem() {
  const { projectid } = useParams();
  console.log(projectsArray[0].id === +projectid);

  const project = projectsArray.filter((project) => +projectid === project.id);
  console.log(project);
  return (
    <>
      <Intro
        style={{ height: 'auto', marginTop: '3em', marginBottom: '0' }}
        title={'Project#1'}
        name={'FriendsBook'}
        subtitle={'React + NodeJs + PostGreSQL'}
        imageSrc={'/images/portfolio-01.jpg'}
      />
      <ProjectIndividual />
    </>
  );
}
export default PortfolioItem;
