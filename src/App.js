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
                className="btn btn-primary"
                href={hotelInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar pelo WhatsApp
              </a>
              <a className="btn btn-ghost" href="#localizacao">
                Ver localização
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

        <section id="contato" className="section">
          <h2>Contato</h2>
          <div className="contact-grid">
            <p>
              <strong>Telefone</strong>
              <a href={hotelInfo.telefone.link}>{hotelInfo.telefone.exibicao}</a>
            </p>
            <p>
              <strong>WhatsApp</strong>
              <a
                href={hotelInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hotelInfo.whatsapp.exibicao}
              </a>
            </p>
            <p>
              <strong>Endereço</strong>
              <span>{hotelInfo.endereco}</span>
            </p>
          </div>
          <div className="social">
            <WhatsAppIcon />
            <InstagramIcon />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {year} {hotelInfo.nome} — Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
