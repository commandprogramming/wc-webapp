import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/logo.svg";
import HomePageGraphic from "../../assets/wizardcat Logo.svg";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-primary-800 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* IMAGE */}
        <div
          className="mt-16 flex basis-3/5 justify-center
              md:z-10"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
        {/* MAIN HEADER */}
        <div className="z-10 md:mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="text-center md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img className="ml-auto" alt="home-page-text" src={HomePageText} />

            <h4 className="mt-8 text-center font-montserrat text-3xl text-secondary-400">
              There is no offseason.
            </h4>

            <p className="mt-8 text-sm">
              A network of New England coaches, practices, and competetions
              providing endless opportunities for improvement. Supplement your
              off-season regimen with a truly unique training experience!
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.OurProcess}`}
            >
              <p>About Us</p>
            </AnchorLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
