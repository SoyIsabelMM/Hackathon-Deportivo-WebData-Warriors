import BarChartArchers from "./BarChartArchers";

const Archers = () => {
  return (
    <section className="archers">
      <strong className="title">
        ¿Qué tan cierto es que un equipo tiene
        <br /> ventaja al jugar en su territorio?
      </strong>
      <p className="paragraph">
        Es común la creencia de que un equipo tiene ventaja cuando juega en su
        territorio y que los ánimos bajan cuando juega en el territorio de su
        contrincante. Vamos a investigar que tan cierto es esto.
        <br />
        Al ver los resultados globales cuando un equipo juega en su territorio:
        <br />
        La columna verde muestra que el 51.05% de las veces el equipo gana, el
        26.05% de los partidos pierde y el 22.90% termina en empate.
      </p>
      <div className="archers__chart-container">
        <BarChartArchers />
      </div>
    </section>
  );
};

export default Archers;
