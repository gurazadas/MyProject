// app/page.js
import { Hero } from "../components/Hero";
import { ProjectsPreview } from "../components/ProjectsPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsPreview />

      {/* Calendly Section */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl mb-6">Book a Call</h2>

        <iframe
          src="https://calendly.com/YOUR-LINK"
          width="100%"
          height="600"
        ></iframe>
      </section>
    </div>
  );
}
