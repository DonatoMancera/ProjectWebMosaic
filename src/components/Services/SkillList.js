import React from 'react';
import { useStockTicker } from './StockTickerContext';

const SkillList = () => {
    const { stockTicker } = useStockTicker();

    return (
        <div>
        <h2>{stockTicker.name}</h2>
        <div className="progress">
            <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${stockTicker.level}%` }}
            aria-valuenow={stockTicker.level}
            aria-valuemin="0"
            aria-valuemax="100"
            ></div>
        </div>
        </div>
    );
};

export default SkillList;