import { useParams, Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import './Detail.css';

export function Detail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="page detail-page">
      <Nav />
      <main className="detail-main">
        <Link to="/" className="detail-back">
          ← 返回
        </Link>
        <article className="detail-article">
          <header className="detail-header">
            <h1 className="detail-title">作品 {id ?? '—'}</h1>
            <ul className="detail-meta-list">
              <li>类型：web</li>
              <li>角色：独立负责</li>
              <li>年份：2025</li>
            </ul>
          </header>
          <div className="detail-layout">
            <section className="detail-block detail-block-top" />
            <section className="detail-block detail-block-bottom" />
          </div>
        </article>
      </main>
    </div>
  );
}
