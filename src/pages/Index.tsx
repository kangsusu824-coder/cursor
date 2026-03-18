import { SplitText } from '../components/SplitText';
import Aurora from '../components/Aurora';
import BounceCards, { type BounceCardItem } from '../components/BounceCards';
import { Nav } from '../components/Nav';
import './Index.css';

const WORKS: BounceCardItem[] = [
  { image: '/images/work/1.png', href: '/work/1', title: '项目一' },
  { image: '/images/work/2.png', href: '/work/2', title: '项目二' },
  { image: '/images/work/3.png', href: '/work/3', title: '项目三' },
  { image: '/images/work/4.png', href: '/work/4', title: '项目四' },
  { image: '/images/work/5.png', href: '/work/5', title: '项目五' },
];

const CARD_TRANSFORMS = [
  'rotate(10deg) translate(-170px)',
  'rotate(5deg) translate(-85px)',
  'rotate(-3deg)',
  'rotate(-10deg) translate(85px)',
  'rotate(2deg) translate(170px)',
];

export function Index() {
  return (
    <div className="page index-page">
      <Aurora
        colorStops={['#7CFF67', '#B19EEF', '#5227FF']}
        amplitude={1}
        blend={0.5}
        speed={1}
      />
      <Nav />
      <main className="index-main">
        <header className="index-header">
          <SplitText text="Works." tag="h1" className="index-title" delay={50} duration={1} />
        </header>
        <section className="index-cards">
          <BounceCards
            items={WORKS}
            containerWidth={520}
            containerHeight={420}
            transformStyles={CARD_TRANSFORMS}
            enableHover
          />
        </section>
      </main>
    </div>
  );
}
