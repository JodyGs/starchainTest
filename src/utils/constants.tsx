// import { TwitterIcon, LinkedInIcon, MediumIcon } from "@/svgs";

export enum PageUri {
  ABOUT = "#about",
  PHILOSOPHY = "#philosophy",
  GAMES = "#games",
  TEAM = "#team",
  NEWS = "#news",
  HOME = "/",
}

export const NAVIGATION = {
  sitemap: [
    { name: "about", href: "#about" },
    { name: "philosophy", href: "#philosophy" },
    { name: "games", href: "#games" },
    { name: "team", href: "#team" },
    { name: "news", href: "#news" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/",
      // icon: TwitterIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company//",
      // icon: LinkedInIcon,
    },
    {
      name: "Medium",
      href: "https://medium.com/",
      // icon: MediumIcon,
    },
  ],
};
