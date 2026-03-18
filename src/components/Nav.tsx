import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const tabs = [
  { to: '/', label: 'Works' },
  { to: '/about', label: '关于' },
];

type NavProps = {
  solidOnScroll?: boolean;
};

export function Nav({ solidOnScroll = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!solidOnScroll) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solidOnScroll]);

  const navClassName = `top-nav${
    solidOnScroll && scrolled ? ' top-nav--solid' : ''
  }`;

  return (
    <nav className={navClassName}>
      <div className="top-nav-inner">
        <NavLink to="/" className="top-nav-avatar-wrap" aria-label="首页">
          <img
            src="/images/person.png"
            alt=""
            className="top-nav-avatar"
          />
        </NavLink>
        <div className="top-nav-tabs">
          {tabs.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `top-nav-tab ${isActive ? 'top-nav-tab-active' : ''}`
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
