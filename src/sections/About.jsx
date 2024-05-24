import { portfolio_about } from "../assets/images";
import { Button } from "../components";

const About = () => {
  return (
    <section id="about-us" className="max-container">
      <div className="p-6 flex max-lg:flex-col flex-row justify-center gap-8 items-center w-full">
        <div>
          <img
            src={portfolio_about}
            alt="profile-image"
            width={320}
            height={320}
          />
        </div>
        <div>
          <h3 className="font-montserrat text-3xl font-bold mb-4">About Me</h3>
          <p className="font-montserrat text-lg lg:max-w-lg text-slate-gray leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="mt-6">
            <Button label="Download Cv" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About