import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Clone Disney+',
    description:
      'Clone front-end com foco em fidelidade visual, responsividade e boa navegação.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://clone-disneyplus-eosin-sigma.vercel.app/',
    accent: 'cinema',
  },
  {
    title: 'Lista de Tarefas',
    description:
      'Aplicação em React e TypeScript para organizar tarefas de forma prática e intuitiva.',
    stack: ['React', 'TypeScript', 'Vite'],
    link: 'https://minhas-tarefas-main.vercel.app/',
    accent: 'produtividade',
  },
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Projetos em destaque</span>
          <h2>Projetos que mostram meu jeito de construir para a web</h2>
          <p>Seleção de trabalhos com foco em interface, performance e experiência.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.12 * index }}
            >
              <span className="project-accent">{project.accent}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer">
                Acessar projeto
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
