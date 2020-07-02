// (C) 2007-2019 GoodData Corporation
import React from "react";
import { BubbleChart } from "@gooddata/sdk-ui-charts";
import { Country, Gdp, Deaths } from "../../ldm/full";
const style = {
    height: 300,
};
export const BubbleChartExample = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BubbleChart xAxisMeasure={Gdp.Sum} yAxisMeasure={Deaths.Sum} viewBy={Country.Default} />
        </div>
    );
};
