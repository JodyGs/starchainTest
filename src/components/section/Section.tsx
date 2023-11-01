import React from 'react';

import classNames from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useIntersectionObserver } from 'usehooks-ts';

import { CONTAINER_VARIANTS } from '@/utils/anims';

export type SectionProps = {
  anchorLinkClicked?: string | undefined;
  onVisible?: () => void;
};

export default function Section({
  className,
  children,
  id,
  anchorLinkClicked,
  onVisible,
  ...props
}: HTMLMotionProps<'section'> & SectionProps) {
  const [isAnimating, setIsAnimating] = React.useState<boolean>(true);
  const ref = React.useRef<HTMLElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });
  const isVisible = !!entry?.isIntersecting;

  React.useEffect(() => {
    if (
      id &&
      !isAnimating &&
      isVisible &&
      (anchorLinkClicked === id || anchorLinkClicked === undefined)
    ) {
      if (onVisible) onVisible();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimating, isVisible, anchorLinkClicked, id]);

  return (
    <motion.section
      className={classNames('', className)}
      {...props}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={CONTAINER_VARIANTS}
      onAnimationComplete={() => {
        setIsAnimating(false);
      }}
      ref={ref}
      id={id}
    >
      {children}
    </motion.section>
  );
}
