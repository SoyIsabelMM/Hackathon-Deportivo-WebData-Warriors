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
    );
};

export default RankingFifa;
