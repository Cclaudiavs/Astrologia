
import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    IconButton,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const preguntas = [
    {
        titulo: "✨ ¿QUÉ ES LA ASTROLOGÍA?",
        contenido: `La Astrología no es una ciencia (académica); podríamos considerarla una ciencia de lo oculto. 
  Creo que es mejor pensarla como una disciplina o un lenguaje. Que se nutre de otras disciplinas y lenguajes:
  
  - ASTRONOMÍA: Las fotos y mapas del cielo, con sus astros, planetas y constelaciones.  
  - MATEMÁTICA: Los puntos matemáticos entre los astros, sus distancias y ángulos.  
  - PSICOLOGÍA: Patrones de conducta y comportamiento, traumas y pulsiones.
  
  La Astrología NO TE DEFINE, ni te limita, tampoco tiene sentido justificarse con un signo zodiacal. 
  Puede llegar a describir ciertos aspectos de tu cotidiano y tu vida, que, entendiéndolos, pueden ayudar a conocerte mejor a vos mismx 
  y a realizar un trabajo de autoconocimiento.`,
    },
    {
        titulo: "🔮 ¿CÓMO FUNCIONA EL TAROT?",
        contenido: `El tarot es una herramienta de autoconocimiento/descubrimiento. No es predictivo (no lee el futuro). Pero es a través de las 78 cartas y su simbología y arquetipos (estereotipos), que podemos conocer la energía presente en nosotrxs. Por energía me refiero a decisiones, patrones, pensamientos, emociones y sentimientos, estructuras mentales, etc. Y al reconocer esto podemos tomar mejores decisiones para nuestro camino, de ahí que el tipo de tiradas que realizo son “evolutivas”. Durante las tiradas, no va a salir nada que no estes preparadx para a escuchar, ya que es una especie de conversación con vos mismx, por eso no hay porque tenerle miedo. Las tiradas suelen durar 1h o 1 hora y media y se hacen por videollamada o presencial. Constan de 3 cartas (pasado reciente, presente, posible futuro en base a como manejes tu energía) y el fondo del mazo que abarca la energía general de la tirada. Luego de eso podés preguntar lo que quieras. También podes regalarle una tirada a unx amigx o seres queridos`,
    },
    {
        titulo: "🪐 ¿QUÉ ES UNA CARTA NATAL?",
        contenido: `La carta natal es un mapa del cielo en el momento exacto de tu nacimiento. 
  Muestra la posición de los planetas, el sol y la luna en relación con la Tierra y se interpreta para entender tus energías, fortalezas, 
  aprendizajes y potencial. Es como una huella energética personal. No determina tu vida, pero sí muestra con qué herramientas naciste.`,
    },
];


export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

    const abrirModal = (index) => {
        setPreguntaSeleccionada(index);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setPreguntaSeleccionada(null);
    };

    if (!isSidebarOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                right: 0,
                height: "100%",
                width: "300px",
                backgroundColor: "#f3e8ff",
                padding: "1rem",
                boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
                zIndex: 1000,
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6" fontWeight="bold">LO QUE TENES QUE SABER</Typography>
                <Button variant="contained" onClick={toggleSidebar}>Cerrar</Button>
            </div>

            <div style={{ marginTop: "1rem" }}>
                {preguntas.map((pregunta, index) => (
                    <Button
                        key={index}
                        fullWidth
                        variant="text"
                        onClick={() => abrirModal(index)}
                        style={{ justifyContent: "flex-start", textTransform: "none" }}
                    >
                        {pregunta.titulo}
                    </Button>
                ))}
            </div>

            {/* Modal */}
            <Dialog open={modalAbierto} onClose={cerrarModal} fullWidth maxWidth="sm">
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    {preguntaSeleccionada !== null && preguntas[preguntaSeleccionada].titulo}
                    <IconButton
                        aria-label="close"
                        onClick={cerrarModal}
                        sx={{ position: "absolute", right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography>
                        {preguntaSeleccionada !== null && preguntas[preguntaSeleccionada].contenido}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}




