import styled from 'styled-components'

const FooterSection = styled.footer`
  text-align: center;
  padding: 2rem 0;
  background: #3c014e;
  color: white;
`

const Footer = () => {
  return (
    <FooterSection>
      <div className="container">
        <p>&copy; 2026 Portfólio Rodrigo Silvestre.</p>
      </div>
    </FooterSection>
  )
}

export default Footer