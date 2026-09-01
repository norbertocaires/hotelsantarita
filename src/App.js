import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import InstagramIcon from './icons/InstagramIcon';
import hotelInfo from './hotelInfo';
import './App.css';

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="site-header">
        <span className="brand">{hotelInfo.nome}</span>
        <nav className="site-nav">
          <a href="#localizacao">Localização</a>
          <a href="#contato">Contato</a>
          <a
            className="nav-social"
            href={hotelInfo.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>
          <a
            className="nav-social"
            href={hotelInfo.instagram.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Bem-vindo ao</p>
            <h1>{hotelInfo.nome}</h1>
            <p className="tagline">{hotelInfo.slogan}</p>
            <div className="hero-actions">
              <a
                className="btn btn-whatsapp"
                href={hotelInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={22} color="#fff" />
                Reservar pelo WhatsApp
              </a>
              <a
                className="btn btn-instagram"
                href={hotelInfo.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={22} color="#fff" />
                Ver no Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="localizacao" className="section">
          <h2>Localização</h2>
          <p className="address">{hotelInfo.endereco}</p>
          <div className="map-wrap">
            <iframe
              title={`Localização ${hotelInfo.nome}`}
              src={hotelInfo.mapaEmbedUrl}
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <h2>Fale com a gente</h2>
          <p className="section-lead">
            Reservas e dúvidas pelo WhatsApp ou Instagram — respondemos rápido.
          </p>

          <div className="social-cards">
            <a
              className="social-card whatsapp"
              href={hotelInfo.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={40} color="#fff" />
              <span className="social-card-label">WhatsApp</span>
              <span className="social-card-value">{hotelInfo.whatsapp.exibicao}</span>
            </a>
            <a
              className="social-card instagram"
              href={hotelInfo.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={40} color="#fff" />
              <span className="social-card-label">Instagram</span>
              <span className="social-card-value">{hotelInfo.instagram.exibicao}</span>
            </a>
          </div>

          <div className="contact-grid">
            <p>
              <strong>Telefone</strong>
              <a href={hotelInfo.telefone.link}>{hotelInfo.telefone.exibicao}</a>
            </p>
            <p>
              <strong>Endereço</strong>
              <span>{hotelInfo.endereco}</span>
            </p>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <p>&copy; {year} {hotelInfo.nome} — Todos os direitos reservados</p>
      </footer>

      <a
        className="whatsapp-float"
        href={hotelInfo.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon size={30} color="#fff" />
      </a>
    </div>
  );
}

export default App;
