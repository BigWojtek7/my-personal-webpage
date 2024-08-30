import Intro from '../../components/Intro/Intro';
import ProjectIndividual from '../../components/ProjectIndividual/ProjectIndividual';

function PortfolioItem() {
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
