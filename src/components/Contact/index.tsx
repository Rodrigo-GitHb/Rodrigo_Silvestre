import { useState, useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(false)
  const [carregando, setCarregando] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCarregando(true)
    setErro(false)

    emailjs.sendForm(
      'service_qzo7u3c',
      'template_ry1vb23',
      form.current!,
      'QXUx7rk5ctSC0P1WX' 
    )
    .then(() => {
      setEnviado(true)
      setCarregando(false)
      form.current?.reset()
      setTimeout(() => setEnviado(false), 5000)
    })
    .catch((error) => {
      console.error('Erro:', error)
      setErro(true)
      setCarregando(false)
      setTimeout(() => setErro(false), 5000)
    })
  }

  return (
    <section id="contact" style={{
      padding: '80px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '2rem'
        }}>
          Contato
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3>Vamos conversar!</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>
                Envie uma mensagem que responderei o mais rápido possível.
              </p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <p><strong>Email:</strong> rodrigo291002@hotmail.com</p>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <p><strong>Localização:</strong> Osasco, São Paulo</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://github.com/Rodrigo-GitHb" target="_blank" style={{
                color: '#333',
                fontSize: '1.5rem'
              }}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rodrigo-silvestre-4565b519b/" target="_blank" style={{
                color: '#0077b5',
                fontSize: '1.5rem'
              }}>
                <FaLinkedin />
              </a>
              <a href="mailto:rodrigo291002@hotmail.com" style={{
                color: '#dc3545',
                fontSize: '1.5rem'
              }}>
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} style={{
            border: '1px solid #dddddd4f',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            {enviado && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '0.75rem',
                borderRadius: '5px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Mensagem enviada com sucesso!
              </div>
            )}

            {erro && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '0.75rem',
                borderRadius: '5px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Erro ao enviar. Tente novamente.
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <textarea
                name="message"
                placeholder="Sua mensagem"
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              style={{
                width: '100%',
                padding: '12px',
                background: carregando ? '#ccc' : '#895699',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: carregando ? 'not-allowed' : 'pointer'
              }}
            >
              {carregando ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact