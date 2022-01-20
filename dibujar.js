// JAVASCRIPT

// Asignamos un evento load a la ventana y metemos todo el código interno del programa dentro de la función anónima para que se ejecute tras cargar la página.
window.addEventListener('load', function () { 

  // Creación de tabla:
      
  const FILAS = 30;
  const COLUMNAS = 30;
  var tabla = document.createElement('table');
  tabla.style.border = "1px black solid";
  tabla.className = "tablerodibujo";
  tabla.id = "tabladibujo";

  // Mediante 2 bucles, creamos 30 filas y por cada fila 30 columnas.  
  // Añadimos las filas (td) a las columnas (tr) y estas a la tabla, y por último añadimos la tabla al div indicado.
  for (var i = 0; i < FILAS; i++) {
    var fila = document.createElement('tr');
    fila.style.border = "1px black solid";
    tabla.appendChild(fila);
    for (var j = 0; j < COLUMNAS; j++) {
      var columna = document.createElement('td')
      columna.style.border = "1px black solid";
      columna.style.height = "10px";
      columna.style.width = "10px";
      fila.appendChild(columna);
    }
  }
  zonadibujo.appendChild(tabla);

  // Selección de color:

  // Obtenemos los td de la tabla con id paleta y metemos en un array colores los 6 primeros valores que corresponden a las celdas de los colores para seleccionar.
  var celdasPaleta = paleta.getElementsByTagName('td');
  var colores = [];
  for (var i = 0; i < 6; i++) {
    colores.push(celdasPaleta[i]);
  }

  // Asociamos a cada elemento del array colores el evento click con la función selecColor.
  for (var i = 0; i < colores.length; i++) {
    colores[i].addEventListener('click', selecColor);
  }

  // Recorremos el array colores e indicamos que el valor de la clase sea únicamente color1,color2.etc, respectivamente, quitando así la clase seleccionado al que lo tiene por defecto.
  // Tras esto, asignamos al elemento clickado la clase que ya tenía (colorx) y la clase seleccionado para que cambie visualmente.
  // Como no podemos acceder a los estilos externos de un elemento con style (solo para estilos en linea), usamos el método getComputedStyle y como parámetro el elemento clickado y obtenemos su background-color y lo asignamos a una variable color
  var color = "";
  function selecColor () {
    for (var i = 0; i < colores.length; i++) {
      colores[i].setAttribute('class', 'color'+(i+1));
    }
    this.setAttribute('class', this.getAttribute('class')+' seleccionado');
    color = window.getComputedStyle(this).getPropertyValue("background-color");
  }

  // Activar/desactivar el pincel:

  // Asociamos a la tabla con id tabladibujo el evento click con la función actPincel.
  tabladibujo.addEventListener('click', actPincel) 

  // Definimos una varibale activado que será false cuando el pincel esté desactivado y true cuando esté activado.
  // Primero comprobamos el valor recibido de la variable activado y según cual sea, lo cambiamos al contrario. 
  // Además, cambiamos el texto de la celda con id pincel.
  var activado = false;
  function actPincel () {
    if (activado == false) {
      activado = true;
      pincel.innerHTML = "PINCEL ACTIVADO";
    } else {
      activado = false;
      pincel.innerHTML = "PINCEL DESACTIVADO";
    }
  }

  // Pintar al pasar el ratón por cada celda

  // Obtenemos los td dentro de la tabla con id tabladibujo y le asignamos a cada una el evento mouseover con la función pintCelda
  var celdasDibujo = tabladibujo.getElementsByTagName('td');
  for (var i = 0; i < celdasDibujo.length; i++) {
    celdasDibujo[i].addEventListener('mouseover', pintCelda);
  }

  // Primero comprobamos que el pincel está activado y si es así, entonces cambiamos el color de la celda por la que el ratón ha pasado por encima al color que previamente habíamos almacenado en la variable color.
  function pintCelda () {
    if (activado == true) {
      this.style.backgroundColor = color;
    }
  }

  // EXTRA: Botón para limpiar la tabla

  // Como extra he querido añadir un botón bastante util para limpiar la tabla y poder empezar a dibujar desde el principio sin tener que recargar la página ni colorear de blanco las celdas pintadas.
  var btnLimpiar = document.createElement('button');
  btnLimpiar.innerHTML = "Limpiar lienzo"; 
  btnLimpiar.style.marginTop = "20px";
  btnLimpiar.id = "boton1";
  //document.body.insertBefore(btnLimpiar, document.body.lastChild);
  document.body.appendChild(btnLimpiar);

  // Asignamos al botón el evento click con la función limpiear
  boton1.addEventListener('click', limpiar);

  // Recorremos las celdas de la tabla y cambiamos su color de fondo a blanco.
  function limpiar () {
    for (var i = 0; i < celdasDibujo.length; i++) {
      celdasDibujo[i].style.backgroundColor = "white";
    }
  }

});