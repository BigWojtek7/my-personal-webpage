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
    <header className="h-16 bg-footer px-6 pt-3" id="home">
      <div>
        <Link className="text-2xl text-inherit no-underline" to="/">
          <p className="p-0 font-secondary">&lt;BigWojtek7&gt;</p>
        </Link>
      </div>

      <button
        className={`absolute right-6 top-3 z-50 cursor-pointer rounded-lg border border-[rgba(165,150,120,0.5)] bg-transparent px-3 py-5 ${isNavOpen ? 'fixed' : 'absolute'} `}
        onClick={toggleMenu}
        aria-label="toggle navigation"
      >
        <span
          className={`before:duration-250 after:duration-250 duration-250 relative block h-[3px] w-8 rounded-[1px] bg-accent transition-all ease-in-out before:absolute before:-top-2 before:left-0 before:right-0 before:h-[3px] before:w-8 before:rounded-[1px] before:bg-accent before:transition-transform before:content-[''] after:absolute after:left-0 after:right-0 after:top-2 after:h-[3px] after:w-8 after:rounded-[1px] after:bg-accent after:transition-transform after:content-[''] ${
            isNavOpen
              ? `rotate-45 before:translate-y-2 before:rotate-90 after:translate-y-[-2px] after:opacity-0`
              : ''
          } `}
        />
      </button>

      <nav
        className={`duration-250 fixed inset-0 z-40 bg-footer text-white transition-transform ease-[cubic-bezier(0.5,0,0.5,1)] ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <ul className="m-0 flex h-full list-none flex-col items-center justify-evenly p-0">
          {[
            { to: '/#home', text: 'Home' },
            { to: '/#services', text: 'What I do' },
            { to: '/#about', text: 'About me' },
            { to: '/#work', text: 'My Portfolio' },
          ].map((item) => (
            <li key={item.text}>
              <Link
                to={item.to}
                className="text-5xl font-black no-underline hover:text-accent"
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
