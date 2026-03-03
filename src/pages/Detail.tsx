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
          ← 返回作品集
        </Link>
        <article className="detail-article">
          <header className="detail-header">
            <h1 className="detail-title">作品 {id ?? '—'}</h1>
            <p className="detail-meta">详情页（可根据 Figma 设计稿继续还原）</p>
          </header>
          <div className="detail-content">
            <div className="detail-hero">
              <img
                src={`https://picsum.photos/1200/600?random=${id ?? '0'}`}
                alt="作品封面"
                className="detail-hero-image"
              />
            </div>
            <div className="detail-body">
              <p>
                此处为作品详情正文区域。设计稿链接：Figma node-id=3-15。
                当 Figma 接口权限可用时，可再次拉取设计数据精确还原布局与样式。
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
