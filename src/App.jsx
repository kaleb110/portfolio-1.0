import { Nav } from "./components";
import { Hero, Contact, About, Footer, Service, Project } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r">
      <Hero />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding py-5">
        <Service />
      </section>
      <section className="padding-x py-10">
        <Project />
      </section>
      <section className="bg-pale-blue padding">
        <Contact />
      </section>
      <section className=" bg-black padding-x pb-8 pt-6">
       <Footer />
      </section>
    </main>
  );
};

export default App;
