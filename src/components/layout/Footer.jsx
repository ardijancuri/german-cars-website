import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'XPEL-PPF / Lackschutzfolie', path: '/lackschutz' },
    { name: 'Car-Wrapping', path: '/car-wrapping' },
    { name: 'Detailing', path: '/detailing' },
    { name: 'Scheibentönung', path: '/scheibentoenung' },
  ],
  company: [
    { name: 'Showroom', path: '/showroom' },
    { name: 'Wir', path: '/wir' },
    { name: 'Kontakt', path: '/kontakt' },
  ],
  legal: [
    { name: 'Datenschutz', path: '/datenschutz' },
    { name: 'Impressum', path: '/impressum' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/autopflege_aria' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#161616',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '64px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '48px',
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {/* Logo & Description */}
          <div style={{ gridColumn: '1', position: 'relative' }} className="lg:col-span-1">
            <Link to="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <img
                src="/images/autopflege-logo.svg"
                alt="Autopflege Aria"
                style={{ height: '56px', width: 'auto' }}
              />
            </Link>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Protecting & Customising Epic Cars. Schutz, Optik, Performance - alles aus einer Hand.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255, 255, 255, 0.6)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E54B1E'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderColor = '#E54B1E'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  aria-label={social.name}
                >
                  <social.icon style={{ height: '18px', width: '18px' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                display: 'inline-block',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              <h4
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Services
              </h4>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #E54B1E, #CC0D3F)',
                  marginTop: '8px',
                }}
              />
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.services.map((link) => (
                <li key={link.path} style={{ marginBottom: '14px' }}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#E54B1E'
                      e.target.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.6)'
                      e.target.style.transform = 'translateX(0)'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                display: 'inline-block',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              <h4
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Unternehmen
              </h4>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #E54B1E, #CC0D3F)',
                  marginTop: '8px',
                }}
              />
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.path} style={{ marginBottom: '14px' }}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#E54B1E'
                      e.target.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.6)'
                      e.target.style.transform = 'translateX(0)'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div
              style={{
                display: 'inline-block',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              <h4
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Kontakt
              </h4>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #E54B1E, #CC0D3F)',
                  marginTop: '8px',
                }}
              />
            </div>
            <address
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '15px',
                fontStyle: 'normal',
                lineHeight: 1.7,
              }}
            >
              <p style={{ marginBottom: '6px', fontWeight: 500 }}>Epic Cars GmbH</p>
              <p style={{ marginBottom: '6px' }}>Musterstraße 123</p>
              <p style={{ marginBottom: '20px' }}>12345 Musterstadt</p>
              <p style={{ marginBottom: '10px' }}>
                <a
                  href="tel:+491234567890"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#E54B1E'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                  +49 123 456 7890
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@epic-cars.de"
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#E54B1E'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                  info@epic-cars.de
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '48px',
            paddingTop: '32px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>
            &copy; {new Date().getFullYear()} Epic Cars. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: 'rgba(255, 255, 255, 0.4)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#E54B1E'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
