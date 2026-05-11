import { useRef, useState } from 'react'
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

    emailjs
      .sendForm('service_qzo7u3c', 'template_ry1vb23', form.current!, 'QXUx7rk5ctSC0P1WX')
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
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contato</span>
          <h2>Vamos conversar?</h2>
          <p>
            Se você procura alguém para desenvolver ou evoluir um produto digital,
            estou por aqui.
          </p>

          <div className="contact-points">
            <div>
              <strong>Email</strong>
              <span>rodrigo291002@hotmail.com</span>
            </div>
            <div>
              <strong>Endereço</strong>
              <span>Osasco, São Paulo</span>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/Rodrigo-GitHb"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-silvestre-4565b519b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:rodrigo291002@hotmail.com" aria-label="Enviar e-mail">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          {enviado && <div className="form-alert success">Mensagem enviada com sucesso!</div>}

          {erro && <div className="form-alert error">Erro ao enviar. Tente novamente.</div>}

          <div className="field">
            <input type="text" name="name" placeholder="Seu nome" required />
          </div>

          <div className="field">
            <input type="email" name="email" placeholder="Seu email" required />
          </div>

          <div className="field">
            <textarea name="message" placeholder="Sua mensagem" required rows={5} />
          </div>

          <button type="submit" disabled={carregando} className="primary-button form-submit">
            {carregando ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
