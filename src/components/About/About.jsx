import Button from '../Button/Button';
import clsx from 'clsx';
import { useLanguage } from '../../contexts/LanguageContext';

function About() {
  const { currentLanguage } = useLanguage();
  const { translations } = currentLanguage;

  return (
    <section
      className={clsx(
        'mx-auto min-h-screen max-w-5xl',
        'sm:grid-rows-[min-content_min-content_1fr sm:grid sm:grid-cols-[1fr_275px]',
        'sm:gap-x-4'
      )}
      id="about"
    >
      <h2 className="mb-1 font-black">{translations.about.title}</h2>
      <p
        className={clsx(
          'm-0 mb-4 bg-accent p-2 font-secondary',
          'sm:col-start-1 sm:col-end-[-1] sm:self-start',
          'sm:row-start-2 sm:row-end-3',
          'sm:relative sm:-left-4',
          'sm: w-[calc(100%+2em)]',
          'sm:pl-4 sm:pr-[calc(275px+4em)]'
        )}
      >
        {translations.about.subtitle}
      </p>
      <div className="first-of-type:mt-0">
        <p>{translations.about.description}</p>
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

        <p>{translations.about.journey}</p>
      </div>
      <img
        src="/images/wojtek-02.jpg"
        alt="Me standing"
        className="shadow-lg shadow-black/50 sm:relative sm:col-start-2 sm:col-end-3 sm:row-span-3 sm:row-start-1"
      />
    </section>
  );
}

export default About;
