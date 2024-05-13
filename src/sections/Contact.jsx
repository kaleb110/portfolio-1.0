import { Button } from "../components";
import { contactLists } from "../constants"

const Contact = () => {
  return (
    <section id="contact-us" className="max-container">
      <h3 className="text-3xl font-semibold text-center leading-normal mb-6">
        Contact Me
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="max-w-[300px] flex flex-col gap-4">
          {contactLists.map((item) => (
            <div key={item.name} className="flex gap-4 justify-start">
              <span className="text-lg leading-5">{item.name}</span>
              <p className="text-slate-gray leading-normal max-w-[200px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:max-w-[40%] w-[80%] gap-4">
          <input type="text" placeholder="Your Name" className="input p-2" />
          <input type="email" placeholder="Enter Email" className="input p-2" />
          <textarea
            cols="2"
            rows="3"
            placeholder="Write Something"
            className="w-full rounded-[12px] max-sm:p-5 p-2 outline-none border-none "
          />
          <div>
            <Button
              label="Send Message"
              backgroungColor="bg-white"
              textColor="text-black"
              borderColor="border-gray-400"
              textSize="text-md"
              hover="hover:bg-slate-gray hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
