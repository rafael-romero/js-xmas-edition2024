function validarNombre(nombre) {
  if (nombre.length <= 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }
  return "";
}

function validarProvincia(provincia) {
  if (provincia.length === 0) return "Debe elegir una provincia";
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "El campo descripcion debe contener al menos 1 caracter";
  } else if (descripcionRegalo.length >= 100) {
    return "El campo debe tener menos de 100 caracteres";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo descripcion solo puede tener numeros y letras";
  }
  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const provincia = $form.provincia.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorProvincia = validarProvincia(provincia);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    provincia: errorProvincia,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;
  if(esExito){
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];

    if (error) {
      cantidadErrores++;
      $form[llave].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error); 
    } else {
      $form[llave].className = "";
    }
  });
  return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
