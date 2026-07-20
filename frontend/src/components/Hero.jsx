export default function Hero() {
  return (
    <section id="home" className="section hero" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div>
          <p className="eyebrow">// disponível para novos projetos</p>
          <h1 className="hero-name">
            Erick Sergio
          </h1>
          <p className="hero-role">
            <span className="accent" style={{ color: 'var(--blue)' }}>&gt;</span> Desenvolvedor Full Stack
          </p>
          <p className="hero-desc">
            Construo aplicações web do front ao back — interfaces rápidas em React e
            APIs sólidas em Python/Flask. Foco em soluções práticas, que resolvem
            problemas reais e geram resultado para quem contrata.
          </p>
          <div className="hero-actions">
            <a
              href="#projetos"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              ver projetos <span className="arrow">→</span>
            </a>
            <a
              href="#contato"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              entrar em contato
            </a>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  )
}

function Terminal() {
  const lines = [
    { delay: '0.1s', content: <><span className="terminal-prompt">$</span> whoami</> },
    { delay: '0.5s', content: <span className="terminal-out"><b>Erick Sergio</b> — Full Stack Developer</span> },
    { delay: '0.9s', content: <span className="terminal-out">São Luís, Maranhão · 23 anos</span> },
    { delay: '1.3s', content: <><span className="terminal-prompt">$</span> stack --list</> },
    { delay: '1.7s', content: <span className="terminal-out">React · Python · Flask · SQLite3</span> },
    { delay: '2.1s', content: <span className="terminal-status">status: online, aceitando projetos<span className="cursor" /></span> },
  ]

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title">erick@portfolio: ~</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <p key={i} className="terminal-line type-line" style={{ animationDelay: line.delay }}>
            {line.content}
          </p>
        ))}
      </div>
    </div>
  )
}
