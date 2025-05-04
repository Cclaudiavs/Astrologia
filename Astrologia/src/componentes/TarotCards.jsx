import React, { useState } from "react";
import "./TarotCards.css";

const cards = [
    {

        image: "src/img/carta-natal.png.png",
        description: "Análisis profundo de tu carta natal. Conectá con tu esencia.",
    },
    {

        image: "src/img/revolucion-solar.png.png",
        description: "Mirada astrológica del año según tu fecha de cumpleaños.",
    },
    {

        image: "src/img/tarot-evolutivo.png.png",
        description: "Lectura simbólica del presente para acompañar procesos.",
    },
];

function TarotCards() {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="cards-container">
            {cards.map((card, index) => (
                <div key={index} className="tarot-card" onClick={() => setSelectedCard(card)}>
                    <img src={card.image} alt={card.title} />
                    <h3>{card.title}</h3>
                </div>
            ))}

            {selectedCard && (
                <div className="modal" onClick={() => setSelectedCard(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedCard.image} alt={selectedCard.title} />
                        <h2>{selectedCard.title}</h2>
                        <p>{selectedCard.description}</p>
                        <button onClick={() => setSelectedCard(null)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TarotCards;
