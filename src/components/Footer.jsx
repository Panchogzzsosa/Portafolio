import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; {new Date().getFullYear()} Mi Portafolio</p>
      </div>
      <style jsx>{`
        .footer {
          background: rgba(17, 17, 17, 0.95);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--primary-color), transparent);
        }

        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .copyright {
          color: var(--text-color);
          opacity: 0.8;
          font-size: 0.9rem;
          align-items: center;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: var(--text-color);
          font-size: 1.2rem;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .social-links a:hover {
          color: var(--primary-color);
          opacity: 1;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer