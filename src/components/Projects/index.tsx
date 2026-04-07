import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section id="projects" style={{ padding: '80px 0' }}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Meus Projetos</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Clone Disney+</h3>
            <p>Clone front-end da interface do Disney+ com design responsivo, e interações em HTML, CSS e JS.</p>
            <a href="https://clone-disneyplus-eosin-sigma.vercel.app/" target='_blank'><b>Acessar Projeto</b></a>
          </div>
          <div style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Lista de Tarefas</h3>
            <p>Um aplicativo web de lista de tarefas (to-do list) desenvolvido com React e TypeScript. O projeto permite gerenciar atividades do dia a dia de forma prática e intuitiva.</p>
            <a href="https://minhas-tarefas-main.vercel.app/" target='_blank'><b>Acessar Projeto</b></a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects