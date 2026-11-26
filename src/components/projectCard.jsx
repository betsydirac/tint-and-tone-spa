function ProjectCard({ project }) {
  const { name, description, category, finish, colors, image } = project;

  return (
    <article className="project-card">
      <div className="card-main">
        {image && (
          <img
            src={image}
            alt={name}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        )}
        <div className="card-text">
          <h3>{name}</h3>
          <p className="card-tag">{category} · {finish}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="swatches">
        {colors.map((color, index) => (
          <span key={index} className="swatch" style={{ backgroundColor: color }} />
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;