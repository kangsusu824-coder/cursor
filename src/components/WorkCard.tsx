import { Link } from 'react-router-dom';
import './WorkCard.css';

export type WorkCardItem = {
  id: string;
  title: string;
  image: string;
  href: string;
};

type WorkCardProps = {
  item: WorkCardItem;
};

/**
 * 作品卡片：图片填充、color-bends 风格悬停（渐变弯曲/色偏），点击跳转详情
 */
export function WorkCard({ item }: WorkCardProps) {
  return (
    <Link to={item.href} className="work-card" data-id={item.id}>
      <div className="work-card-inner">
        <div className="work-card-image-wrap">
          <img src={item.image} alt={item.title} className="work-card-image" />
        </div>
        <div className="work-card-overlay" />
        <span className="work-card-title">{item.title}</span>
      </div>
    </Link>
  );
}
