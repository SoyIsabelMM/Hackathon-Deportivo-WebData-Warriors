import React from 'react';
import RankingFifaItem from './RankingFifaItem';

const data = [
    {
        "flag Image": "https://www.banderas-mundo.es/data/flags/w580/es.webp",
        "Country": "Spain",
        "Number of times in Top 5": 174
    },
    {
        "flag Image": "https://www.banderas-mundo.es/data/flags/w580/fr.webp",
        "Country": "France",
        "Number of times in Top 5": 175
    },
    {
        "flag Image": "https://www.banderas-mundo.es/data/flags/w580/ar.webp",
        "Country": "Argentina",
        "Number of times in Top 5": 181
    },
    {
        "flag Image": "https://www.banderas-mundo.es/data/flags/w580/de.webp",
        "Country": "Germany",
        "Number of times in Top 5": 249
    },
    {
        "flag Image": "https://www.banderas-mundo.es/data/flags/w580/br.webp",
        "Country": "Brazil",
        "Number of times in Top 5": 371
    }
]

const RankingFifa = () => {
    return (
        <>
            <p className="paragraph">Explora la élite del fútbol mundial a través de los datos. Descubre cuáles son los países que han
                brillado consistentemente en el Top 5 del Ranking FIFA desde 1993 hasta 2022. España, Francia, Argentina, Alemania y Brasil han
                dejado una marca indeleble, acumulando impresionantes números de veces en este selecto grupo. Sumérgete en esta visualización y
                descubre quiénes son los verdaderos titanes del fútbol internacional.</p>
            <div className="ranking-fifa">
                {data.map((item, index) => (
                    <RankingFifaItem
                        key={index}
                        flagImageUrl={item["flag Image"]}
                        country={item.Country}
                        timesInTop5={item["Number of times in Top 5"]}
                    />
                ))}
            </div>
        </>
    );
};

export default RankingFifa;
