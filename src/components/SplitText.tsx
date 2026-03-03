import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const COLORS = ['#FFFFFF'];

type SplitTextProps = {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
};

/** 按字符分割的 “Works” 文字动画，配色 #5EE790、#5EE7C1、#089291 循环 */
export function SplitText({
  text = 'Works.',
  className = '',
  delay = 50,
  duration = 1,
  tag: Tag = 'h1',
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const chars = el.querySelectorAll('.char');
    if (chars.length === 0) return;
    gsap.set(chars, { opacity: 0, y: 40 });
    const tl = gsap.timeline();
    chars.forEach((char, i) => {
      tl.to(char, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power3.out',
        delay: i * (delay / 1000),
      }, i * (delay / 1000));
    });
    return () => { tl.kill(); };
  }, [text, delay, duration]);

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="char"
            style={{ color: COLORS[0], display: 'inline-block' }}
          >
            {char}
          </span>
        ))}
      </Tag>
    </div>
  );
}
