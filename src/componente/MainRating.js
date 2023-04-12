import React, { useState } from "react";
import EstrellasCalificacion from "./Estrellas";
import FormRating from "./FormRating";
import Mensaje from "./Mensaje";

const RatingView = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = newRating => {
    setRating(newRating);
  };
  return (
    <div className="container">
      <div className="cajaEncuesta shadow p-3 mb-5 bg-body-tertiary rounded p-5">
        <div className="tituloEncuesta">
          <h2>
            ¡Hola! Nos gustaría conocer cómo ha sido tu experiencia con Sysdatec
          </h2>
        </div>
        <div className="parrafoEncuesta p-4">
          <p>
            Estamos en continuo proceso de mejora, por eso, necesitamos tu ayuda
            para saber qué debemos seguir haciendo y que mejorar. Gracias por
            tomarte este tiempo para ayudarnos.
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
            <FormRating pregunta="¡No queremos dejar las cosas así! ¿cuéntanos qué podemos mejorar o qué estamos haciendo mal?" />
          </div>
        )}
        {rating > 6 && rating <= 8 && (
          <div className="calificacionEncuesta py-5">
            <FormRating pregunta="¡Nos encantaría destacar! ¿qué crees que podríamos hacer mejor para sorprenderte?" />
          </div>
        )}
        {rating > 8 && (
          <div className="calificacionEncuesta py-5">
            <FormRating pregunta="¡Nos alegra! ¿podrías contarnos qué es lo que estamos haciendo bien para seguir haciendolo?" />
          </div>
        )}
        <div>
          {rating <= 10 && rating > 0 && (
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                type="button"
                className="btn btn-primary btn-lg botonEncuesta"
                onClick={Mensaje}>
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
