function probarValidarNombre() {
  console.assert(
    validarNombre("") === "El campo nombre debe tener al menos 1 caracter",
    "Validar nombre no funciono con un string vacio"
  );

  console.assert(
    validarNombre(
      "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd"
    ) === "El campo nombre debe tener menos de 50 caracteres",
    "Validar nombre no valido que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("123132") === "El campo nombre solo acepta letras",
    "Validar nombre no valido que el nombre solo tenga letras"
  );

  console.assert(
    validarNombre("rafa") === "",
    "Validar nombre no funciono con un nombre valido"
  );
}

function probarValidarProvincia() {
  console.assert(
    validarProvincia("") === "Debe elegir una provincia",
    "Validar ciudad no valido que se haya seleccionado una provincia"
  );
  console.assert(
    validarProvincia("Catamarca") === "",
    "Validar provincia no funciono con un nombre de provincia valido"
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
    ) === "El campo descripcion debe tener menos de 100 caracteres",
    "Validar descripcion regalo no valido que sean menos de 100 caracteres"
  );
  console.assert(
    validarDescripcionRegalo("pelota") === "",
    "Validar descripcion regalo no funciono con un descripcion correcta"
  );
  console.assert(
    validarDescripcionRegalo(".,.,.,.,") ===
      "El campo descripcion solo puede tener numeros y letras",
    "La funcion validar descripcion regalo no valido que fuera solo numeros y letras"
  );
}

probarValidarNombre();
probarValidarProvincia();
probarValidarDescripcionRegalo();
