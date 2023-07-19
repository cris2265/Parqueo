// localizar el modo en el DOM
//nodo: etiqueta en su archivo.html

let header_del_dom = document.querySelector(".header");

//almacenar en huna variable el contenido a agregar

let header = `
<img src="../img/parqueo.png" class ="img">
<p class ="titulo">PARQUE "EL COLEGIO"</p>
<nav>
    <ul class = "listado">
    <li><img src="./img/bus.png"></li>
    <li><img src="./img/transport.png"></li>
    <li><img src="./img/car.png"></li>
    <li><img src="./img/motorbike.png"></li>
    <li><img src="./img/bycicle.png"></li>
    </ul>
</nav>
`;

//agregar el dontendio a la referencia del DOM 

header_del_dom.innerHTML = header;