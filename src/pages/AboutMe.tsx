import Me from "../../public/me.webp";

const AboutMe = () => {
  return (
    <section className="bg-secondary py-6 flex flex-col-reverse md:flex-row gap-4 md:gap-0">
      <div className="md:w-4/6 px-4 flex flex-col items-center justify-center md:block">
        <p className="md:text-4xl text-2xl font-bold text-center md:text-start">Vanamuthu V</p>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="md:px-3 px-2 md:py-1 py-0.5 border text-xs md:text-sm flex items-center justify-center border-gray-400 rounded shadow-md bg-primary text-white">
            Software Developer
          </span>
          <span className="md:px-3 px-2 md:py-1 py-0.5 border text-xs md:text-sm flex items-center justify-center border-gray-400 rounded shadow-md bg-primary text-white">
            Backend Enthusiast
          </span>
          <span className="md:px-3 px-2 md:py-1 py-0.5 border text-xs md:text-sm flex items-center justify-center border-gray-400 rounded shadow-md bg-primary text-white">
            Big Data Learner
          </span>
        </div>

        <div className="mt-4 leading-relaxed">
          <p className="mb-6 text-sm md:text-base text-justify">
            I’m an aspiring software engineer deeply passionate about building
            scalable backend systems, real-time data pipelines, and interactive,
            clean dashboards. Currently interning at Airbus, I’m honing my
            skills in PySpark, Kafka, and modern backend frameworks while
            gaining hands-on experience in production environments. Beyond my
            internship, I experiment with side projects that blend performance,
            efficiency, and usability, like Logsy (real-time log monitoring) and
            other event-driven systems, showcasing my ability to handle
            streaming data, alerting mechanisms, and dashboard UI/UX design with
            clean, maintainable code.
          </p>
        </div>
      </div>
      <div className="md:w-2/6 px-4 flex flex-col gap-5 items-center justify-center">
        <img
          src={Me}
          className="md:h-60 h-30 rounded-xl"
          alt="Vanamuthu"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutMe;
