import React from 'react';
import { IgrFinancialChart, IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';



IgrFinancialChartModule.register();

export default class FinancialChartTrendlines extends React.Component<any, any> {


    constructor(props: any) {
        super(props);

        this.state = { trendLineType: "QuinticFit", data:[] }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample bg-light p-3 bg-light">
            <div className="options horizontal">
                <label className="options-label">Trendlines:</label>
                <select value={this.state.trendLineType}
                    onChange={this.onTrendlineChanged}>
                    <option>CubicFit</option>
                    <option>LinearFit</option>
                    <option>QuinticFit</option>
                    <option>QuarticFit</option>
                    <option>ExponentialFit</option>
                    <option>PowerLawFit</option>
                    <option>LogarithmicFit</option>
                    <option>CumulativeAverage</option>
                    <option>ExponentialAverage</option>
                    <option>SimpleAverage</option>
                    <option>ModifiedAverage</option>
                    <option>WeightedAverage</option>
                    <option>None</option>
                </select>
            </div>

            <div className="container" style={{height: "550px", width: "100%" }}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Candle"
                    thickness={2}
                    trendLineType={this.state.trendLineType}
                    trendLineThickness={2}
                    trendLinePeriod={10}
                    trendLineBrushes="rgba(0, 101, 209, 1)"
                    chartTitle="Microsoft Trend"
                    subtitle="Between 2013 and 2017"
                    dataSource={this.state.data}
                    zoomSliderType="None"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={false} />
            </div>
        </div>
        );
    }

    public onTrendlineChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({trendLineType: mode});
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}



