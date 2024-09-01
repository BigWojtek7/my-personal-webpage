import Button from '../Button/Button';
import styles from './MyServices.module.css';
function MyServices() {
  return (
    <section className={styles.myServices} id="services">
      <h2 className={styles.title}>What I do</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <h3>HTML + CSS + JS</h3>
          <p>
            In this age of the popularity of frameworks, I will not overlook the
            basics, which for years have ruled and are the pillars of web
            development namely CSS and vanilla Javascript. I like CSS, and
            that&#39;s why in all my projects all my projects I use CSS modules, to
            get the most out of this language.
          </p>
        </div>
        <div className={styles.service}>
          <h3>React</h3>
          <p>
            What I appreciate most about React are its reusable components,
            which, combined with CSS modules, allow you to focus on a given a
            particular part of the project without disturbing the whole. Working
            in React helps greatly organize the code and make it more readable
            and reusable
          </p>
        </div>
        <div className={styles.service}>
          <h3>Node Js + SQL</h3>
          <p>
            Although I focus my work on the front end, my knowledge of the back
            end of Node JS has helped me understand many aspects such as
            handling APIs, data security or the use of PostgreSQL as well as
            MongoDB. Such experiences make many things clearer when designing
            client-side websites.
          </p>
        </div>
      </div>
      <Button url="#work" isNewTab={false} style={{ padding: '0.5em 2.5em' }}>
        My portfolio
      </Button>
    </section>
  );
}
export default MyServices;
