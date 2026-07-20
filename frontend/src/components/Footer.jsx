export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Erick Sergio. Todos os direitos reservados.</p>
        <p>
          <a href="mailto:ericksergio138@gmail.com">ericksergio138@gmail.com</a>
          {' · '}
          <a href="https://github.com/Erickfgfg025" target="_blank" rel="noopener noreferrer">
            github.com/Erickfgfg025
          </a>
        </p>
      </div>
    </footer>
  )
}
