import ActionButton from "../../shared/ActionButton";
import HText from "../../shared/HText";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import ProblemGraphic from "../../assets/problem.svg";
import SolutionGraphic from "../../assets/solution.svg";
import { ReactNode } from "react";

const MotionIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurProcess = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourprocess" className="bg-white py-20 text-primary-900">
      <div className="mx-auto w-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurProcess)}
        >
          {/* HEADER */}
          <MotionIn>
            <HText>OUR PROCESS: TRAIN SMARTER.</HText>
            <p className="my-5 text-sm">
              All mat time is not equal. Coaches and athletes can both improve
              by breaking the traditional practice-competition cycle and
              simplifying goals into manageable steps.
            </p>
          </MotionIn>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 flex flex-col items-center justify-between md:mt-28 md:flex-row-reverse md:gap-20">
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <MotionIn>
                <HText>
                  THE <span className="text-gray-500">PROBLEM</span>
                </HText>
              </MotionIn>

              {/* DESCRIPT */}
              <MotionIn>
                <p className="my-5">
                  Training during the scholastic season has a number of
                  limitations and hurdles, and is rarely enough to create
                  successful athletes.
                </p>
              </MotionIn>
              <MotionIn>
                <h6 className="font-montserrat text-xl">01 PRACTICE</h6>
                <p className="mb-5">
                  Practice time is valuable, but it's impossible for a coaching
                  staff in-season to address each wrestler's shortcomings in
                  their last competetion during the limited time between
                  competitions.
                </p>
              </MotionIn>
              <MotionIn>
                <h6 className="font-montserrat text-xl">02 COMPETE</h6>
                <p className="mb-5">
                  Without the necessary time to address weaknesses in practice,
                  those weaknesses appear again, frustrating coaches and
                  athletes alike.
                </p>
              </MotionIn>
            </div>

            {/* GRAPHIC */}
            <img
              className="mx-auto"
              alt="problem-graphic"
              src={ProblemGraphic}
            />
          </div>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <MotionIn>
                <HText>
                  THE <span className="text-primary-500">SOLUTION</span>
                </HText>
              </MotionIn>

              {/* DESCRIPT */}
              <MotionIn>
                <p className="my-5">
                  The time between school seasons is a perfect opportunity for a
                  different strategy -- one where athlete and coach each take a
                  more active role in the learning process.
                </p>
                <h6 className="font-montserrat text-xl">01 COMPETE</h6>
                <p className="mb-5">
                  Get to an event. Weaknesses are revealed in competetion, and
                  for the Wizardcats staff, it all starts here. The coach will
                  <span className="text-primary-500"> identify </span> a single
                  adjustment in real-time. Film the match for review.
                </p>
              </MotionIn>
              <MotionIn>
                <h6 className="font-montserrat text-xl">02 DEBRIEF</h6>
                <p className="mb-5">
                  In the time between matches, the coach and athlete meet in a
                  distraction-free area. The coach reviews the film so the
                  athlete can
                  <span className="text-primary-500"> recognize</span> the
                  mistake and write it down.
                </p>
              </MotionIn>
              <MotionIn>
                <h6 className="font-montserrat text-xl">03 DRILL</h6>
                <p className="mb-5">
                  During the next practice the athlete drills the adjustment
                  step-by-step up to match speed until they
                  <span className="text-primary-500"> own</span> the technique.
                  In the words of{" "}
                  <a
                    href="https://purlerwrestling.com/coach-bios/"
                    className="text-primary-500 underline"
                  >
                    Nick Purler
                  </a>
                  , "Don't do it until you get it right. Do it until you can't
                  get it wrong."
                </p>
              </MotionIn>
              <MotionIn>
                <h6 className="font-montserrat text-xl">04 GAME PLAN</h6>
                <p className="mb-5">
                  Leading up to match time, the coach and athlete strategize to
                  work the corrections into the match plan. The coach and
                  athlete
                  <span className="text-primary-500"> prioritize </span>{" "}
                  learning by valuing the situation over the score.
                </p>
              </MotionIn>
              {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                The time between school seasons is a perfect opportunity for a
                more
                <span className="text-primary-500"> active</span> strategy.
              </p>
              <h6 className="font-montserrat text-xl">01 COMPETE</h6>
              <p className="mb-5">
                Get to an event. Weaknesses are revealed in competetion, and for
                the Wizardcats staff, it all starts here. The athlete's
                responsibility is to{" "}
                <span className="text-primary-500"> film </span> their matches.
                The coach's responsibility is to identify a{" "}
                <span className="text-primary-500"> single </span> adjustment
                most evidenced by the match in real-time.
              </p>
              <h6 className="font-montserrat text-xl">02 DEBRIEF</h6>
              <p className="mb-5">
                In the time between matches, the coach and athlete meet in a
                distraction-free area. The coach's responsibility is to
                <span className="text-primary-500"> review </span> the match on
                film and point out the selected issue. The athlete's
                responsibility is to{" "}
                <span className="text-primary-500"> recognize</span> the mistake
                and write it down.
              </p>
              <h6 className="font-montserrat text-xl">03 DRILL</h6>
              <p className="mb-5">
                During the next practice the athlete shows the coach their notes
                from the debrief. The coach's responsibility is to
                <span className="text-primary-500"> supervise </span> a
                technique and drilling session from step-by-step to match speed.
                The athlete's responsibility is to
                <span className="text-primary-500"> own</span> the technique. In
                the words of{" "}
                <a
                  href="https://purlerwrestling.com/coach-bios/"
                  className="text-primary-500 underline"
                >
                  Nick Purler
                </a>
                , "Don't do it until you get it right. Do it until you can't get
                it wrong."
              </p>
              <h6 className="font-montserrat text-xl">04 GAME PLAN</h6>
              <p className="mb-5">
                Leading up to match time, the coach and athlete strategize to
                work the adjustmens into the match plan. The coach's job is to
                <span className="text-primary-500"> prioritize </span> learning
                by steering the wrestler into positions where they can execute
                what they learned from drilling. The athlete's responsibility is
                to
                <span className="text-primary-500"> humble</span> themselves by
                listening to the coach and committing to valuing the situation
                over the score.
              </p>
            </motion.div> */}
            </div>

            <img
              className="mx-auto"
              alt="solution-graphic"
              src={SolutionGraphic}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
