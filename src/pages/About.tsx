import Aurora from '../components/Aurora';
import { Nav } from '../components/Nav';
import './About.css';

export function About() {
  return (
    <div className="page about-page">
      <Aurora colorStops={["#7cff67","#B19EEF","#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <Nav />
      <main className="about-main">
        <section className="about-stage" aria-label="关于我">
          <div className="about-collage">
            <img className="about-person" src="/images/person.png" alt="个人照片" />
            <img className="about-cutout about-cutout-1" src="/images/person.png" alt="" />
            <img className="about-cutout about-cutout-2" src="/images/person.png" alt="" />
            <img className="about-cutout about-cutout-3" src="/images/person.png" alt="" />
            <img className="about-cutout about-cutout-4" src="/images/person.png" alt="" />
          </div>

          <div className="about-tags" aria-hidden>
            <span className="about-tag about-tag-1">AE动效</span>
            <span className="about-tag about-tag-2">AIGC探索</span>
            <span className="about-tag about-tag-3">产品设计</span>
            <span className="about-tag about-tag-4">C4D建模</span>
            <span className="about-tag about-tag-5">全栈设计师</span>
            <span className="about-tag about-tag-6">持续迭代</span>
          </div>
        </section>
      </main>
    </div>
  );
}
