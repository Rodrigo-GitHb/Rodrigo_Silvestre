import styled from 'styled-components'
import { motion } from 'framer-motion'

const SkillsSection = styled.section`
  padding: 80px 0;
  background: isDark ? '#e92525' : '#eeeeee',
  `


const Skills = () => {
  const frontend = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'Sass', 'Vue.js', 'Angular', 'Less']
  const backend = ['Node.js', 'Python', 'C#', 'PostgreSQL', 'Django', 'MySQL']
  const tools = ['Git', 'GitHub', 'VSCode', 'Postman', 'Scrum', 'Agile', 'ServiceNow', 'JSON', 'REST APIs', 'ITIL', 'Cypress','Jquery']

  return (
      <SkillsSection id="skills">
    <section id="skills">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
        >
          Minhas Habilidades
        </motion.h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '2rem',
              border: '1px solid #ddd',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ color: '#007bff', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Frontend
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {frontend.map(tech => (
                <span key={tech} style={{
                  background: '#e3f2fd',
                  color: '#007bff',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              padding: '2rem',
              border: '1px solid #ddd',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ color: '#28a745', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Backend
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {backend.map(tech => (
                <span key={tech} style={{
                  background: '#d4edda',
                  color: '#28a745',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              padding: '2rem',
              border: '1px solid #ddd',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ color: '#dc3545', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Ferramentas
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {tools.map(tech => (
                <span key={tech} style={{
                  background: '#f8d7da',
                  color: '#dc3545',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </SkillsSection>
  )
}

export default Skills