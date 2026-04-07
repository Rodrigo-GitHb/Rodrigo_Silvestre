import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '80px'
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Olá, eu sou <span style={{ color: '#672c79' }}>Rodrigo Silvestre</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Desenvolvedor FullStack Python, apaixonado por criar soluções inovadoras e eficientes. Bem-vindo ao meu portfólio! <br />
          Com experiencia em ServiceNow, Python, JavaScript, React, Node.js e mais.
        </p>
      </motion.div>
    </section>
  )
}

export default Hero