import React from "react";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/utils/anims";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
// @ts-ignore
import regex from "regex-email";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = useForm();

  async function onSubmit({ email }: any) {
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(({ statusCode }) => {
        if (statusCode === 500) {
          toast.error(
            "An error occured while subscribing to the newsletter... Please try later"
          );
        } else {
          toast.success("You successfully subscribed to the newsletter.");
          reset();
        }
      })
      .catch(() => {
        toast.error(
          "An error occured while subscribing to the newsletter... Please try later"
        );
      });

    return false;
  }

  return (
    <motion.footer
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={CONTAINER_VARIANTS}
      className="m-auto grid18 max-w-8xl md:pt-10"
    >
      <div className="lg:col-start-3 lg:col-end-17 col-span-full border-t border-[#341D92] py-10 lg:py-20 lg:grid lg:grid-cols-14 lg:gap-4 px-2 space-y-6 lg:space-y-0">
        <div className="flex flex-col items-center space-y-2 text-center lg:items-start lg:space-y-4 lg:text-left lg:col-span-3">
          <Link passHref href={"/"}>
            <motion.div variants={ITEM_VARIANTS}>
              <span className="sr-only">Starchain Gazer</span>
              <Image
                src="/assets/images/logo.svg"
                alt="Starchain gazer logo"
                width={144}
                height={44}
              />
            </motion.div>
          </Link>
          <motion.p
            variants={ITEM_VARIANTS}
            className="text-xs font-medium font-poppins md:max-w-sm lg:max-w-none"
          >
            Starchain Gazer is a next-generation Game Studio on a mission to
            unite passionate gamers through powerful experiences on the Web3.
          </motion.p>
        </div>
        <div className="text-center lg:col-start-5 lg:col-span-6 lg:text-left">
          <motion.div variants={ITEM_VARIANTS} className="font-semibold">
            Join the community
          </motion.div>
          <motion.form
            variants={ITEM_VARIANTS}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center w-full pr-2 mt-6 overflow-hidden bg-white rounded-full focus-within:outline outline-purple-200 md:max-w-sm md:m-auto md:mt-2 lg:max-w-none"
          >
            <input
              type="email"
              {...register("email", { required: true, pattern: regex })}
              name="email"
              className="w-full h-12 py-3 pl-6 pr-2 text-purple-900 outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="flex items-center h-8 py-2 pl-4 pr-2 text-xs text-white transition-opacity bg-purple-500 rounded-[60px] hover:opacity-80 disabled:bg-gray-400 disabled:opacity-100 font-bold"
              style={{
                boxShadow:
                  "0px 8px 16px rgba(87, 48, 243, 0.4), inset 0px 0px 2px rgba(255, 255, 255, 0.2)",
              }}
              disabled={isSubmitting || !isValid}
            >
              <span>Subscribe</span>
              <div className="flex items-center justify-center w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                  width={6}
                  height={10}
                >
                  <path
                    fill="#fff"
                    d="M.947 0L6 5 .947 10 0 9.062 4.105 5 0 .937.947 0z"
                  ></path>
                </svg>
              </div>
            </button>
          </motion.form>
        </div>
        <div className="flex flex-col items-center text-center lg:text-left lg:col-start-12 col-span-full lg:items-start">
          <motion.div variants={ITEM_VARIANTS} className="font-semibold">
            Follow us on
          </motion.div>
          <ul className="mt-2 space-y-2 lg:mt-6">
            <motion.li variants={ITEM_VARIANTS}>
              <a
                href="https://twitter.com/starchaingazer"
                target={"_blank"}
                rel="noreferrer"
              >
                Twitter
              </a>
            </motion.li>
            <motion.li variants={ITEM_VARIANTS}>
              <a
                href="https://www.linkedin.com/company/starchain-gazer"
                target={"_blank"}
                rel="noreferrer"
              >
                Linkedin
              </a>
            </motion.li>
            <motion.li variants={ITEM_VARIANTS}>
              <a
                href="https://medium.com/starchaingazer"
                target={"_blank"}
                rel="noreferrer"
              >
                Medium
              </a>
            </motion.li>
          </ul>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-96 -z-20"
          style={{
            background:
              "linear-gradient(0deg, #5730F3 0%, rgba(87, 48, 243, 0.6) 22.4%, rgba(87, 48, 243, 0.4) 40.62%, rgba(87, 48, 243, 0.1) 75.52%, rgba(87, 48, 243, 0) 100%)",
          }}
        ></div>
        <div className="flex flex-col justify-center space-y-4 text-center lg:space-y-0 lg:text-left lg:mt-12 lg:space-x-12 col-span-full lg:flex-row">
          <a href="mailto:contact@starchaingazer.io">Contact us</a>
          <motion.div
            variants={ITEM_VARIANTS}
            className="flex justify-center text-center text-purple-300 col-span-full"
          >
            Made with ❤️ and 🔥 by&nbsp;
            <a
              href="https://www.linkedin.com/in/johanleroch/"
              target={"_blank"}
              rel="noreferrer"
              className="text-white transition-all hover:opacity-80"
            >
              Johan
            </a>
            &nbsp;&&nbsp;
            <a
              href="https://www.linkedin.com/in/dimitrileroch/"
              target={"_blank"}
              rel="noreferrer"
              className="text-white transition-all hover:opacity-80"
            >
              Dimz
            </a>{" "}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
