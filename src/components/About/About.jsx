import styles from './About.module.css';
function About() {
  return (
    <section className={styles.about} id='about'>
      <h2 className={styles.title}>Kim jestem</h2>
      <p className={styles.subtitle}>Full Stack Dev chcący się uczyć nowego</p>
      <div className={styles.aboutText}>
        <p>
          Projektowanie stron internetowych była od zawsze moim marzeniem, ale
          długo nie robiłem nic w tym kierunku. Kurs Harvard CS50P, który
          opierał się na Pythonie zaszczepil we mnie ogromny zapał do tego
          zawodu. Kolejny kurs CS50X i poznanie podstaw języka C z manulanym
          zarząniem pamięcią i pointereami zaowocowal przy głębszej juz nauce
          Javascript.
        </p>
        <p>
          Moją przygodę z nauką web dev kontynuwalem z Odin Project, który po 7
          miesiącach ukończyłem. CSS, mimo, że z początku sprawial sporo
          flustracji, po poznaniu FlexBox i GRid zaczął również sprawiać
          przyjemność. W tym momencie doskonale wiedze w kierunku React, który
          doskonale scala wszystkie narzędzia. W miedzyczasie poznalem Node JS i
          posgresql.
        </p>
      </div>
      <img
        src="/images/wojtek-02.jpeg"
        alt="Me standing"
        className={styles.aboutImg}
      />
    </section>
  );
}
export default About;
