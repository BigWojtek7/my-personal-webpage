import Button from '../Button/Button';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>Who I am</h2>
      <p className={styles.subtitle}>
        Full Stack Developer passionate about exploring new technologies
      </p>
      <div className={styles.aboutText}>
        <p>
          I have always dreamed of creating impactful web applications, and the
          Harvard CS50P course ignited my passion for development. This
          Python-based course, followed by the CS50X course in C language, gave
          me a strong foundation in programming principles and memory
          management, which later enhanced my understanding of JavaScript and
          modern web technologies.
        </p>
        <Button
          url="https://certificates.cs50.io/c745c9bf-bdac-4f1e-9c51-17c3be50ca35"
          isNewTab={true}
        >
          CS50X
        </Button>
        <Button
          url="https://certificates.cs50.io/e8529bb7-a27f-48d3-a905-1384bf046866"
          isNewTab={true}
          style={{ marginLeft: '1em' }}
        >
          CS50P
        </Button>

        <p>
          My journey continued with The Odin Project, where I expanded my
          front-end skills and developed a strong grasp of FlexBox and Grid.
          Working in CSS has become a source of satisfaction, especially as I’ve
          honed my expertise in React, Node.js, and PostgreSQL. Today, I am
          skilled in using modern JavaScript frameworks and libraries to create
          efficient, responsive, and user-friendly web applications.
        </p>
      </div>
      <img
        src="/images/wojtek-02.jpg"
        alt="Me standing"
        className={styles.aboutImg}
      />
    </section>
  );
}

export default About;
