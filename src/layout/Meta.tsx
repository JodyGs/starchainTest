import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${router.basePath}/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: "/SocialCoverImage.jpg",
              width: 800,
              height: 600,
            },
            {
              url: "/SocialCoverImage-1200x630.jpg",
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
    </>

    // <!-- HTML Meta Tags -->
    // <title>Ray.so - Create beautiful images of your code</title>
    // <meta name="description" content="Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.">

    // <!-- Facebook Meta Tags -->
    // <meta property="og:url" content="https://ray.so/">
    // <meta property="og:type" content="website">
    // <meta property="og:title" content="Ray.so - Create beautiful images of your code">
    // <meta property="og:description" content="Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.">
    // <meta property="og:image" content="https://ray.so/cover-photo.png">

    // <!-- Twitter Meta Tags -->
    // <meta name="twitter:card" content="summary_large_image">
    // <meta property="twitter:domain" content="ray.so">
    // <meta property="twitter:url" content="https://ray.so/">
    // <meta name="twitter:title" content="Ray.so - Create beautiful images of your code">
    // <meta name="twitter:description" content="Turn your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.">
    // <meta name="twitter:image" content="https://ray.so/cover-photo.png">

    // <!-- Meta Tags Generated via https://www.opengraph.xyz -->
  );
};

export { Meta };
