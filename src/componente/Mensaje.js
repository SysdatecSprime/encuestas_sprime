import Swal from "sweetalert2";
import { api } from "../utils/urls";
async function Mensaje(rating, descripcion, empresa, setLoading) {
  setLoading(true);
  await fetch(api + "/api/Encuestas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idRegistro: 0,
      empresa: empresa,
      unoASeis: rating <= 6 && rating > 0,
      sieteAOcho: rating > 6 && rating <= 8,
      nueveADiez: rating > 8,
      descripcion: descripcion,
      fechaRegistro: new Date().toISOString(),
    }),
  });
  setLoading(false);

  Swal.fire({
    title: "Gracias por tu ayuda.",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  }).then(() => {
    console.log("click");
    window.location.href = "about:blank";
  });
}
export default Mensaje;
