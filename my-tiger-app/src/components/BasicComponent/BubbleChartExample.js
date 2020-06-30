// (C) 2007-2019 GoodData Corporation
import React from "react";
import { BubbleChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, LQuantity } from "../../ldm/full";
const style = {
    height: 300,
};
export const BubbleChartExample = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BubbleChart
                xAxisMeasure={CAcctbal.Sum}
                yAxisMeasure={LQuantity.Sum}
                viewBy={NationName.Default}
            />
        </div>
    );
};
