import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="bg-footer h-16 px-6 pt-3" id="home">
      <div>
        <Link className="text-inherit no-underline text-2xl" to="/">
          <p className="font-secondary p-0">&lt;BigWojtek7&gt;</p>
        </Link>
      </div>

      <button
        className={`
          border border-[rgba(165,150,120,0.5)] rounded-lg
          py-5 px-3 bg-transparent cursor-pointer
          absolute right-6 top-3 z-50
          ${isNavOpen ? 'fixed' : 'absolute'}
        `}
        onClick={toggleMenu}
        aria-label="toggle navigation"
      >
        <span
          className={`
          relative block
          before:content-[''] after:content-['']
          before:absolute after:absolute
          before:left-0 after:left-0
          before:right-0 after:right-0
          before:h-[3px] after:h-[3px]
          before:w-8 after:w-8
          before:rounded-[1px] after:rounded-[1px]
          before:bg-accent after:bg-accent
          before:-top-2 after:top-2
          before:transition-transform after:transition-transform
          before:duration-250 after:duration-250
          h-[3px] w-8 rounded-[1px] bg-accent
          transition-all duration-250 ease-in-out
          ${
            isNavOpen
              ? `
            rotate-45
            before:translate-y-2 before:rotate-90
            after:translate-y-[-2px] after:opacity-0
          `
              : ''
          }
        `}
        />
      </button>

      <nav
        className={`
        fixed bg-footer text-white
        inset-0 z-40
        transition-transform duration-250 ease-[cubic-bezier(0.5,0,0.5,1)]
        ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        <ul className="flex flex-col h-full list-none p-0 m-0 justify-evenly items-center">
          {[
            { to: '/#home', text: 'Home' },
            { to: '/#services', text: 'What I do' },
            { to: '/#about', text: 'About me' },
            { to: '/#work', text: 'My Portfolio' },
          ].map((item) => (
            <li key={item.text}>
              <Link
                to={item.to}
                className="text-5xl no-underline font-black hover:text-accent"
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
