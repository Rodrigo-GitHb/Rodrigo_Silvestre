const Header = ({ toggleTheme, isDark }: { toggleTheme: () => void; isDark: boolean }) => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: isDark ? '#333' : '#fff',
      color: isDark ? '#672c79' : '#895699',
      padding: '1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h2>Portfólio</h2>
        <button 
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            background: isDark ? '#555' : '#eeeeee',
            border: isDark ? '1px solid #777' : '1px solid #ccc',
            borderRadius: '5px'
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header