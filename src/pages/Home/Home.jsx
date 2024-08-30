import Intro from '../../components/Intro/Intro';
import MyServices from '../../components/MyServices/MyServices';
import About from '../../components/About/About';
import MyWork from '../../components/MyWork/MyWork';

function Home() {
  return (
    <>
      <Intro
        title={'Cześć jestem,'}
        name={'Wojciech Zagórowski'}
        subtitle={'full-stack dev'}
        imageSrc={'/images/wojtek-01.jpeg'}
        imageAlt={'Image of my face'}
      />
      <MyServices />
      <About />
      <MyWork />
    </>
  );
}
export default Home;
