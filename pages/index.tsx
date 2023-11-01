import Header from "@/components/Header";
import { RSSFeed } from "@/components/sections/LastUpdates";
import Footer from "@/components/Footer";
import { Meta } from "@/layout/Meta";
import OurServices from "@/components/sections/OurServices";
import HeroBanner from "@/components/sections/HeroBanner";
import WhoAreWe from "@/components/sections/WhoAreWe";
import DNAStatement from "@/components/sections/DNAStatement";
import JoinOurTeam from "@/components/sections/JoinOurTeam";

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
			<div className="m-auto max-w-10xl">
				<Header />
				{/* <Hero /> */}
				<HeroBanner />
				<OurServices />
				<WhoAreWe />
				<DNAStatement />
				<JoinOurTeam />
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
