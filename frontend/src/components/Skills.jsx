import TechTag from './TechTag.jsx'

const CATEGORIES = [
  {
    path: '/frontend',
    title: 'Front-end',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    path: '/backend',
    title: 'Back-end',
    items: ['Python', 'Flask'],
  },
  {
    path: '/database',
    title: 'Banco de dados',
    items: ['SQLite3'],
  },
]

export default function Skills() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">// tecnologias</p>
          <h2 className="section-title">Stack de trabalho</h2>
          <p className="section-sub">
            Ferramentas que uso no dia a dia para sair da ideia até um produto rodando em produção.
          </p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat) => (
            <div className="skill-card" key={cat.path}>
              <p className="skill-path">{cat.path}</p>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.items.map((item) => (
                  <TechTag name={item} key={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
