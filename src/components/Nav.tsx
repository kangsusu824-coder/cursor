import { NavLink } from 'react-router-dom';
import './Nav.css';

const tabs = [
  { to: '/', label: 'Works' },
  { to: '/about', label: '关于' },
];

export function Nav() {
  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <NavLink to="/" className="top-nav-avatar-wrap" aria-label="首页">
          <img
            src="https://picsum.photos/80/80?random=avatar"
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
