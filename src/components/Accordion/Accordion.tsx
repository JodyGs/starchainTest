import {
  Root,
  Item,
  Header,
  Content,
  Trigger,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import { HiChevronRight } from "react-icons/hi2";

const MOCKS = [
  {
    id: "1",
    title: "Gameplay First",
    description: `Games built by industry veterans combining art, game mechanics, and themes - generating compelling loops and long-term engagement`,
  },
  {
    id: "2",
    title: "Asset Value Inflation",
    description: `Crafting & playing assets are the only way to increase their value within well-balanced games. Game time, skill & experience have value!`,
  },
  {
    id: "3",
    title: "Real Ownership",
    description: `Thanks to blockchain technologies, our gamers own every in-game asset. Farm, mint, craft, lend & trade collectibles as one's heart desires`,
  },
  {
    id: "4",
    title: "Sustainable Economic",
    description: `Our games' economies are designed around three core principles: multi-level experience, equal opportunity, and incentivized engagement`,
  },
  {
    id: "5",
    title: "Free-to-Play",
    description: `Authentic free-to-play games with no entry barriers to experience game features. Everyone is welcome to play, enjoy and have fun`,
  },
  {
    id: "6",
    title: "Community-centric",
    description: `The community is just as important as the game itself. We keep in sync with the market thanks to periodic interviews & playtests with gamers`,
  },
];

type AccordionProps = {
  className?: string;
};

export default function CustomAccordion({ className }: AccordionProps) {
  return (
    <Root type="single" className={clsx("space-y-2 md:space-y-2", className)}>
      {MOCKS.map(({ id, title, description }) => (
        <Item
          key={id}
          value={id}
          className="state-open:text-purple-900 group rounded-lg border border-solid border-[#9a83f8] border-opacity-20 bg-[#231361] bg-opacity-60 state-open:border-transparent ease-in-out state-open:bg-gradient-to-bl state-open:from-[#BCACFA] state-open:to-white hover:bg-gradient-to-bl hover:from-[#BCACFA] hover:to-white hover:text-purple-900 overflow-hidden"
          style={{
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          <Header>
            <Trigger className="flex items-center justify-between w-full px-3 py-4 text-left text-lg md:text-[21px] md:px-6 md:py-5 font-bold filter-blur">
              <span>{title}</span>
              <span className="min-w-[50px] flex justify-end">
                <HiChevronRight className="w-6 h-6 transition-all md:h-8 md:w-8 group-state-open:rotate-90" />
              </span>
            </Trigger>
          </Header>
          <Content className="accordion-content">
            <div className="px-3 pb-4 text-base md:px-6 md:pb-8">
              {description}
            </div>
          </Content>
        </Item>
      ))}
    </Root>
  );
}
