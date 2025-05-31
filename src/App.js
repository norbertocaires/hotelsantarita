import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Hotel Santa Rita</h1>
        <p className="subtitle">Sua casa fora de casa</p>
      </header>

      <section className="info-box">
        <h2>📍 Localização</h2>
        <iframe
          title="Localização Hotel Santa Rita"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.935529230977!2d-41.330753699999995!3d-13.6283037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743fcee95d2e059%3A0xe07356b8e0d45b8c!2sHotel%20Santa%20Rita!5e0!3m2!1spt-BR!2sbr!4v1748729534447!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="info-box">
        <h2>📞 Contato</h2>
        <p><strong>Endereço:</strong> Rua Professora Santa Vieira de Castro, 117, Centro</p>
        <p><strong>Telefone:</strong> (77) 3450-1237</p>
        <p><strong>Email:</strong> contato@hotelsantarita.com.br</p>
      </section>

  <footer>
    <p>&copy; 2025 Hotel Santa Rita — Todos os direitos reservados</p>
    <div className="social-links">
      <a
        href="https://wa.me/5577998237355"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg
          fill="#25D366"
          height="32"
          viewBox="0 0 512 512"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256.064 0C114.836 0 .165 114.673.165 255.897c0 45.1 11.792 89.193 34.266 127.688L0 512l131.732-34.26c37.38 20.515 79.73 31.296 124.33 31.296h.003c141.225 0 255.9-114.673 255.9-256.1C511.965 114.672 397.29 0 256.064 0zm0 472.927c-39.582 0-78.307-10.417-112.427-30.136l-7.987-4.652-78.37 20.376 20.91-76.503-5.167-8.073C49.017 338.897 38.77 297.7 38.77 255.897 38.77 137.56 137.724 38.61 256.064 38.61c118.34 0 217.296 98.95 217.296 217.286 0 118.34-98.95 217.03-217.296 217.03zm121.06-161.07c-6.653-3.324-39.347-19.484-45.452-21.732-6.106-2.25-10.56-3.324-14.987 3.324-4.425 6.65-17.2 21.732-21.097 26.16-3.898 4.425-7.796 5-14.448 1.675-6.652-3.324-28.093-10.356-53.518-33.008-19.78-17.662-33.08-39.43-36.97-46.08-3.898-6.65-.43-10.225 2.897-13.548 2.98-2.976 6.65-7.796 9.973-11.7 3.326-3.9 4.428-6.65 6.654-11.075 2.228-4.425 1.114-8.325-.556-11.65-1.675-3.324-14.99-36.237-20.51-49.452-5.425-13.214-10.96-11.398-14.987-11.62-3.898-.23-8.325-.28-12.75-.28-4.43 0-11.65 1.676-17.75 8.325-6.106 6.65-23.13 22.65-23.13 55.225 0 32.572 23.714 64.075 27.038 68.5 3.324 4.426 46.39 70.6 112.462 98.953 15.712 6.772 27.98 10.82 37.486 13.85 15.745 5.007 30.08 4.29 41.424 2.597 12.62-1.885 39.345-16.057 44.886-31.542 5.542-15.49 5.542-28.747 3.898-31.542-1.674-2.796-6.102-4.425-12.755-7.75z" />
        </svg>
      </a>
      <a
        href="https://instagram.com/hotel.santa.rita"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg
          fill="#E1306C"
          width="32"
          height="32"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.8-32.2-71.8-71.8s32.2-71.8 71.8-71.8 71.8 32.2 71.8 71.8-32.2 71.8-71.8 71.8zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-54.4-44.3-98.5-98.7-98.6H100.1C45.7 62.9 1.6 107 1.5 161.4v186.2c.1 54.4 44.3 98.5 98.7 98.6h247.8c54.4-.1 98.5-44.3 98.6-98.7V161.5zM398.8 348c0 31.5-25.6 57.1-57.1 57.1H106.3c-31.5 0-57.1-25.6-57.1-57.1V164c0-31.5 25.6-57.1 57.1-57.1h235.3c31.5 0 57.1 25.6 57.1 57.1v184z" />
        </svg>
      </a>
    </div>
  </footer>
    </div>
  );
}

export default App;
