import Button from '../Button/Button';
import styles from './MyServices.module.css';
function MyServices() {
  return (
    <section className={styles.myServices} id="services">
      <h2 className={styles.title}>What I do</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <h3>HTML, CSS, JavaScript & TypeScript</h3>
          <p>
            I believe in mastering the core web technologies—HTML, CSS, and
            JavaScript—as they form the foundation of web development, even in
            an era dominated by frameworks. Recently, I have expanded my skill
            set to include TypeScript, leveraging its type safety and developer
            tooling to create more robust and maintainable code.
          </p>
        </div>
        <div className={styles.service}>
          <h3>React</h3>
          <p>
            React’s component-based architecture allows me to create modular,
            reusable code with ease. I pair React with CSS Modules to organize
            projects into easily manageable parts, ensuring both high code
            quality and readability.
          </p>
        </div>
        <div className={styles.service}>
          <h3>Node.js & SQL</h3>
          <p>
            While my primary focus is on the front end, my experience with
            Node.js and databases like PostgreSQL and MongoDB has deepened my
            understanding of APIs, data security, and server-side data handling.
            This background enhances my ability to design effective and secure
            client-side applications.
          </p>
        </div>
      </div>
      <Button url="#work" isNewTab={false} className="py-2 px-10">
        My portfolio
      </Button>
    </section>
  );
}

export default MyServices;
