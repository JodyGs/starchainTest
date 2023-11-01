import React, { HTMLAttributes, SVGAttributes } from "react";
import { motion, AnimationProps, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

function Joystick(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M53.754 22.767C53.278 18.901 50.04 16 46.204 16H17.796c-3.836 0-7.073 2.901-7.549 6.767l-2.195 17.84c-.433 3.513 1.95 6.743 5.392 7.308 3.2.526 6.292-1.434 7.232-4.585l1.816-6.085a47.76 47.76 0 0019.018 0l1.816 6.085c.94 3.151 4.031 5.11 7.232 4.585 3.441-.565 5.825-3.795 5.392-7.308l-2.195-17.84zm-35.542 2.89c1.312 0 2.377-1.081 2.377-2.414 0-1.334-1.065-2.415-2.377-2.415-1.314 0-2.378 1.081-2.378 2.415 0 1.333 1.064 2.414 2.378 2.414zm5.705 5.794c1.313 0 2.377-1.08 2.377-2.414s-1.064-2.415-2.377-2.415c-1.313 0-2.377 1.081-2.377 2.415 0 1.333 1.064 2.414 2.377 2.414zm19.494-11.588c.525 0 .951.432.951.965v1.932c0 .533.426.965.951.965h1.902c.525 0 .95.433.95.966v1.931a.958.958 0 01-.95.966h-1.902a.958.958 0 00-.95.966v1.931a.958.958 0 01-.952.966H41.51a.958.958 0 01-.95-.966v-1.931a.958.958 0 00-.951-.966h-1.902a.958.958 0 01-.951-.966v-1.93c0-.534.425-.966.95-.966h1.903c.525 0 .95-.433.95-.966v-1.932c0-.533.426-.965.951-.965h1.902z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function Waves({ children, className }: HTMLAttributes<HTMLSpanElement>) {
  const boxShadow = "inset 0px 0px 2px rgba(220, 92, 83, 0.3)";
  const filter = "drop-shadow(0px 0px 16px rgba(220, 92, 83, 0.2))";

  function getAnimationsProps(size: number, delay?: number): AnimationProps {
    return {
      initial: {
        translateX: "-50%",
        translateY: "-50%",
        left: 50,
        top: 40,
        width: size,
        height: size,
      },
      animate: {
        scaleX: [1, 1.25, 1],
        scaleY: [1, 1.25, 1],
        opacity: [0, 1, 0],
      },
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
        delay,
      },
    };
  }
  return (
    <>
      <span className="-translate-y-10 -translate-x-[18px] md:-translate-x-0 h-full relative">
        <motion.span
          className={clsx(className)}
          {...getAnimationsProps(160, 1)}
          style={{
            background:
              "linear-gradient(180deg, rgba(220, 92, 83, 0.5) 0%, rgba(220, 92, 83, 0) 100%)",
            boxShadow,
            filter,
          }}
        />
        <motion.span
          {...getAnimationsProps(120, 0.5)}
          className={clsx(className, "")}
          style={{
            background:
              "linear-gradient(180deg, rgba(220, 92, 83, 0.5) 0%, rgba(220, 92, 83, 0) 100%)",
            boxShadow,
            filter,
          }}
        />
        <motion.span
          className={clsx(className, "")}
          {...getAnimationsProps(88, 0.25)}
          style={{
            background:
              "linear-gradient(180deg, rgba(220, 132, 83, 0.6) 0%, rgba(220, 92, 83, 0) 100%)",
            boxShadow,
            filter,
          }}
        />
        <motion.span
          {...getAnimationsProps(56, 0)}
          className={clsx(className, " -translate-x-1/2 h-14 w-14")}
          style={{
            background:
              "linear-gradient(180deg, #DC8453 0%, rgba(220, 92, 83, 0) 100%)",
            boxShadow,
            filter,
          }}
        />
      </span>
      <span className="ml-2 md:ml-[26px] z-20">{children}</span>
    </>
  );
}

function CTAButton({ children, className, ...props }: HTMLMotionProps<"a">) {
  return (
    <motion.a
      initial={{
        background: "linear-gradient(270deg, #5730F3 0%, #7C3AB4 100%)",
        boxShadow:
          "0px 8px 32px rgba(141, 64, 167, 0.5), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
      }}
      whileHover={{
        background: "linear-gradient(270deg, #F33053 0%, #7C3AB4 100%)",
        boxShadow:
          "0px 8px 40px rgba(243, 48, 83, 0.5), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
      }}
      whileTap={{
        background: "linear-gradient(270deg, #9B243A 0%, #5F2492 100%)",
        boxShadow:
          "0px 8px 24px rgba(243, 48, 83, 0.4), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
      className={clsx(
        className,
        "cursor-pointer inline-block select-none overflow-hidden",
        "rounded-2xl font-poppins font-bold text-sm md:text-lg tracking-[.05em] leading-4 md:leading-6"
      )}
      {...props}
    >
      <div
        className="flex items-center overflow-hidden rounded-2xl max-h-16 md:max-h-20"
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
      >
        <Waves className="absolute flex rounded-full">
          <Joystick className="w-12 h-12" />
        </Waves>
        <span className="z-10 pr-4 ml-2 uppercase md:ml-5 py-7 md:pr-10">
          {children}
        </span>
      </div>
    </motion.a>
  );
}

export default CTAButton;
