import moment from "moment";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-800 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="h-12" />
          <p className="my-5">
            Wizardcats Wrestling is a non-profit, USA Wrestling certified club.
          </p>
          <p>© {moment().get("year")} Wizardcats Wrestling</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Follow us on Instagram</p>
          <p className="my-5">Join the Facebook Group</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Head Coach: Jay Baffoni</p>
          <p>(401) 714-9814</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
