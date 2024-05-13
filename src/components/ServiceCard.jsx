
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="sm:w-[350px] flex flex-col gap-4 rounded-[20px] shadow-3xl px-6 py-10">
      <img src={imgURL} alt="image" width={48} height={48} />
      <h3 className="text-2xl font-semibold">{label}</h3>
      <p className="lg:max-w-sm text-slate-gray leading-5">{subtext}</p>
    </div>
  );
}

export default ServiceCard