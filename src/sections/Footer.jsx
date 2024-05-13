import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex justify-between max-sm:flex-col max-sm:items-center gap-4">
      <p className="flex items-center text-white-400 text-lg font-montserrat leading-5">
        designed & developed by kaleb
      </p>
      <p className="flex items-center text-white-400 text-lg font-montserrat leading-5">
        copyright©2024 kal
      </p>

      <div className="flex items-center gap-2">
        {socialMedia.map((link) => (
          <div
            key={link.alt}
            className="flex justify-center items-center bg-white w-9 h-9 rounded-full"
          >
            <img
              src={link.src}
              alt={link.alt}
              width={24}
              height={24}
              className="hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
