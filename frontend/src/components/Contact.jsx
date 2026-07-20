import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Estrutura pronta para conversar com o back-end Flask (ver backend/app.py).
    // Como o back-end aqui é apenas de demonstração, simulamos o envio.
    try {
      // await fetch('/api/contact', { method: 'POST', body: new FormData(e.target) })
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('sent')
    } catch {
      setStatus('idle')
    }
  }

  return (
    <section id="contato" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">// contato</p>
          <h2 className="section-title">Vamos conversar</h2>
          <p className="section-sub">
            Tem um projeto em mente ou uma oportunidade? Me chama por e-mail, GitHub ou pelo
            formulário ao lado.
          </p>
        </div>

        <div className="contact-wrap">
          <div className="contact-links">
            <a className="contact-link" href="mailto:ericksergio138@gmail.com">
              <div>
                <p className="contact-link-label">E-mail</p>
                <p className="contact-link-value">ericksergio138@gmail.com</p>
              </div>
              <span className="arrow" style={{ color: 'var(--blue)' }}>→</span>
            </a>

            <a
              className="contact-link"
              href="https://github.com/Erickfgfg025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p className="contact-link-label">GitHub</p>
                <p className="contact-link-value">github.com/Erickfgfg025</p>
              </div>
              <span className="arrow" style={{ color: 'var(--blue)' }}>→</span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">nome</label>
              <input id="name" name="name" type="text" placeholder="Seu nome" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">e-mail</label>
              <input id="email" name="email" type="email" placeholder="voce@email.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">mensagem</label>
              <textarea id="message" name="message" rows="4" placeholder="Conte um pouco sobre o projeto..." required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sent' ? 'mensagem enviada ✓' : status === 'sending' ? 'enviando...' : 'enviar mensagem'}
            </button>
            <p className="form-note">
              * Formulário de demonstração — pronto para ser conectado à rota <code>/api/contact</code> do back-end Flask.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
