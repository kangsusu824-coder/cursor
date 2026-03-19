import { useParams, Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import './Detail.css';
import { workDetailImages } from '../data/workDetailImages';

export function Detail() {
  const { id } = useParams<{ id: string }>();
  const workId = id ?? '1';
  const images = workDetailImages[workId] ?? [];

  const detailMap: Record<
    string,
    {
      title: string;
      type: string;
      role: string;
      year: string;
    }
  > = {
    '1': {
      title: 'BOSS直聘校招平台',
      type: 'web',
      role: '独立负责',
      year: '2025',
    },
    '2': {
      title: '登录页视觉升级',
      type: 'web',
      role: '独立负责',
      year: '2022',
    },
    '3': {
      title: 'AI面试',
      type: '移动端',
      role: '独立负责',
      year: '2024',
    },
    '4': {
      title: '校招官网',
      type: 'web',
      role: '独立负责',
      year: '2025',
    },
    '5': {
      title: '团队提效',
      type: 'web',
      role: '跨团队合作',
      year: '2023',
    },
  };

  const detail = detailMap[workId] ?? detailMap['1'];

  return (
    <div className="page detail-page">
      <Nav solidOnScroll />
      <main className="detail-main">
        <Link to="/" className="detail-back">
          ← 返回
        </Link>
        <article className="detail-article">
          <header className="detail-header">
            <h1 className="detail-title">{detail.title}</h1>
            <ul className="detail-meta-list">
              <li>类型：{detail.type}</li>
              <li>角色：{detail.role}</li>
              <li>年份：{detail.year}</li>
            </ul>
          </header>
          <div className="detail-layout">
            {images.map((src, idx) => (
              <section key={src} className="detail-block">
                <img
                  src={src}
                  alt={`作品图 ${idx + 1}`}
                  className="detail-image"
                  loading="lazy"
                />
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
