import Button from "./Button";

const ProjectCard = ({ imgURL, label }) => {
  return (
    <div>
      <div className="sm:w-[250px] flex flex-col gap-4 w-full rounded-[20px] border border-black px-6 py-12">
        <div>
          <img src={imgURL} alt="image" className="rounded-lg" />
        </div>
        <h3 className="text-2xl font-semibold text-center">{label}</h3>
        {/* <p className="lg:max-w-sm text-slate-gray leading-5">{subtext}</p> */}
        <div className="flex justify-center items-center gap-4 px-4">
            <Button label="GitHub" />
          
          <Button label="Demo" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
