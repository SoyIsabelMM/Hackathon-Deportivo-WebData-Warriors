import "./Chart.css";

const descripciones = [
  "A lo largo de los años, la cantidad de partidos por año ha ido creciendo sobre todo, a partir del año 2020 lo cual evidencia el crecimiento y la popularidad del fútbol. Cabe destacar que el 2021 presenta una tendencia a la baja en comparación con los años anteriores, posiblemente por a las restricciones y cancelaciones asociadas a la pandemia del COVID-19. Esta gráfica permite ver la evolución histórica y contextualizar los acontecimientos que han afectado la frecuencia de los partidos a lo largo de estos años.",
  "La gráfica de puntos FIFA desde 2010 hasta 2022 muestra las puntuaciones más altas de algunas potencias futbolísticas entre las que se encuentran países como Brasil, Alemania, Argentina, Francia y España, que han destacado en el fútbol mundial durante estos años. Estos países han demostrado su dominio en el fútbol mundial, alcanzando puntuaciones altas de manera continua y destacando en competencias internacionales.",
];

const title = [
  "Evolución de cantidad de partidos por año",
  "Puntos FIFA por año de los mejores equipos",
];

function Chart(props) {
  const descripcionIndex = props.descripcion;
  const texto = descripciones[descripcionIndex];

  const titleIndex = props.title;
  const titleChart = title[titleIndex];
  return (
    <section className={`Chart ${props.className}`}>
      <div className="divider"></div>
      <h2 className="title"> {titleChart} </h2>
      <h1 className="paragraph">{texto}</h1>'
      <div className="Chart__container-img1">{<props.image />}</div>
    </section>
  );
}

export default Chart;
