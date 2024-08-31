import Button from '../Button/Button';
import styles from './MyServices.module.css';
function MyServices() {
  return (
    <section className={styles.myServices} id="services">
      <h2 className={styles.title}>Mój warsztat</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <h3>HTML + CSS + JS</h3>
          <p>
            W dobie popularnosci frameworkow, nie za pominanam o podstawach,
            które od lat rządzą i są filarami tworzenia stron internetowych
            czyli CSS i vanilla Javascript. Bardzo lubię CSS dlatego we
            wszystkich moich projektach uzywam Css modules, aby jak najwięcej
            czerpać z tego języka
          </p>
        </div>
        <div className={styles.service}>
          <h3>React</h3>
          <p>
            W React cenię najbardziej jego komponenty wielkokrotnego uzytku,
            które w połączeniu z CSS modules pozwalają skoncentrować sie na
            danej części projektu bez zaburzania całości. Praca w React pomaga
            bardzo uporządkować kod i sprawić, że jest bardziej czytelny i
            reusable
          </p>
        </div>
        <div className={styles.service}>
          <h3>Node Js + SQL</h3>
          <p>
            Chociaż swoją pracę koncentruję na front-end to znajomość back-end
            Node JS pomogła mi zrozumieć wiele aspektów takich jak obsługa APIs,
            bezpieczeństwo danych czy stosowanie bazy danych PostGreSQL jak i
            MongoDB. Takie doświadczenia sprawia, że wiele rzeczy stało się
            bardziej jasnych przy projektowaniu stron client side.
          </p>
        </div>
      </div>
      <Button url="#work" isNewTab={false}>
        Moje portfolio
      </Button>
    </section>
  );
}
export default MyServices;
