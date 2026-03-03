import { SplitText } from '../components/SplitText';
import Aurora from '../components/Aurora';
import BounceCards, { type BounceCardItem } from '../components/BounceCards';
import { Nav } from '../components/Nav';
import './Index.css';

const WORKS: BounceCardItem[] = [
  { image: 'https://picsum.photos/800/600?random=1', href: '/work/1', title: '项目一' },
  { image: 'https://picsum.photos/800/600?random=2', href: '/work/2', title: '项目二' },
  { image: 'https://picsum.photos/800/600?random=3', href: '/work/3', title: '项目三' },
];

const CARD_TRANSFORMS = [
  'rotate(10deg) translate(-170px)',
  'rotate(5deg) translate(-85px)',
  'rotate(-3deg)',
];

export function Index() {
  return (
    <div className="page index-page">
      <Aurora colorStops={['#5EE790', '#5EE7C1', '#089291']} amplitude={1} blend={0.5} />
      <Nav />
      <main className="index-main">
        <header className="index-header">
          <SplitText text="Works." tag="h1" className="index-title" delay={50} duration={1} />
        </header>
        <section className="index-cards">
          <BounceCards
            items={WORKS}
            containerWidth={500}
            containerHeight={380}
            transformStyles={CARD_TRANSFORMS}
            enableHover
          />
        </section>
      </main>
    </div>
  );
}
