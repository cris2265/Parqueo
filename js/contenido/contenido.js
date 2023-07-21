let contenido_DOM = document.querySelector (".contenido");

let contenido = `
    <div class="cajaimg">
    <h3>Bus y transporte pesado</h3>
    <span>🚎</span>
    </div>
    <form class="cosasxd">
        <div class="entro">
            <span>Datos</span>
            <input type="text" placeholder="Placa" class="placa">
            <input type="time" class ="tiempo" >
            <button>Ingresar</button>
        </div>
    </form>
`;

contenido_DOM.innerHTML = contenido;