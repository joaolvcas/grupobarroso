import { useState } from "react";
import "./styles.css";

export default function Locations() {
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps?q=ROD+BR+316+Q63+5052+Belo+Norte+PI&output=embed");

  return (
    <section className="locations">
      <h2>Nossas Lojas</h2>

      <div className="locations-grid">
        
        {/* MATRIZ */}
        <div className="location-card">
          <h3>Matriz – Picos (PI)</h3>
          <p>ROD BR 316,- Q63 5052<br />Belo Norte – PI</p>

          <button
            onClick={() =>
              setMapUrl(
                "https://www.google.com/maps?q=ROD+BR+316+Q63+5052+Belo+Norte+PI&output=embed"
              )
            }
          >
            Como chegar
          </button>
        </div>

        {/* FILIAL */}
        <div className="location-card">
          <h3>Filial – Teresina (PI)</h3>
          <p>AV. dos Ipês 3795<br />São João – PI</p>

          <button
            onClick={() =>
              setMapUrl(
                "https://www.google.com/maps?q=Av+dos+Ipês+3795+São+João+PI&output=embed"
              )
            }
          >
            Como chegar
          </button>
        </div>
      </div>

      {/* MAPA */}
      {mapUrl && (
        <div className="map-container">
          <iframe
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </section>
  );
}