import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view for nav highlighting.
 * @param {string[]} ids - section element ids (without leading #)
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0.1, 0.5, 1] },
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
