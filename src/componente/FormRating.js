const FormRating = props => {
  const pregunta = props.pregunta;
  const comentario = props.comentario;
  const setComentario = props.setComentario;
  return (
    <>
      <div>
        <h4>{pregunta}</h4>
      </div>
      <div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={comentario}
          onChange={e => setComentario(e.target.value)}
          rows="3"></textarea>
      </div>
    </>
  );
};

export default FormRating;
