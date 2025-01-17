import { Link } from 'react-router-dom';
import projectsArray from '../../assets/projects/projects';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectList from '../ProjectList/ProjectList';

function MyWork() {
  const { currentLanguage } = useLanguage();
  const { translations } = currentLanguage;
  const translatedProjects = ProjectList({ projects: projectsArray });

  return (
    <section className="bg-white text-center" id="work">
      <h2 className="text-primary">{translations.portfolio.title}</h2>
      <p className="mb-8 text-2xl font-black text-accent">
        {translations.portfolio.subtitle}
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {translatedProjects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="group mx-auto overflow-hidden bg-accent focus:relative focus:z-10"
          >
            <img
              className="transition-transform duration-700 ease-[cubic-bezier(0.5,0,0.5,1)] group-hover:scale-125 group-hover:opacity-50 group-focus:scale-125 group-focus:opacity-50"
              src={project.image_screenshot.image_url}
              alt={project.image_screenshot.image_alt}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
export default MyWork;
