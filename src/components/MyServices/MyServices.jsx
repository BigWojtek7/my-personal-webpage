import Button from '../Button/Button';
import ServiceCard from './ServiceCard';
import clsx from 'clsx';
function MyServices() {
  return (
    <section className="bg-white text-center text-primary" id="services">
      <h2
        className={clsx(
          'text-accent',
          "after:mx-auto after:mb-8 after:mt-4 after:block after:h-[1px] after:w-24 after:bg-primary after:content-['']"
        )}
      >
        What I do
      </h2>
      <div className="mx-auto mb-16 max-w-5xl gap-8 md:flex">
        <ServiceCard
          title="HTML, CSS, JavaScript & TypeScript"
          description="I believe in mastering the core web technologies—HTML, CSS, and JavaScript—as they form the foundation of web development, even in an era dominated by frameworks. Recently, I have expanded my skill set to include TypeScript, leveraging its type safety and developer tooling to create more robust and maintainable code."
        />
        <ServiceCard
          title="React"
          description="React’s component-based architecture allows me to create modular, reusable code with ease. I pair React with CSS Modules to organize projects into easily manageable parts, ensuring both high code quality and readability."
        />
        <ServiceCard
          title="Node.js & SQL"
          description="While my primary focus is on the front end, my experience with Node.js and databases like PostgreSQL and MongoDB has deepened my understanding of APIs, data security, and server-side data handling. This background enhances my ability to design effective and secure client-side applications."
        />
      </div>
      <Button url="#work" isNewTab={false} className="px-10 py-2">
        My portfolio
      </Button>
    </section>
  );
}

export default MyServices;
