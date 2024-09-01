import Intro from '../../components/Intro/Intro';
import MyServices from '../../components/MyServices/MyServices';
import About from '../../components/About/About';
import MyWork from '../../components/MyWork/MyWork';

function Home() {
  return (
    <>
      <Intro
        title={'Hi, I am'}
        name={'Wojciech Zagórowski'}
        subtitle={'full-stack dev'}
        imageSrc={'/images/wojtek-01.jpg'}
        imageAlt={'Image of my face'}
      />
      <MyServices />
      <About />
      <MyWork />
    </>
  );
}
export default Home;
