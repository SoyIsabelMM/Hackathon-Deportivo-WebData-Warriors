import "./Chart.css";

const descripciones = [
  "Esta es una descripción larga para la gráfica 1...",
  "Esta es una descripción larga para la gráfica 2...",
  "Esta es una descripción larga para la gráfica 3...",
  "Esta es una descripción larga para la gráfica 4...",
];

function Chart(props) {
  const descripcionIndex = props.descripcion;
  const texto = descripciones[descripcionIndex];
  return (
    <section className={`Chart ${props.className}`}>
      <h1 className="Chart__title">{texto}</h1>'
      <div className="Chart__container-img1">{<props.imagen />}</div>
    </section>
  );
}

export default Chart;
