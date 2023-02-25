import HText from "../../shared/HText";
import { EventType, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import moment from "moment";
import Event from "./Event";
import bgs1 from "../../assets/bgs1.jpg";

const lastEvent: EventType = {
  name: "2022 BGS Brawl 1",
  date: new Date(
    moment().set("year", 2022).set("month", 2).set("date", 12).valueOf()
  ),
  status: "past",
  address: "51 S Curtisville Rd. Concord, NH",
  link: "Not Available",
  img_url: bgs1,
  results: {},
};

const nextEvent: EventType = {
  name: "2023 BGS Brawl 1",
  date: new Date(
    moment().set("year", 2023).set("month", 2).set("date", 11).valueOf()
  ),
  status: "upcoming",
  address: "51 S Curtisville Rd. Concord, NH",
  link: "Not Available",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.855728931588!2d-71.51652038384779!3d43.233484387485944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e26ba4dfe3010d%3A0x11db51ef7fe426e4!2sBroken%20Ground%20School!5e0!3m2!1sen!2sus!4v1677189597174!5m2!1sen!2sus",
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Events = ({ setSelectedPage }: Props) => {
  return (
    <section id="events" className="bg-primary-800 py-20 text-white">
      <div className="mx-auto w-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <div className="md: items-center justify-between gap-16 md:flex ">
            <motion.div
              className="w-full rounded-md border-2 border-secondary-400 p-8 md:my-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>LATEST RESULT</HText>
              <Event event={lastEvent} />
            </motion.div>

            <motion.div
              className="mt-16 w-full rounded-md border-2 border-secondary-400 p-8 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>NEXT EVENT</HText>
              <Event event={nextEvent} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
