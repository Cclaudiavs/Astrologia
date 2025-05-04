/*
import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

function Conjunto() {
    const [modalContent, setModalContent] = useState(null);

    const handleOpenModal = (type) => {
        let content = "";
        if (type === "revolucionSolar") content = "✨ Tu año astrológico.";
        else if (type === "cartaNatal") content = "🪐 Carta Natal: Tu mapa de nacimiento.";
        else if (type === "tarotEvolutivo") content = "🔮 Tarot Evolutivo: Guía del presente.";

        setModalContent(content);
    };

    const handleCloseModal = () => setModalContent(null);

    return (
        <div className="services">
            <Button label="Revolución Solar" onClick={() => handleOpenModal("revolucionSolar")} />
            <Button label="Carta Natal" onClick={() => handleOpenModal("cartaNatal")} />
            <Button label="Tarot Evolutivo" onClick={() => handleOpenModal("tarotEvolutivo")} />

            <Modal isOpen={modalContent !== null} onClose={handleCloseModal}>
                <p>{modalContent}</p>
            </Modal>
        </div>
    );
}

export default Conjunto;
*/



