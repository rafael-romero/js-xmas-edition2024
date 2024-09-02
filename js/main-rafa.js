const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const provincia = $form.provincia.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

function validarNombre(nombre) {
  if (nombre.length <= 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  return "";
}

function validarProvincia(provincia) {
  if (provincia.length === 0) return "Debe elegir una provincia";
  return "";
}

function validarDescripcionRegalo(descripcionRegalo){
  if(descripcionRegalo.length === 0 ){
    return "El campo descripcion debe contener al menos 1 caracter"
  }
  if(descripcionRegalo.length >= 100){
    return "El campo debe tener menos de 100 caracteres"
  }
  return "";
}
