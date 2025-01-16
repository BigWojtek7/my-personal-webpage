import { Link } from 'react-router-dom';
import projectsArray from '../../assets/projects/projects';

function MyWork() {
  return (
    <section className="bg-white text-center" id="work">
      <h2 className="text-primary">My projects</h2>
      <p className="text-accent font-black text-xl mb-8">
        My selected projects
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-w-4xl mx-auto">
        {projectsArray.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="mx-auto bg-accent overflow-hidden focus:relative focus:z-10 group"
          >
            <img
              className="transition-transform duration-700 ease-[cubic-bezier(0.5,0,0.5,1)]
                         group-hover:scale-125 group-hover:opacity-50 
                         group-focus:scale-125 group-focus:opacity-50"
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
