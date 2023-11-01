import React, { HTMLAttributes } from "react";
import Image from "next/image";
import {
  HTMLMotionProps,
  SVGMotionProps,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { ITEM_VARIANTS } from "@/utils/anims";
import { useRefScrollVisibilityRatio, Parallax } from "@/hooks/scroll";
import Section from "@/components/section";
import Accordion from "@/components/Accordion";
import clsx from "clsx";

type CometProps = {
  pathLength: MotionValue<any>;
  initialRadius?: number;
  strokeWidth?: number;
} & SVGMotionProps<SVGSVGElement>;

function Comet({
  pathLength,
  className,
  initialRadius = 5.305,
  strokeWidth = 2,
  ...props
}: CometProps) {
  const x1 = 150,
    x2 = 6,
    y1 = 0,
    y2 = 584;
  // (Xmax - Xmin) x % + Xmin
  const xCircle = useMotionValue((x2 - x1) * pathLength.get() + x1);
  const yCircle = useMotionValue((y2 - y1) * pathLength.get() + y1);
  const rCircle = useTransform(pathLength, [0, 1], [0, initialRadius]);

  React.useEffect(() => {
    return pathLength.onChange((p) => {
      xCircle.set((x2 - x1) * p + x1);
      yCircle.set((y2 - y1) * p + y1);
    });
  });

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 150 589"
      className={clsx(className, "absolute")}
      {...props}
    >
      <motion.line
        {...{ x1, x2, y1, y2 }}
        stroke="url(#cometGradient)"
        strokeWidth={strokeWidth}
        initial={{ pathLength: 0 }}
        style={{ pathLength }}
      ></motion.line>
      <motion.circle
        cx={xCircle}
        cy={yCircle}
        r={rCircle}
        fill="#fff"
      ></motion.circle>
      <defs>
        <linearGradient
          id="cometGradient"
          x1="7.004"
          x2="149.558"
          y1="584.001"
          y2="1.514"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#E46C5C" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default function PhilosophySection(props: HTMLMotionProps<"section">) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { visibilityRatio } = useRefScrollVisibilityRatio(containerRef, {
    viewportStartOffset: 0.25,
  });
  const c1PathLength = useSpring(visibilityRatio, {
    stiffness: 400,
    damping: 90,
  });
  const c2PathLength = useSpring(visibilityRatio, {
    stiffness: 4000,
    damping: 900,
  });
  const c3PathLength = useSpring(visibilityRatio, {
    stiffness: 40,
    damping: 20,
  });
  const clampedC1PathLength = useTransform(c1PathLength, [0.15, 1], [0, 1]);
  const clampedC3PathLength = useTransform(c3PathLength, [0.3, 1], [0, 1]);
  const c1YRange = useTransform(visibilityRatio, [0, 1], [-50, 0]);
  const c1Y = useSpring(c1YRange, { stiffness: 400, damping: 90 });
  const c3YRange = useTransform(visibilityRatio, [0, 1], [-250, 0]);
  const c3Y = useSpring(c3YRange, { stiffness: 400, damping: 90 });

  return (
    <Section
      {...props}
      className="mobile-bg grid18 max-w-8xl m-auto px-2 md:px-0 py-[71px] lg:py-[120px] space-y-8 md:space-y-0"
    >
      <div className="pl-8 col-span-full md:col-start-2 md:col-span-8">
        <motion.div
          variants={ITEM_VARIANTS}
          className="relative md:mt-24 perspective bg-opacity-20 max-h-[280px] md:max-h-[inherit]"
          ref={containerRef}
        >
          <Comet
            style={{
              left: "34%",
              bottom: "10%",
              width: "30%",
              height: "120%",
              y: c1Y,
            }}
            {...{ pathLength: clampedC1PathLength }}
          />

          <Comet
            style={{
              right: "12%",
              bottom: "-10%",
              width: "30%",
              height: "120%",
            }}
            {...{ pathLength: c2PathLength, initialRadius: 3, strokeWidth: 1 }}
          />
          <Parallax offset={100}>
            <Image
              src={"/assets/images/philosophy/joystick.webp"}
              width={550}
              height={468}
              alt="joystick image"
              className="selector"
            />
          </Parallax>
          <Comet
            style={{
              right: "12%",
              bottom: "-28%",
              width: "40%",
              height: "140%",
              y: c3Y,
            }}
            {...{ pathLength: clampedC3PathLength }}
          />
          <Parallax>
            <Image
              src={"/assets/images/philosophy/cloud.webp"}
              width={566}
              height={324}
              alt="joystick image"
              className="absolute bottom-0 -left-20 selector"
            />
          </Parallax>
        </motion.div>
      </div>

      <div className="z-50 space-y-8 col-span-full md:col-span-7">
        <motion.h2 variants={ITEM_VARIANTS} className="section-title">
          Our Philosophy
        </motion.h2>
        <motion.div
          variants={ITEM_VARIANTS}
          className="text-[21px] leading-8 font-normal"
        >
          <Accordion />
        </motion.div>
      </div>
      <style jsx global>{`
        .perspective {
          perspective: 2000;
        }
        .selector {
          user-drag: none;
          -webkit-user-drag: none;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .bg-container {
          z-index: -1;
          position: absolute;
          height: 1373px;
          max-height: 100vh;
          width: 100vw;
          top: 1300px;
          background-image: url("/assets/images/philosophy/bg.webp");
          background-size: cover;
          background-size: 1388px 687px;
          background-position: right 0;
          background-repeat: no-repeat;
        }

        @screen md {
          .bg-container {
            @apply block;
            top: 1600px;
            left: -43vw;
            height: 1373px;
            max-height: 100vh;
            width: 200vw;
            background-position: 50% center;
            background-size: 2777px 1373px;
            transform: rotate(-30deg);
          }
        }
        @screen 2xl {
          .bg-container {
            left: -20vw;
            width: 150vw;
          }
        }
      `}</style>
    </Section>
  );
}
