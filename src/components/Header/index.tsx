const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' },
]

const Header = ({ toggleTheme, isDark }: { toggleTheme: () => void; isDark: boolean }) => {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <a className="brand" href="#home">
          <span className="brand-mark">RS</span>
          <div>
            <strong>Rodrigo Silvestre</strong>
            <span>Full Stack Developer</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {isDark ? 'Claro' : 'Escuro'}
          <span>{isDark ? '☀' : '☾'}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
