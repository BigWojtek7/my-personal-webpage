import { useLanguage } from '../../hooks/useLanguage';

function Intro({ name, imageSrc, imageAlt, style, title }) {
  const { currentLanguage } = useLanguage();
  const { translations } = currentLanguage;

  return (
    <section
      className="sm:flex sm:h-[calc(100vh-65px)] sm:max-h-[800px] sm:items-center sm:justify-center"
      style={style}
    >
      <div className="gap-x-4 sm:mb-12 sm:grid sm:min-w-min sm:grid-cols-[clamp(250px,30vw,330px)_max-content] sm:grid-rows-[1fr_1fr]">
        <h1 className="col-start-2 row-start-1 mb-1 font-primary font-normal">
          {title || translations.intro.title}{' '}
          <strong className="block">{name}</strong>
        </h1>
        <p className="m-0 mb-4 inline-block bg-accent px-4 py-1 text-xl uppercase sm:relative sm:-left-6 sm:col-start-[-1] sm:col-end-1 sm:row-start-2 sm:w-[calc(100%+1.5em)] sm:self-start sm:text-right">
          {translations.intro.subtitle}
        </p>
        <img
          className="sm: min-w-64 shadow-lg shadow-black/50 sm:relative sm:z-10 sm:col-start-1 sm:row-span-2 sm:row-start-1"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </section>
  );
}
export default Intro;
