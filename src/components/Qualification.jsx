import QualificationBarChart from "./QualificationBarChart";
import QualificationBarChartOne from "./QualificationBarChartOne";
import QualificationBarChartTwo from "./QualificationBarChartTwo";

function Calificacion() {
  return (
    <>
      <section className="qualification">
        <h3 className="qualification__subtitle">
          ¿Este mismo comportamiento ocurrirá en distintos torneos?
        </h3>
        <p className="paragraph">
          Al juntar los datos disponibles, vemos que la mayoría de los partidos
          son amistosos, y que los torneos con más partidos son:
        </p>

        <ul className="qualification__list">
          <li className="qualification__item">FIFA World Cup qualification</li>
          <li className="qualification__item">UEFA Euro qualification</li>
          <li className="qualification__item">
            African Cup of Nations qualification
          </li>
        </ul>

        <p className="paragraph">
          Tomaremos estos para ver si el comportamiento cambia
        </p>
        <div className="qualification__charts-container">
          <QualificationBarChart />
          <QualificationBarChartOne />
          <QualificationBarChartTwo />
        </div>
        <p className="paragraph">
          Al graficar los resultados, se observa que en los 3 torneos
          aproximadamente el 50% de las veces el equipo jugando en su territorio
          gana.
          <br />
          La única diferencia en el comportamiento es que en el Campeonato
          Africano de Naciones hay un mayor porcentaje de empates que de
          partidos perdidos.
        </p>
        <p className="paragraph">
          Tanto en torneos individuales como en el resumen de partidos se
          observa una mayor cantidad de partidos ganados para el equipo que
          juega en su territorio. Tal vez se deba a que los fanáticos mejoran el
          estado de ánimo de los jugadores o tal vez solo se deba a que están
          más acostumbrados al clima de sus hogares.
        </p>
        <p className="paragraph">
          Por si acaso, ¡No olvides apoyar a tu equipo para aumentar sus
          posibilidades de ganar!
        </p>
      </section>
    </>
  );
}

export default Calificacion;
