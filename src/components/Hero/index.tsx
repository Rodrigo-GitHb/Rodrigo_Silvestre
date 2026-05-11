import { motion } from 'framer-motion'
import heroImage from '../../assets/hero.png'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Disponível para projetos e times de produto</span>
          <h1>
            Transformo ideias em produtos web elegantes, rápidos e prontos para crescer.
          </h1>
          <p className="hero-lead">
            Desenvolvedor Full Stack com foco em Python, React, automações e experiências
            digitais claras, rápidas e bem resolvidas.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Ver projetos
            </a>
            <a className="secondary-button" href="#contact">
              Falar comigo
            </a>
          </div>

          <div className="hero-highlights" aria-label="Destaques profissionais">
            <div>
              <strong>Full Stack</strong>
              <span>React, TypeScript, Node.js e Python</span>
            </div>
            <div>
              <strong>ServiceNow</strong>
              <span>Fluxos, integrações e automações</span>
            </div>
            <div>
              <strong>Entrega</strong>
              <span>Interfaces úteis, rápidas e responsivas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="portrait-card">
            <div className="portrait-glow" />
            <img src={heroImage} alt="Ilustração de destaque do portfólio" />

            <div className="floating-note note-top">
              <span>3+</span>
              <p>Anos evoluindo com código, produto e melhoria contínua.</p>
            </div>

            <div className="floating-note note-bottom">
              <span>Stack versátil</span>
              <p>Front-end, back-end, APIs e automações.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
