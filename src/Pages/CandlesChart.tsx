import React from "react";
import CandleStickChart from "../components/Candlestick/CandleStickChart";
import ToolsAndTips from "../components/ToolsAndTips";


function CandlesChart() {
return(
  <div className="bg">
    <ToolsAndTips />
    <div className='p-3'></div>
    <CandleStickChart/>
    <div className='p-3'></div>
  </div>
)
}

export default CandlesChart;
