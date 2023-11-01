import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Games from "@/components/sections/Games";
import Team from "@/components/sections/Team";
import LastUpdates, { RSSFeed } from "@/components/sections/LastUpdates";
import Footer from "@/components/Footer";
import { Meta } from "@/layout/Meta";
export default function Home({ rssFeed }: { rssFeed: RSSFeed }) {
  return (
    <>
      <Meta
        title={
          "Starchaingazer.io – Building entertaining games for everyone, everywhere."
        }
        description={
          "Building the most user-centric Web3 game studio in the world, creating powerful gaming experiences."
        }
        canonical={"https://starchaingazer.io/"}
      />
      <div className="bg-container"></div>
      <div className="m-auto max-w-10xl">
        <Header />
        <Hero />
        <About id="about" />
        <Philosophy id="philosophy" />
        <Games id="games" />
        <Team id="team" />
        <LastUpdates rssFeed={rssFeed} id="news" />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/starchaingazer"
  );
  const rssFeed = (await res.json()) as RSSFeed;

  return {
    props: {
      rssFeed,
    },
    revalidate: 86400, // 1 day
  };
}
