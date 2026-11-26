import { useState } from "react";
import { projects as initialProjects } from "./data/projects";
import ProjectCard from "./components/projectCard";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.toLowerCase();
    return (
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.finish.toLowerCase().includes(query)
    );
  });

  return (
    <div className="layout">
      <aside className="sidebar">
        <p className="logo">Tint <span>&</span> Tone</p>
        <nav>
          <a href="#top">Home</a>
          <a href="#projects">Projects</a>
          <a href="#add">Add project</a>
        </nav>
      </aside>

      <main id="top">
        <header className="hero">
          <h1 className="hero-title">
            <span className="tint">Tint</span>
            <span className="amp">&</span>
            <span className="tone">Tone</span>
          </h1>
          <p className="tagline">Custom color, finish, and texture tailored to every space.</p>
          <div className="palette-strip" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
        </header>

        <h2 id="projects" className="section-title">Our work</h2>

        <section className="search-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </section>

        <section className="project-grid" aria-label="Featured projects">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p>No projects match "{searchTerm}".</p>
          )}
        </section>

        <section id="add">
          <div>
            <h2 className="section-title">Add a project</h2>
            <p className="add-note">Finished a new space? Add it here and it shows up in the portfolio straight away.</p>
          </div>
          <ProjectForm onAddProject={handleAddProject} />
        </section>
      </main>
    </div>
  );
}

export default App;