import { useState } from 'react'

const LINKS = [
  { href: '#sobre', label: 'sobre' },
  { href: '#tecnologias', label: 'tecnologias' },
  { href: '#projetos', label: 'projetos' },
  { href: '#contato', label: 'contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span>&gt;_</span> erick.sergio
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn-outline nav-cta" onClick={(e) => handleNavClick(e, '#contato')}>
          falar com erick
        </a>

        <button
          className={`menu-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
