// (C) 2007-2019 GoodData Corporation
import React from "react";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal } from "../../ldm/full";
// import { CUSTOM_COLOR_PALETTE } from "../../constants/colors";
// const chartConfig = {
//     colorPalette: CUSTOM_COLOR_PALETTE,
// };
const style = {
    height: 300,
};
export const LineChartExample = () => {
    return (
        <div style={style} className="s-line-chart">
            <LineChart
                trendBy={NationName.Default}
                measures={[CAcctbal.Sum]}
                // config={chartConfig}
            />
        </div>
    );
};
