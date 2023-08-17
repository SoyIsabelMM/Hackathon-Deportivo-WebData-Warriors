import Imagen4 from './Imagen4';
import Imagen5 from './Imagen5';
import Imagen6 from './Imagen6';

function Calificacion() {
    return (
        <>
            <p className='paragraph'>Al juntar los datos disponibles, vemos que la mayoría de los partidos son amistosos, y que los torneos con más partidos son:
                •    FIFA World Cup qualification
                •    UEFA Euro qualification
                •    African Cup of Nations qualification
                Tomaremos estos para ver si el comportamiento cambia
            </p>
            <div className="Classification">
                <Imagen4 />
                <Imagen5 />
                <Imagen6 />
            </div>
            <p className='paragraph'>Al graficar los resultados, se observa que en los 3 torneos aproximadamente el 50% de las veces el equipo jugando en su territorio gana. La única diferencia en el comportamiento es que en el Campeonato Africano de Naciones hay un mayor porcentaje de empates que de partidos perdidos.
                Tanto en torneos individuales como en el resumen de partidos se observa una mayor cantidad de partidos ganados para el equipo que juega en su territorio. Tal vez se deba a que los fanáticos mejoran el estado de ánimo de los jugadores o tal vez solo se deba a que están más acostumbrados al clima de sus hogares. Por si acaso,
                ¡no olvides apoyar a tu equipo para aumentar sus posibilidades de ganar!</p>
        </>
    );
}

export default Calificacion;