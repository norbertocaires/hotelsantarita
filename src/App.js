import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import InstagramIcon from './icons/InstagramIcon';
import './App.css';

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="site-header">
        <span className="brand">Hotel Santa Rita</span>
        <nav className="site-nav">
          <a href="#localizacao">Localização</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Bem-vindo ao</p>
            <h1>Hotel Santa Rita</h1>
            <p className="tagline">Sua casa fora de casa.</p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/5577998237355"
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
          <p className="address">
            Rua Professora Santa Vieira de Castro, 117 — Centro
          </p>
          <div className="map-wrap">
            <iframe
              title="Localização Hotel Santa Rita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.935529230977!2d-41.330753699999995!3d-13.6283037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743fcee95d2e059%3A0xe07356b8e0d45b8c!2sHotel%20Santa%20Rita!5e0!3m2!1spt-BR!2sbr!4v1748729534447!5m2!1spt-BR!2sbr"
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
              <a href="tel:+557734501237">(77) 3450-1237</a>
            </p>
            <p>
              <strong>WhatsApp</strong>
              <a
                href="https://wa.me/5577998237355"
                target="_blank"
                rel="noopener noreferrer"
              >
                (77) 99823-7355
              </a>
            </p>
            <p>
              <strong>Endereço</strong>
              <span>Rua Professora Santa Vieira de Castro, 117 — Centro</span>
            </p>
          </div>
          <div className="social">
            <WhatsAppIcon />
            <InstagramIcon />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {year} Hotel Santa Rita — Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
