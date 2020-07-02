// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ScatterPlot } from "@gooddata/sdk-ui-charts";
import { Country, Gdp, Deaths } from "../../ldm/full";
const xMeasure = Gdp.Sum;
const yMeasure = Deaths.Sum;
const style = {
    height: 300,
};
export const ScatterPlotExample = () => {
    return (
        <div style={style} className="s-scatter-plot">
            <ScatterPlot xAxisMeasure={xMeasure} yAxisMeasure={yMeasure} attribute={Country.Default} />
        </div>
    );
};
