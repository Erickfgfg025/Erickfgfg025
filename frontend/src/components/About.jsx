export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <div className="about-text">
          <p className="eyebrow">// sobre</p>
          <h2 className="section-title">Quem escreve o código</h2>
          <p>
            Sou o <strong>Erick Sergio</strong>, desenvolvedor full stack de São Luís, no Maranhão.
            Trabalho na ponta a ponta de um projeto: da interface em React até a API e o banco de
            dados que sustentam ela por trás.
          </p>
          <p>
            Meu foco não é só código bonito — é entregar <strong>soluções práticas</strong>, que
            resolvem um problema real de negócio e ajudam quem contrata a gerar resultado (e renda)
            com tecnologia. Gosto de projetos enxutos, bem documentados e fáceis de manter.
          </p>
          <p>
            Fora do teclado, estudo constantemente novas ferramentas do ecossistema web e gosto de
            transformar ideias simples em produtos que funcionam de verdade.
          </p>
        </div>

        <div className="about-meta">
          <div className="meta-item">
            <p className="meta-label">Localização</p>
            <p className="meta-value">São Luís, MA</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Idade</p>
            <p className="meta-value">23 anos</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Foco</p>
            <p className="meta-value">Full Stack</p>
          </div>
          <div className="meta-item">
            <p className="meta-label">Disponibilidade</p>
            <p className="meta-value" style={{ color: 'var(--green)' }}>Aberto</p>
          </div>
        </div>
      </div>
    </section>
  )
}
