import React from 'react';

const RankingFifaItem = ({ country, timesInTop5, flagImageUrl }) => {
    return (
        <div className="ranking-fifa__item">
            <img src={flagImageUrl} alt={country} />
            <div className="ranking-fifa__country">{country}</div>
            <div className="ranking-fifa__bar" style={{ width: `${timesInTop5}px` }}>{timesInTop5}</div>
        </div>
    );
};

export default RankingFifaItem;
