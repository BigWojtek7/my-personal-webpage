import Button from '../Button/Button';
import styles from './About.module.css';
import clsx from 'clsx';

function About() {
  return (
    <section
      className={clsx(
        'mx-auto max-w-5xl min-h-screen',
        'sm:grid sm:grid-cols-[1fr_275px] sm:grid-rows-[min-content_min-content_1fr',
        'sm:gap-x-4'
      )}
      id="about"
    >
      <h2 className="mb-1 font-black">Who I am</h2>
      <p
        className={clsx(
          'm-0 mb-4 bg-accent font-secondary p-2',
          'sm:self-start sm:col-start-1 sm:col-end-[-1]',
          'sm:row-start-2 sm:row-end-3',
          'sm:relative sm:-left-4',
          'sm: w-[calc(100%+2em)]',
          'sm:pl-4 sm:pr-[calc(275px+4em)]'
        )}
      >
        Full Stack Developer passionate about exploring new technologies
      </p>
      <div className="first-of-type:mt-0">
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
          className="ml-4"
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
        className="shadow-lg shadow-black/50 sm:relative sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-span-3"
      />
    </section>
  );
}

export default About;
