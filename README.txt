

Escribir una aplicación en JavaScript que simule un pequeño tablero de dibujo.
Para ello tendrás que dibujar una tablero de 30x30 celdas de 10x10px cada una. Para realizar
el tablero de dibujo tendrás que emplear obligatoriamente los métodos de creación de nodos
del DOM. Una vez generado el tablero lo meterás dentro de un elemento <div> identificador
"zonadibujo". Cuando se crea la tabla se le da a border el valor 1px, y se le asigna la clase
“tablerodibujo”.

El código .js tiene que seguir el estandar de W3C para la gestión de eventos, creación de
elementos HTML, etc.
La forma de funcionamiento de la aplicación será la siguiente:

	1. En el código HTML hay programado una tabla inicial con identificador “paleta” con
	 5 colores, 1 color en cada celda. Haremos clic en alguno de los 5 colores de la paleta
	y se le asignará a la celda de ese color la clase "seleccionado". Solo puede haber 1

	2. Una vez seleccionado un color de la paleta, haremos un clic en una celda del tablero
	de dibujo (que se pintará del color activo en la paleta) y desde ese momento al mover
	el ratón por el tablero pintará del color activo todas las celdas por las que vayamos
	pasando el ratón. En el momento que volvamos a hacer clic en otra celda dejará de
	pintar.

	3. Podremos escoger un color diferente y repetir el proceso, incluso sobre celdas que ya
	han sido pintadas.

	4. Para borrar una celda pintaremos con el color blanco de la paleta.

	5. Cada vez que el pincel esté activado se mostrará un mensaje debajo de la paleta de
	colores indicando : PINCEL ACTIVADO o PINCEL DESACTIVADO.