function Intro({ title, name, subtitle, imageSrc, imageAlt, style }) {
  return (
    <section
      className="sm:h-[calc(100vh-65px)] sm:max-h-[800px] sm:flex sm:items-center sm:justify-center "
      style={style}
    >
      <div className="sm:grid sm:mb-12 sm:min-w-min gap-x-4 sm:grid-cols-[clamp(250px,30vw,330px)_max-content] sm:grid-rows-[1fr_1fr]">
        <h1 className="mb-1 font-normal font-primary col-start-2 row-start-1">
          {title} <strong className="block">{name}</strong>
        </h1>
        <p className="m-0 bg-accent text-xl mb-4 px-4 py-1 inline-block uppercase sm:self-start sm:col-start-[-1] sm:col-end-1 sm:row-start-2 sm:text-right sm:relative sm:-left-6  sm:w-[calc(100%+1.5em)]">
          {subtitle}
        </p>
        <img
          className="shadow-lg shadow-black/50 sm:col-start-1 sm:row-start-1 sm:row-span-2 sm: min-w-64 sm:relative sm:z-10"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </section>
  );
}
export default Intro;
