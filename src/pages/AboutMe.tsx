const AboutMe = () => {
  return (
    <section className="bg-secondary py-6 flex">
      <div className="w-4/6 px-4">
        <span className="text-4xl font-bold">Vanamuthu V</span>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="px-3 py-1 border border-gray-400 rounded shadow-md bg-primary text-white">
            Software Developer
          </span>
          <span className="px-3 py-1 border border-gray-400 rounded shadow-md bg-primary text-white">
            Backend Enthusiast
          </span>
          <span className="px-3 py-1 border border-gray-400 rounded shadow-md bg-primary text-white">
            Big Data Learner
          </span>
        </div>

        <div className="mt-4 leading-relaxed text-base">
          <p className="mb-6 text-justify">
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

          <p className="mb-0 text-justify">
            I thrive in collaborative environments, enjoy mentoring juniors, and
            constantly seek opportunities to learn cutting-edge technologies.
            Whether experimenting with Go, building scalable Spring Boot
            microservices, or exploring cloud and DevOps tooling, I aim to
            deliver solutions that are robust, efficient, and future-ready. My
            ultimate goal is to contribute to impactful software that helps
            developers, teams, and organizations operate faster and more
            reliably. Outside of coding, I enjoy reading tech blogs, exploring
            new frameworks, and sharing knowledge with the community.
          </p>
        </div>
      </div>
      <div className="w-2/6 px-4 flex flex-col gap-5 items-center justify-center">
        <a href="https://resumetweaker.vercel.app/" className="w-full h-50">
          <iframe
            className="w-full h-50"
            src="https://resumetweaker.vercel.app/"
          />
        </a>
        <a href="https://inkwellify.vercel.app/" className="w-full h-50">
          <iframe
            className="w-full h-50"
            src="https://inkwellify.vercel.app/"
          />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
