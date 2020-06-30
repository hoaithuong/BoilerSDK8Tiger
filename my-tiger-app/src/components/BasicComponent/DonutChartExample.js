// (C) 2007-2019 GoodData Corporation
import React from "react";
import { DonutChart } from "@gooddata/sdk-ui-charts";
import { LDiscount, PSize_2, SAcctbal } from "../../ldm/full";
const measures = [LDiscount.Sum, PSize_2.Sum, SAcctbal.Sum];
const style = {
    height: 300,
};
export const DonutChartExample = () => {
    return (
        <div style={style} className="s-donut-chart">
            <DonutChart measures={measures} />
        </div>
    );
};
