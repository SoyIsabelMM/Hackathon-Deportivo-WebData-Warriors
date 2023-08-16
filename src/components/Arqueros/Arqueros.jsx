import './Arqueros.css';
import Imagen3 from './Imagen3';

const Arqueros = () => {
    return (
        <div className='containerArqueros'>
            <p className='textoArqueros'><strong>¿Qué tan cierto es que un equipo tiene ventaja al jugar en su territorio?</strong><br></br>
                Es común la creencia de que un equipo tiene ventaja cuando juega en su territorio y que los ánimos bajan cuando juega en el territorio
                de su contrincante. Vamos a investigar que tan cierto es esto.
                Al ver los resultados globales cuando un equipo juega en su territorio, la columna verde muestra que el 51.05% de las veces el
                equipo gana, el 26.05% de los partidos pierde y el 22.90% termina en empate.
                ¿Este mismo comportamiento ocurrirá en distintos partidos?
            </p>
            <div className='imagenArquerosContainer'>
                <Imagen3 />
            </div>
        </div>
    );
}

export default Arqueros;
