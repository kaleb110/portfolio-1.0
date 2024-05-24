
import { Button } from "../components";

const Hero = () => { 
  return (
    <section id="home" className="flex justify-center min-h-full">
      <div className="flex flex-col justify-center items-start padding-x padding-y">
        <h1 className="font-montserrat text-[72px] max-sm:text-[52px] leading-normal">
          Hello
        </h1>
        <h1 className="font-montserrat text-[82px] max-sm:text-[52px] font-bold leading-normal">
          i am kaleb
        </h1>
        <p className="font-semibold leading-5 text-slate-gray">
          FRONT-END WEB DEVELOPER
        </p>
        <div className="mt-6">
          <Button
            label="Get Info"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero