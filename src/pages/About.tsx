import { Nav } from '../components/Nav';
import './About.css';

export function About() {
  return (
    <div className="page about-page">
      <Nav />
      <main className="about-main">
        <h1 className="about-title">关于</h1>
        <p className="about-text">此处可放置个人介绍、联系方式等。</p>
      </main>
    </div>
  );
}
