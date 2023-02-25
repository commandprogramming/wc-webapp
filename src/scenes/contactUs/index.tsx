import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/usa.jpeg";
import HText from "../../shared/HText";
import { createUser } from "../../utilities/api";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const [status, setStatus] = useState<"" | "pending" | "success" | "failed">(
    ""
  );

  const inputStyles =
    "mt-5 w-full rounded bg-primary-800 px-5 py-3 placeholder-white-text";

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      return;
    }
    console.log(e);
    setStatus("pending");
    try {
      let res = await createUser(e);
      setTimeout(() => {
        reset();
        setStatus("success");
      }, 1000);
    } catch (err) {
      console.error(err);
      setTimeout(() => {
        setStatus("failed");
      }, 1000);
    }
  };

  return (
    <section id="contactus" className="w-full bg-white pt-24 pb-32">
      <div className="mx-auto w-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          {/* Header */}
          <motion.div
            className="text-primary-800 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-primary-500">JOIN NOW</span> TO GET STARTED
            </HText>
            <p className="my-5">
              There is <span className="text-primary-400">NO COST</span> to
              join. All our coaches are volunteers. Athletes pay their own way
              to events and buy their own gear. The only requirement is a USA
              Wrestling Card which can be obtained{" "}
              <a
                href="https://www.usawmembership.com/"
                className="text-primary-500 underline"
              >
                here
              </a>
              . This leaves the level of commitment entirely up to the athlete
              and their family. Let us know who you are and we'll provide
              details on the next practice or event!
            </p>
          </motion.div>

          {/* Form and Image */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                // action="https://formsubmit.co/92b44d8b411dfc59cd6ade77ecbed5b2"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characeters"}
                  </p>
                )}
                <div className="gap-4 md:flex">
                  <div className="w-full">
                    <input
                      className={inputStyles}
                      type="text"
                      placeholder="PHONE"
                      {...register("phone", {
                        required: true,
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-primary-500">
                        {errors.phone.type === "required" &&
                          "This field is required"}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      className={inputStyles}
                      type="text"
                      placeholder="EMAIL"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-primary-500">
                        {errors.email.type === "required" &&
                          "This field is required"}
                        {errors.email.type === "pattern" &&
                          "Invalid email address"}
                      </p>
                    )}
                  </div>
                </div>

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="SCHOOL"
                  {...register("school", {
                    required: true,
                  })}
                />
                {errors.school && (
                  <p className="mt-1 text-primary-500">
                    {errors.school.type === "required" &&
                      "This field is required"}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMERGENCY CONTACT NAME"
                  {...register("ec_name", {
                    required: true,
                  })}
                />
                {errors.ec_name && (
                  <p className="mt-1 text-primary-500">
                    {errors.ec_name.type === "required" &&
                      "This field is required"}
                  </p>
                )}

                <div className="gap-4 md:flex">
                  <div className="w-full">
                    <input
                      className={inputStyles}
                      type="text"
                      placeholder="EMERGENCY CONTACT PHONE"
                      {...register("ec_phone", {
                        required: true,
                      })}
                    />
                    {errors.ec_phone && (
                      <p className="mt-1 text-primary-500">
                        {errors.ec_phone.type === "required" &&
                          "This field is required"}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      className={inputStyles}
                      type="text"
                      placeholder="EMERGENCY CONTACT EMAIL"
                      {...register("ec_email", {
                        required: true,
                      })}
                    />
                    {errors.ec_email && (
                      <p className="mt-1 text-primary-500">
                        {errors.ec_email.type === "required" &&
                          "This field is required"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-primary-400">
                  {status === "pending" && <p>Sending Request...</p>}
                  {status === "failed" && (
                    <p>
                      There was a problem sending the request. Please try again
                      later.
                    </p>
                  )}
                  {status === "success" && (
                    <p>
                      Thank you for your submission! Someone will reach out
                      shortly.
                    </p>
                  )}
                </div>
                <button
                  // type="submit"
                  className="mt-5 rounded-lg bg-secondary-400 px-20 py-3 text-primary-800 transition duration-500 hover:bg-primary-400 hover:text-white"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
            <motion.div
              className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                className="w-full rounded-lg"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
