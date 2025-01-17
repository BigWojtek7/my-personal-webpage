export const pl = {
  nav: {
    home: 'Strona główna',
    services: 'Co robię',
    about: 'O mnie',
    portfolio: 'Moje portfolio',
  },
  intro: {
    title: 'Cześć, jestem',
    subtitle: 'Frontend Developer',
    cta: 'Moje projekty',
  },
  services: {
    title: 'Co robię',
    development: 'Rozwój Frontend',
    responsive: 'Responsywny Design',
    optimization: 'Optymalizacja wydajności',
    descriptions: {
      frontend:
        'Wierzę w opanowanie podstawowych technologii webowych - HTML, CSS i JavaScript - ponieważ stanowią one fundament tworzenia stron internetowych, nawet w erze zdominowanej przez frameworki. Niedawno poszerzyłem swoje umiejętności o TypeScript, wykorzystując jego bezpieczeństwo typów i narzędzia deweloperskie do tworzenia bardziej niezawodnego i łatwego w utrzymaniu kodu.',
      react:
        'Architektura React oparta na komponentach pozwala mi z łatwością tworzyć modułowy, wielokrotnego użytku kod. Łączę React z CSS Modules, aby organizować projekty w łatwo zarządzalne części, zapewniając wysoką jakość i czytelność kodu.',
      backend:
        'Chociaż skupiam się głównie na frontendzie, moje doświadczenie z Node.js i bazami danych takimi jak PostgreSQL i MongoDB pogłębiło moje zrozumienie API, bezpieczeństwa danych i obsługi danych po stronie serwera. To doświadczenie zwiększa moją zdolność do projektowania efektywnych i bezpiecznych aplikacji po stronie klienta.',
    },
  },
  about: {
    title: 'Kim jestem',
    subtitle: 'Full Stack Developer z pasją do odkrywania nowych technologii',
    description:
      'Zawsze marzyłem o tworzeniu wartościowych aplikacji internetowych, a kurs Harvard CS50P rozpalił moją pasję do programowania. Ten kurs oparty na Pythonie, a następnie kurs CS50X w języku C, dał mi solidne podstawy zasad programowania i zarządzania pamięcią, co później wzmocniło moje zrozumienie JavaScript i nowoczesnych technologii webowych.',
    journey:
      'Moja podróż kontynuowała się z The Odin Project, gdzie rozwinąłem moje umiejętności frontendowe i zdobyłem solidne zrozumienie FlexBox i Grid. Praca z CSS stała się źródłem satysfakcji, szczególnie gdy doskonaliłem swoje umiejętności w React, Node.js i PostgreSQL. Dziś jestem biegły w używaniu nowoczesnych frameworków i bibliotek JavaScript do tworzenia wydajnych, responsywnych i przyjaznych dla użytkownika aplikacji webowych.',
  },
  portfolio: {
    title: 'Moje Projekty',
    subtitle: 'Wybrane Projekty',
    viewProject: 'Zobacz projekt',
    projects: {
      friendsBook: {
        id: 'friendsbook',
        name: 'The friendsBook',
        subtitle: 'React + NodeJS + SQL',
        intro:
          'Mini projekt typu facebook w React i NodeJS z bazą danych PostgreSQL',
        body: 'Możliwość utworzenia konta i dodawania znajomych. Uwierzytelnianie za pomocą tokena JWT i passport. Obsługa bazy danych PostgreSQL bez ORM w celu treningu zapytań SQL. Frontend w React z responsywnym layoutem w CSS Modules.',
        ending:
          'Ten projekt nauczył mnie wiele w zakresie SQL i pracy z uwierzytelnianiem użytkowników za pomocą node passport',
      },
      blog: {
        id: 'blog',
        name: 'The blog API',
        subtitle: 'React + NodeJS + SQL',
        intro: 'Aplikacja blogowa zbudowana w ramach kursu The Odin Project.',
        body: 'Ta aplikacja webowa pozwala użytkownikom przeglądać posty i, po zalogowaniu, komentować je. Administratorzy mają dodatkowe uprawnienia do dodawania i usuwania postów oraz usuwania komentarzy. To mój modelowy projekt, w pełni napisany w TypeScript, gdzie skupiłem się na tworzeniu solidnego, łatwego w utrzymaniu kodu.',
        ending:
          'Położyłem również duży nacisk na testowanie aplikacji, aby zapewnić wysoką jakość i niezawodność funkcjonalności.',
      },
      portfolio: {
        id: 'portfolio',
        name: 'Moja strona osobista',
        subtitle: 'React + CSS Modules',
        intro:
          'Moja strona osobista to w pełni responsywna witryna prezentująca moje portfolio, projekty i zawodową podróż.',
        body: 'Zbudowana w HTML, CSS i JavaScript, zawiera elegancki i przejrzysty design skupiony na dostępności i doświadczeniu użytkownika. Strona prezentuje moje umiejętności, ostatnie prace i technologie, które opanowałem w tworzeniu stron internetowych. Formularz kontaktowy pozwala odwiedzającym na bezpośredni kontakt, a strony projektów zawierają szczegółowe informacje o każdym projekcie, w tym zdjęcia, opisy i linki do wersji live lub repozytoriów GitHub.',
        ending:
          'Poprzez tę stronę chcę zaprezentować moje umiejętności w zakresie front-end developmentu i moją ciągłą podróż w nauce.',
      },
    },
    buttons: {
      frontend: 'Frontend',
      backend: 'Backend',
      live: 'Live',
    },
  },
};
