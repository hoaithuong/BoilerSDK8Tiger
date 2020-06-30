// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ScatterPlot } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, LQuantity } from "../../ldm/full";
const xMeasure = CAcctbal.Sum;
const yMeasure = LQuantity.Sum;
const style = {
    height: 300,
};
export const ScatterPlotExample = () => {
    return (
        <div style={style} className="s-scatter-plot">
            <ScatterPlot xAxisMeasure={xMeasure} yAxisMeasure={yMeasure} attribute={NationName.Default} />
        </div>
    );
};
