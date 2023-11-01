import React from "react";
import {
  useScroll,
  useMotionValue,
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export function useRefScrollVisibilityRatio(
  ref: React.MutableRefObject<any>,
  { viewportStartOffset = 0 }: { viewportStartOffset?: number } = {}
) {
  const { scrollY } = useScroll();
  const visibilityRatio = useMotionValue(0);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    return scrollY.onChange(() => {
      const { top, height } = ref.current.getBoundingClientRect();
      const start = innerHeight - top - viewportStartOffset * innerHeight;
      console.log({ start });

      if (start > 0 && start <= height) visibilityRatio.set(start / height);
      else if (start > height) visibilityRatio.set(1);
    });
  });

  return { visibilityRatio };
}

type ParallaxProps = {
  children: React.ReactNode;
  offset?: number;
};

export function Parallax({
  children,
  offset = 50,
}: ParallaxProps): JSX.Element {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = React.useState(0);
  const [clientHeight, setClientHeight] = React.useState(0);
  const ref = React.useRef<any>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
