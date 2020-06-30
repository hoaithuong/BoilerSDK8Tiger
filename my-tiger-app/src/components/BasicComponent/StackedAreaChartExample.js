// (C) 2007-2019 GoodData Corporation
import React from "react";
import { AreaChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, LQuantity } from "../../ldm/full";
const measures = [CAcctbal.Sum, LQuantity.Sum];
const chartConfig = {
    stacking: true,
};
const style = {
    height: 300,
};
export const StackedAreaChartExample = () => {
    return (
        <div style={style} className="s-area-chart">
            <AreaChart measures={measures} viewBy={NationName.Default} config={chartConfig} />
        </div>
    );
};
