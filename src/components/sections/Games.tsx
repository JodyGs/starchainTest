import React from "react";
import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";
import planet1 from "../../../public/assets/images/games/planet1.webp";
import planet2 from "../../../public/assets/images/games/planet2.webp";
import ship from "../../../public/assets/images/games/ship.webp";

import { ITEM_VARIANTS } from "@/utils/anims";
import Section from "@/components/section/Section";
import { Parallax } from "@/hooks/scroll";
import { HiChevronRight } from "react-icons/hi2";

export default function AboutSection(props: HTMLMotionProps<"section">) {
  return (
    <Section
      {...props}
      className="px-2 m-auto md:grid md:grid-cols-18 md:col-start-1 md:col-end-18 md:gap-x-4 max-w-8xl md:px-0 lg:py-40 md:space-y-12"
    >
      <div className="w-full text-center col-span-full">
        <motion.h2
          variants={ITEM_VARIANTS}
          className="text-center col-span-full section-title"
        >
          Our Games
        </motion.h2>
      </div>
      <div className="col-span-full md:col-start-3 col-end-17">
        <div className="relative">
          <motion.div
            variants={ITEM_VARIANTS}
            className="absolute w-[25%] h-[43%] -left-[12.5%] -top-[21.5%]"
          >
            <Parallax offset={30}>
              <Image
                src={planet2}
                alt="planet two"
                className="hidden md:block"
              />
            </Parallax>
          </motion.div>

          <motion.div
            variants={ITEM_VARIANTS}
            className="absolute w-[29%] h-[49%] -right-[18.3%] -bottom-[24.5%]"
          >
            <Parallax>
              <Image
                src={planet1}
                alt="planet one"
                className="hidden md:block"
              />
            </Parallax>
          </motion.div>

          <motion.div className="relative" variants={ITEM_VARIANTS}>
            <div className="hidden md:block">
              <Image
                width={1104}
                height={640}
                sizes="100vw"
                className="rounded-lg"
                src="/assets/images/games/time-breachers-game.webp"
                blurDataURL="/assets/images/games/time-breachers-game-placeholder.webp"
                placeholder="blur"
                alt="time breachers video cover"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(17, 10, 49, 0.9) 0%, rgba(17, 10, 49, 0.5) 34.33%, rgba(17, 10, 49, 0) 50%)",
                  filter:
                    "drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.25)) drop-shadow(0px 40px 80px rgba(43, 32, 90, 0.8))",
                  width: "100%",
                  height: "auto",
                }}
              />
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    "linear-gradient(270deg, rgb(17, 10, 49) 0%, rgba(17, 10, 49, 0) 55% 100%)",
                }}
              ></div>
            </div>
            <div className="inset-0 z-50 md:grid md:gap-4 md:absolute md:grid-cols-14">
              <div className="py-10 pr-2 md:pl-10 md:col-end-7 md:col-span-full">
                <div className="relative flex flex-col items-center w-full h-full justify-evenly">
                  <div
                    className="top-0 left-0 px-2 py-1 text-sm text-black rounded md:absolute"
                    style={{
                      background:
                        "linear-gradient(96.12deg, #D7A14B 1.51%, #FFD796 49.49%, #D7A14B 98.49%)",
                    }}
                  >
                    #GAME 1
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 336 148"
                    className="px-10 max-w-[75vw] md:max-w-none my-6 md:my-0"
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M167.882 18.367c.265 1.575.525 3.145.785 4.715v.001l.001.002v.005c.26 1.567.519 3.134.784 4.707.02 0 .034-.005.049-.01s.029-.01.049-.01c.608-.118 3.964-.709 7.378-.098l.019.003v.035c.037.018.038 0 .004-.035.062.01.127.023.193.036.073.015.147.03.215.04.01 0 .025.004.04.01a.291.291 0 00.039.01c4.493 1.16 7.221 3.405 7.221 3.405l2.001-11.635.118 13.21c1.57 1.535 3.885 4.193 4.768 5.216.333.434.667.886.981 1.34.844 1.259 1.511 2.302 2.041 3.228a36.696 36.696 0 012.06 4.232l.392.984c.059.138.118.276.157.414l.785.04c.107.011.214.016.356.022.092.004.199.009.331.017V.59a846.37 846.37 0 00-17.306-.473l-.079-.098-4.003 24.725-1.96-12.107-.003-.019-.033-.207-.006-.032L173.258.02c-5.768-.04-11.557-.02-17.325.059v35.258s6.985-6.143 11.93-7.147c.019-3.265.019-6.55.019-9.815v-.008zm-19.641 25.828l2.57-3.386V.177a936.07 936.07 0 00-12.754.374v47.66l7.692-.236 2.492-3.78zm-33.396 5.178l12.734-.729V8.957l8.183-.374V.61c-9.693.374-30.257 1.654-39.93 2.382l19.013 6.693v39.688zm102.052-8.19c3.983.237 7.966.512 11.949.807l-3.198 7.993c-1.959-.148-3.741-.288-5.431-.421-5.501-.434-10.013-.789-16.408-1.075V.827c8.359.374 27.569 1.575 35.908 2.205l-23.114 6.417v10.966h-.04c3.787.236 7.594.492 11.4.767l-2.276 7.796-9.124-.61h-.019l.039.02v12.776l.314.02zm-27.313 75.654a7.198 7.198 0 01-2.198.61c-.824.079-1.629-.019-2.374-.334-1.02-.433-1.825-1.221-2.414-2.284a8.236 8.236 0 01-.765-1.89 59.413 59.413 0 01-5.239 8.327 655.617 655.617 0 00-8.653-.059c-8.869 0-18.385.178-28.765.729.628 1.378 1.766 2.795 2.629 3.76a913.787 913.787 0 0126.156-.374c1.766 0 3.492 0 5.239.019-6.515 6.891-14.069 10.434-21.27 9.076-4.474-.847-8.32-3.485-11.361-7.442a31.929 31.929 0 01-.883-1.22 32.427 32.427 0 01-2.512-4.41 32.57 32.57 0 01-1.078-2.513v.004l.003.009.004.015a.154.154 0 01.012.044l-.02.925c.196.766.391 1.512.587 2.258l.002.006c-21.525 1.241-46.798 4.095-77.878 10.198 0 0 30.57-4.882 79.075-6.457 3.689 10.236 9.791 17.284 17.64 18.918 10.379 2.165 21.348-5.611 29.589-19.253 55.961 1.043 92.045 6.792 92.045 6.792-37.026-7.264-65.811-9.922-89.828-10.749a87.092 87.092 0 002.257-4.705zm-43.227-63.842l-.078-.59v-.139c4.611-7.953 10.164-13.977 16.011-17.264 5.043-3.071 10.262-4.292 15.246-3.248 7.064 1.338 12.519 6.949 16.09 15.276-.962-.492-1.943-.768-2.885-.768-.431.02-.863.06-1.275.177-1.668.453-2.983 1.792-3.866 3.682a11.84 11.84 0 00-.647 1.771c-3.316-5.866-7.947-9.803-13.617-10.866-8.575-1.615-17.601 3.681-24.802 13.268l-.177-1.3zM328.073 87.8v-8.032c0-4.114-1.06-7.638-3.159-10.591-2.1-2.933-4.631-4.646-7.594-5.138-6.377-1.063-12.754-2.048-19.131-3.012-2.963-.433-5.494.492-7.613 2.756-2.119 2.283-3.159 5.473-3.159 9.587v13.426c0 5.295 1.884 9.587 5.631 12.894a2026.194 2026.194 0 0116.973 15.375c.569.571.844 1.24.844 2.028v12.914c0 .63-.157 1.122-.471 1.457-.314.354-.667.492-1.06.413-.539-.089-1.079-.172-1.619-.256-.539-.084-1.079-.167-1.618-.256-.393-.059-.746-.315-1.04-.748-.314-.433-.471-.984-.471-1.614v-16.596c-2.786-.433-5.573-.846-8.379-1.259l-14.5-2.441c-.724-3.751-1.474-7.581-2.026-10.397l-.003-.013-.001-.01c-.269-1.372-.491-2.502-.638-3.262 2.629-1.536 3.943-4.331 3.943-8.406V69.59c0-3.051-.784-5.65-2.354-7.776-1.57-2.126-3.454-3.327-5.671-3.602a857.845 857.845 0 00-22.31-2.48l-6.475-.611a886.096 886.096 0 00-22.859-1.772v61.795c8.418.531 13.206.866 21.604 1.654l3.63-10.001a642.809 642.809 0 00-12.401-1.063V89.158l2.225.17c1.836.138 2.551.192 5.447.46l3.826-9.98a755.152 755.152 0 00-11.498-.985V64.61c1.364.11 2.278.18 3.039.237h.005c1.545.119 2.457.188 5.216.452l4.121-7.225 4.081 5.02v54.452c4.278.413 8.555.866 12.833 1.358V94.71l.189.022h.001c.6.071 1.188.14 1.792.194 1.491 8.229 2.982 16.478 4.454 24.706 4.081.492 8.143 1.024 12.224 1.575-.131-.664-.356-1.823-.642-3.299l-.003-.015-.005-.03-.01-.048-.005-.025c-.44-2.273-1.022-5.271-1.631-8.375l5.553 7.737v11.477c0 4.114 1.06 7.599 3.159 10.473 2.1 2.874 4.65 4.528 7.613 4.961 6.377.945 12.754 1.949 19.131 3.012 2.963.492 5.494-.374 7.594-2.579 2.099-2.205 3.159-5.374 3.159-9.489V118.55c0-5.217-1.884-9.548-5.631-12.974a3122.013 3122.013 0 00-17.071-15.591c-.51-.551-.765-1.22-.765-2.028v-9.941c0-.63.157-1.122.47-1.457.314-.334.668-.492 1.04-.433 1.08.157 2.159.335 3.238.512.392.059.746.315 1.06.748.314.453.471.984.471 1.614v13.525c4.277.689 8.574 1.397 12.852 2.126l.059.02c1.241.204 2.469.424 3.706.645l.005.001h.001l.565.101v-.02l7.986 1.36-7.927-8.958zm-57.845-4.37c0 .413-.117.767-.353 1.063-.235.295-.49.433-.804.393l-1.786-.206-.799-.093-.403-.047-.583-.067V67.445l.479.055.737.085.542.063h.004l.023.003c.594.07 1.187.138 1.786.207.294.04.569.216.804.531.236.315.353.729.353 1.182V83.43zm11.636 25.847l.001.005c.015.046.018.08.019.122v.029a.525.525 0 00-.012-.092c-.004-.024-.008-.046-.008-.064zM65.909 95.123v23.899a701.695 701.695 0 00-12.656 1.634V65.023l-7.28-4.567 11.734-1.476a765.72 765.72 0 0117.6-2.087c2.178-.236 4.062.512 5.612 2.244 1.55 1.733 2.335 4.114 2.335 7.146v16.832c0 4.016-1.295 7.087-3.904 9.213.94 4.584 1.873 9.167 2.808 13.754.743 3.648 1.487 7.298 2.234 10.952a841.58 841.58 0 00-12.106 1.26c-1.472-7.816-2.944-15.611-4.415-23.407-.667.079-1.315.157-1.962.236zm215.975 14.312zm0 0v-.002zM69.441 67.74l-3.532.413v16.852l3.532-.414c.294-.04.549-.216.784-.57.236-.335.354-.71.354-1.123V69.197c0-.473-.118-.847-.353-1.103-.236-.275-.491-.393-.785-.354zm43.618 36.793c-4.081.256-8.182.551-12.263.866V89.001a49.165 49.165 0 003.635-.404c1-.143 1.944-.279 3.939-.403l3.787-10.217a725.04 725.04 0 00-11.381.807V64.728c1.346-.104 2.248-.178 3-.24h.001c1.527-.125 2.434-.199 5.181-.37 0 0 5.298-10.414 4.082-10.473-8.32.531-16.64 1.18-24.959 1.948v61.086c2.73-.252 5.094-.491 7.33-.717 4.58-.464 8.632-.874 14.234-1.231l3.414-10.198zm1.786 10.099c2.845-20.533 5.69-41.046 8.535-61.559a1045.66 1045.66 0 0117.581-.728c.176 1.288 2.595 18.65 4.96 35.625l.015.103.074.533.01.072.25 1.795 3.168 22.741c-4.121.099-8.261.217-12.401.355-.196-1.692-.397-3.384-.598-5.075v-.004a1463.13 1463.13 0 01-.599-5.079c-2.453.079-4.925.177-7.397.295-.187 1.712-.378 3.419-.569 5.126v.003c-.192 1.708-.383 3.415-.569 5.128-4.16.196-8.3.413-12.46.669zm16.056-31.983l-1.261 10.88c1.687-.08 3.374-.138 5.061-.197h.001c-.844-7.225-1.687-14.43-2.531-21.635l-1.266 10.919-.004.033zm62.254-30.363l-5.867-.413v61.184l1.982.099 1.825.078 2.982.138 6.063.296V87.623h4.631v26.93c4.22.174 8.422.405 12.641.637h.002l.229.013V53.428a695.99 695.99 0 00-12.872-.65v24.549h-4.631V52.778l-1.118-.078-3.493-.236-2.374-.178zm-10.203 14.627v4.41l-10.773 7.815V67.07c0-2.736-2.217-4.96-4.944-4.96-2.728 0-4.945 2.224-4.945 4.96v29.55c0 2.736 2.217 4.96 4.945 4.96 2.727 0 4.944-2.224 4.944-4.96v-5.946l10.773-7.993v15.1c0 8.937-7.241 16.201-16.149 16.201-8.908 0-16.149-7.264-16.149-16.201V66.913c0-8.938 7.241-16.202 16.149-16.202 8.908 0 16.149 7.264 16.149 16.202zM48.014 86.698c0 5.374-1.727 9.508-5.14 12.461 3.767 1.693 5.768 5.512 6.043 11.438v16.221c0 3.996-1.02 7.382-3.061 10.158-2.06 2.776-4.513 4.37-7.378 4.803a1116.668 1116.668 0 00-22.8 3.623L1.079 148l8.477-10.886V74.039L0 67.72l9.556-1.732v-.06c.883-.147 1.77-.3 2.659-.452.887-.153 1.775-.305 2.658-.453l.334-.059c7.476-1.26 14.951-2.46 22.447-3.583 2.884-.413 5.317.473 7.338 2.678 2.021 2.204 3.022 5.315 3.022 9.291v13.348zm-18.13-10.65c-1.256.196-2.492.393-3.728.59v18.643c1.255-.197 2.492-.394 3.728-.59.451-.08.804-.316 1.079-.749.275-.413.412-.945.412-1.555V77.898c0-.61-.137-1.102-.412-1.437a1.053 1.053 0 00-1.08-.413zm1.942 52.719c.294-.433.452-.965.452-1.575v-17.383c0-.61-.157-1.083-.452-1.417-.314-.335-.647-.473-1.04-.414-1.55.237-3.08.473-4.63.729v21.517c.775-.118 1.545-.242 2.315-.365s1.54-.246 2.315-.364c.393-.059.746-.295 1.04-.728z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="text-base font-normal font-poppins tracking-[0.15em] mb-4 md:mb-0">
                    COMING SOON
                  </div>
                  <div className="relative flex items-center justify-center w-full mb-4 md:hidden">
                    <div className="block w-full md:hidden">
                      <Image
                        width={304}
                        height={170}
                        sizes="100vw"
                        className="rounded-lg"
                        src="/assets/images/games/time-breachers-game-LD.webp"
                        blurDataURL="/assets/images/games/time-breachers-game-placeholder.webp"
                        placeholder="blur"
                        alt="time breachers video cover"
                        style={{
                          background:
                            "linear-gradient(270deg, rgba(17, 10, 49, 0.9) 0%, rgba(17, 10, 49, 0.5) 34.33%, rgba(17, 10, 49, 0) 50%)",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(270deg, rgb(17, 10, 49) 0%, rgba(17, 10, 49, 0) 55% 100%)",
                        }}
                      ></div>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=jT_V_R_shHg"
                      rel="noreferrer"
                      target={"_blank"}
                      className="bg-[#5730F3] w-14 h-14 xl:w-28 xl:h-28 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity absolute md:static"
                      style={{
                        boxShadow:
                          "0px 8px 16px rgba(87, 48, 243, 0.4), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="40"
                        fill="none"
                        className="ml-1 scale-50 xl:scale-100 xl:ml-2"
                      >
                        <path
                          fill="#fff"
                          d="M32.535 20.862a1 1 0 000-1.724L1.507.886A1 1 0 000 1.748v36.504a1 1 0 001.507.861l31.028-18.251z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex flex-col w-full md:max-w-[198px] space-y-2">
                    {/* <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="http://google.com"
                      className="bg-[#5730F3] uppercase w-full rounded-[32px] font-poppins font-bold text-sm flex justify-center items-center h-10 hover:opacity-80 transition-opacity"
                    >
                      Learn more
                    </a> */}
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      href="https://docsend.com/view/itysi9yx2dxr6b9e"
                      className="bg-white text-[#5730F3] uppercase w-full rounded-[32px] font-poppins font-bold text-sm flex justify-center items-center h-10 hover:opacity-80 transition-opacity"
                    >
                      Read whitepaper
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center col-start-7 col-end-9 col-span-full">
                <a
                  href="https://www.youtube.com/watch?v=jT_V_R_shHg"
                  rel="noreferrer"
                  target={"_blank"}
                  className="bg-[#5730F3] w-14 h-14 xl:w-28 xl:h-28 rounded-full items-center justify-center hover:opacity-90 transition-opacity hidden md:flex"
                  style={{
                    boxShadow:
                      "0px 8px 16px rgba(87, 48, 243, 0.4), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="40"
                    fill="none"
                    className="ml-1 scale-50 xl:scale-100 xl:ml-2"
                  >
                    <path
                      fill="#fff"
                      d="M32.535 20.862a1 1 0 000-1.724L1.507.886A1 1 0 000 1.748v36.504a1 1 0 001.507.861l31.028-18.251z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col justify-around col-start-9 py-10 space-y-8 md:text-right md:items-end md:pr-10 xl:text-base md:text-xs col-span-full">
                <div className="flex flex-col md:items-end xl:space-y-8 lg:space-y-6 md:space-y-3 md:text-right xl:max-w-[256px] space-y-8">
                  <div>
                    <div className="uppercase font-medium text-[#9A83F8] tracking-widest text-sm">
                      Lore
                    </div>
                    <div>
                      Explore and rule an exciting uchronic multiverse and all
                      its Alternate Earths.
                    </div>
                  </div>
                  <div>
                    <div className="uppercase font-medium text-[#9A83F8] tracking-widest text-sm">
                      Game Genre
                    </div>
                    <div>MMO Action RPG Target: Casual to Mid-Core Gamers</div>
                  </div>
                  <div>
                    <div className="uppercase font-medium text-[#9A83F8] tracking-widest text-sm">
                      Chain
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 92 24"
                      className="mt-2 max-w-[92px] max-h-[24px] w-full h-full"
                    >
                      <g fill="#fff" clipPath="url(#a)">
                        <path d="M46.39 5v14a.203.203 0 01-.2.2h-1.457a1.997 1.997 0 01-1.68-.915L36.445 8.072l.227 5.101V19a.203.203 0 01-.2.2h-1.925a.203.203 0 01-.2-.2V5a.203.203 0 01.2-.2h1.448a2.005 2.005 0 011.68.912l6.608 10.197-.206-5.082V5a.2.2 0 01.2-.2h1.926a.203.203 0 01.186.2zm19.677 14.2h-2.038a.199.199 0 01-.196-.173.2.2 0 01.01-.094L69.24 4.992a.304.304 0 01.293-.192h2.552a.304.304 0 01.28.192l5.382 13.941a.2.2 0 01-.187.267h-2.037a.203.203 0 01-.19-.128l-4.35-11.467a.2.2 0 00-.375 0l-4.35 11.467a.203.203 0 01-.191.128zm25.823-.323l-4.047-5.17c2.285-.432 3.62-1.974 3.62-4.339 0-2.717-1.767-4.568-4.895-4.568h-5.645a.299.299 0 00-.3.299 1.92 1.92 0 001.92 1.92h3.79c1.89 0 2.797.968 2.797 2.365 0 1.397-.885 2.4-2.797 2.4h-5.41a.301.301 0 00-.3.301v6.934a.2.2 0 00.2.2h1.926a.203.203 0 00.2-.2v-5.187h2.222l3.512 4.584a2.003 2.003 0 001.6.784h1.46a.2.2 0 00.148-.323zM59.979 4.8h-8.934a.267.267 0 00-.266.267 1.955 1.955 0 001.954 1.954h7.246a.197.197 0 00.2-.2v-1.82a.2.2 0 00-.2-.201zm0 12.179h-6.667a.203.203 0 01-.2-.2v-3.611a.2.2 0 01.2-.2h6.163a.2.2 0 00.2-.2v-1.835a.2.2 0 00-.2-.2h-8.398a.301.301 0 00-.298.302v7.853a.298.298 0 00.298.301h8.902a.2.2 0 00.2-.2v-1.821a.197.197 0 00-.2-.19zM19.997 1.219L14.98 8.667a.533.533 0 00.8.701l4.938-4.267a.197.197 0 01.331.15v13.41a.2.2 0 01-.352.128L5.763.923A2.557 2.557 0 003.81 0h-.52A2.557 2.557 0 00.733 2.557v18.886A2.557 2.557 0 005.47 22.78l5.019-7.448a.533.533 0 00-.8-.701L4.75 18.899a.197.197 0 01-.33-.15V5.352a.2.2 0 01.352-.128l14.933 17.867a2.558 2.558 0 001.955.906h.533a2.558 2.558 0 002.557-2.557V2.557A2.556 2.556 0 0022.176 0a2.557 2.557 0 00-2.179 1.219z"></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M.8 0H92v24H.8z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full md:items-end h-11">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.notion.so/starchaingazer/Time-Breachers-Public-Roadmap-1e66c31b3d484416ab25a00294dbc070"
                    className="flex justify-center w-full p-4 font-bold text-purple-300 border-b border-purple-300 md:justify-end md:border-transparent xl:p-4 lg:p-3 whitespace-nowrap md:p-2"
                  >
                    <div className="flex items-center">
                      <span>See the product roadmap</span>{" "}
                      <HiChevronRight className="w-6 h-4 stroke-1" />
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/timebreachers"
                    target={"_blank"}
                    rel="noreferrer"
                    className="flex justify-center w-full p-4 font-bold text-purple-300 border-b border-purple-300 md:justify-end md:border-transparent xl:p-4 lg:p-3 whitespace-nowrap md:p-2"
                  >
                    <div className="flex items-center">
                      <span>Follow the advanture</span>{" "}
                      <HiChevronRight className="w-6 h-4 stroke-1" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -right-44 top-1/2 w-[152px] bg-[#0a0230] xl:flex flex-col items-center rounded-lg px-4 pt-2 pb-4 select-non hidden">
              <HiChevronRight className="w-4 h-10 text-purple-300 stroke-1" />
              <div className="text-xs text-center">MANY MORE TO COME SOON</div>
            </div>
          </motion.div>

          <motion.div
            variants={ITEM_VARIANTS}
            className="absolute w-[34.6%] h-[44.5%] -left-[14.3%] -bottom-[18.3%]"
          >
            <Parallax offset={100}>
              <Image src={ship} alt="ship" className="hidden md:block" />
            </Parallax>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
