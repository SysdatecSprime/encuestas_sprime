import Swal from "sweetalert2";
function Mensaje() {
  Swal.fire({
    title: "Gracias por tu ayuda.",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}
export default Mensaje;
