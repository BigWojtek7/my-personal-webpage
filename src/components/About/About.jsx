import Button from '../Button/Button';
import styles from './About.module.css';
function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.title}>Who I am</h2>
      <p className={styles.subtitle}>Full Stack Dev willing to explore new</p>
      <div className={styles.aboutText}>
        <p>
          Web design has always been a dream of mine, but I didn&#39;t do
          anything in this direction for a long time. The Harvard CS50P course,
          which was based on Python instilled in me a great enthusiasm for this
          profession. Another CS50X course and learning the basics of the C
          language manually memory management and pointers resulted in a deeper
          understanding of Javascript.
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
          My adventure in learning web dev continued with Odin Project, which
          after 7 months since I graduated. Although CSS caused a bit of
          frustration, after learning about FlexBox and Grid, it also began to
          give me pleasure. At this point, I am well aware of the
          direction of React, which perfectly integrates all the tools. In the
          meantime, I got to know Node JS and PostgreSQL.
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
