import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import InstagramIcon from './icons/InstagramIcon';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Hotel Santa Rita</h1>
        <p className="subtitle">Sua casa fora de casa</p>
      </header>

      <section className="info-box">
        <div className="social-links">
          <h2>📍 Localização</h2>
          <div className="social-icons">
            <WhatsAppIcon />
            <InstagramIcon />
          </div>
        </div>

        <iframe 
          title="Localização Hotel Santa Rita - Mapa principal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.9005822297536!2d-41.328532726663!3d-13.627629973343018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743fcee95d2e059%3A0xe07356b8e0d45b8c!2sHotel%20Santa%20Rita!5e1!3m2!1spt-BR!2sbr!4v1750030396057!5m2!1spt-BR!2sbr" 
          width="400" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        
      </section>

      <section className="info-box">
        <h2>📞 Contato</h2>
        <p><strong>Endereço:</strong> Rua Professora Santa Vieira de Castro, 117, Centro</p>
        <p><strong>Telefone:</strong> (77) 3450-1237</p>
        <p><strong>Email:</strong> contato@hotelsantarita.com.br</p>
      </section>

      <footer>
        <p>&copy; 2025 Hotel Santa Rita — Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
