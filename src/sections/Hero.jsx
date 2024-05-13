
import { Button } from "../components";

const Hero = () => { 
  return (
    <section id="home" className="flex justify-center min-h-screen">
      <div className="flex flex-col justify-start items-start padding-x padding-y">
        <h1 className="font-montserrat text-[72px] max-sm:text-[52px] leading-normal">
          Hello
        </h1>
        <h1 className="font-montserrat text-[82px] max-sm:text-[52px] font-bold leading-normal">
          i am kaleb
        </h1>
        <p className="font-semibold leading-5 text-slate-gray">
          FRONT-END WEB DEVELOPER
        </p>
        <div>
          <Button
            label="Get Info"
            backgroungColor="bg-white"
            textColor="text-black"
            borderColor="border-gray-400"
            textSize="text-md"
            hover="hover:bg-slate-gray hover:text-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero