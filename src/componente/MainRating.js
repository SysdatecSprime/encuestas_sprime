import React, { useState } from "react";
import EstrellasCalificacion from "./Estrellas";
import FormRating from "./FormRating";
import Mensaje from "./Mensaje";
import imagen from "../imagen/Sysdatec.png";
import { useLocation } from "react-router-dom";

const RatingView = () => {
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState("");
  const location = useLocation();
  const empresa = location.pathname.slice(1).toLowerCase();

  const handleRatingChange = newRating => {
    setRating(newRating);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <img src={imagen} className="sysdatecImg" />
      </div>
      <div className="cajaEncuesta shadow p-3 mb-5 bg-body-tertiary rounded p-5">
        <div className="tituloEncuesta">
          <h2>
            ¡Hola! Nos gustaría conocer cómo ha sido tu experiencia con
            nosotros.
          </h2>
        </div>
        <div className="parrafoEncuesta p-4">
          <p>
            Estamos en continuo proceso de mejora, por eso, necesitamos de tu
            colaboración para saber qué debemos seguir haciendo y que mejorar.
            Gracias por tomarte este tiempo para ayudarnos.
          </p>
        </div>
        <div className="parrafoEncuesta mb-5">
          <p>
            Califica del 1 al 10, según tu experiencia ¿qué tan probable es que
            recomiendes Sysdatec a un colega o amigo?
          </p>
        </div>
        <div className="probabilidad d-flex justify-content-between p-3">
          <label>Poco Probable</label>
          <label>Muy Probable</label>
        </div>
        <div className="estrellasEncuesta d-flex justify-content-center">
          <EstrellasCalificacion onChange={handleRatingChange} />
        </div>
        {rating <= 6 && rating > 0 && (
          <div className="calificacionEncuesta py-5">
            <FormRating
              pregunta="¡No queremos dejar las cosas así! ¿cuéntanos qué podemos mejorar o qué estamos haciendo mal?"
              comentario={comentario}
              setComentario={setComentario}
            />
          </div>
        )}
        {rating > 6 && rating <= 8 && (
          <div className="calificacionEncuesta py-5">
            <FormRating
              pregunta="¡Nos encantaría destacar! ¿qué crees que podríamos hacer mejor para sorprenderte?"
              comentario={comentario}
              setComentario={setComentario}
            />
          </div>
        )}
        {rating > 8 && (
          <div className="calificacionEncuesta py-5">
            <FormRating
              pregunta="¡Nos alegra! ¿podrías contarnos qué es lo que estamos haciendo bien para seguir haciendolo?"
              comentario={comentario}
              setComentario={setComentario}
            />
          </div>
        )}
        <div>
          {rating <= 10 && rating > 0 && (
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                className="btn btn-primary btn-lg botonEncuesta"
                onClick={() => Mensaje(rating, comentario, empresa)}>
                Enviar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingView;
