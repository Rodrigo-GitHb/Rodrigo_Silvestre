import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces modernas, responsivas e com boa experiência de uso.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass'],
  },
  {
    title: 'Backend',
    description: 'APIs, regras de negócio e integrações com foco em confiabilidade.',
    items: ['Python', 'Node.js', 'Django', 'PostgreSQL', 'MySQL', 'C#'],
  },
  {
    title: 'Ferramentas',
    description: 'Fluxo de trabalho, qualidade e entrega alinhados com times reais.',
    items: ['Git', 'GitHub', 'Postman', 'ServiceNow', 'REST APIs', 'Scrum', 'ITIL'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Habilidades</span>
          <h2>Tecnologias e competências que levo para cada entrega</h2>
          <p>Front-end, back-end e ferramentas para construir soluções completas.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="skill-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.12 * index }}
            >
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
