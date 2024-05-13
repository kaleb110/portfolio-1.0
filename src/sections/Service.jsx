import { services } from "../constants";
import { ServiceCard } from "../components";

const Service = () => {
  return (
    <section className="max-container">
      <h3 className="text-3xl font-bold leading-normal mb-8">Services</h3>
      <div className="max-container flex justify-center flex-wrap gap-10">
        {services.map((item) => (
          <ServiceCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Service