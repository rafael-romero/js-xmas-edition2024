function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no funciono con un string vacio"
  );

  console.assert(
    validarNombre(
      "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no valido que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarProvincia() {
  console.assert(
    validarProvincia("") === "Debe elegir una provincia",
    "Validar ciudad no valido que se haya seleccionado una provincia"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "El campo descripcion debe contener al menos 1 caracter",
    "Validar descripcion regalo no funciono con el campo vacio"
  );
  console.assert(
    validarDescripcionRegalo(
      "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    ) === "El campo debe tener menos de 100 caracteres",
    "Validar descripcion regalo no valido que sean menos de 100 caracteres"
  );
}

probarValidarNombre();
probarValidarProvincia();
probarValidarDescripcionRegalo(); 
