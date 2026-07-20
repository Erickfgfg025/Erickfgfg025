import projects from '../data/projects.js'
import TechTag from './TechTag.jsx'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">// projetos</p>
          <h2 className="section-title">O que já construí</h2>
          <p className="section-sub">
            Uma seleção de projetos que mostram como penso a solução de front ao back.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-top">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <TechTag name={t} key={t} />
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ alignSelf: 'flex-start' }}
                >
                  ver projeto <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
