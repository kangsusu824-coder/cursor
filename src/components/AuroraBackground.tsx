import './AuroraBackground.css';

/**
 * 类 Aurora 背景（参考 reactbits.dev/backgrounds/aurora）
 * 使用 CSS 渐变与动画实现，无需 OGL
 */
export function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden>
      <div className="aurora-shape aurora-shape-1" />
      <div className="aurora-shape aurora-shape-2" />
      <div className="aurora-shape aurora-shape-3" />
    </div>
  );
}
