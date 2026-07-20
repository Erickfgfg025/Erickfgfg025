// Mapeia nomes de tecnologias (como aparecem na UI) para o arquivo de ícone
// correspondente em /public/icons. Os SVGs são da coleção open-source Devicon
// (MIT License) e ficam servidos localmente — sem dependência de CDN externo.

const ICON_FILES = {
  html: 'html5',
  html5: 'html5',
  css: 'css3',
  css3: 'css3',
  javascript: 'javascript',
  js: 'javascript',
  react: 'react',
  python: 'python',
  flask: 'flask',
  sqlite: 'sqlite',
  sqlite3: 'sqlite',
}

export function iconFor(name) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  const file = ICON_FILES[key]
  return file ? `/icons/${file}.svg` : null
}
