import { useParams, Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import './Detail.css';
import { workDetailImages } from '../data/workDetailImages';

export function Detail() {
  const { id } = useParams<{ id: string }>();
  const workId = id ?? '1';
  const images = workDetailImages[workId] ?? [];

  return (
    <div className="page detail-page">
      <Nav solidOnScroll />
      <main className="detail-main">
        <Link to="/" className="detail-back">
          ← 返回
        </Link>
        <article className="detail-article">
          <header className="detail-header">
            <h1 className="detail-title">作品 {workId}</h1>
            <ul className="detail-meta-list">
              <li>类型：web</li>
              <li>角色：独立负责</li>
              <li>年份：2025</li>
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
