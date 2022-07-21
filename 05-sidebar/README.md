An absolute positioned element is positioned relative to the first parent element that has a position other than static. Since you have it inside a parent with relative it will be absolutely positioned relative to this parent.</br>

Resumen como hacer una sidebar:</br>
Crear el contenedor de la sidebar, position relative para poder colocar el boton de close</br>
a la derecha respecto a este mismo contenedor, además le damos z-index para que</br>
la sidebar se quede por "delante" del resto de la página, el mecanismo lo hacemos con</br>
una clase showl con display: block, normalmente el menu tiene su clase pero tiene display: none, cuando</br>
pulsamos el boton barras hacemos toggle para dar o quitar la clase showl, el boton close siempre la quita

