import React from 'react';

const RankingFifaItem = ({ country, timesInTop5, flagImageUrl }) => {
    return (
        <div className="bar-chart-item">
            <img src={flagImageUrl} alt={country} />
            <div className="flag">{country}</div>
            <div className="bar" style={{ width: `${timesInTop5}px` }}>{timesInTop5}</div>
        </div>
    );
};

export default RankingFifaItem;
