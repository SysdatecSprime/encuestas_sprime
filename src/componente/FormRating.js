const FormRating = props => {
  const pregunta = props.pregunta;
  return (
    <>
      <div>
        <h4>{pregunta}</h4>
      </div>
      <div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"></textarea>
      </div>
    </>
  );
};

export default FormRating;
