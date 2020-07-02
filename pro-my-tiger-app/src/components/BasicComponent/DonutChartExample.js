// (C) 2007-2019 GoodData Corporation
import React from "react";
import { DonutChart } from "@gooddata/sdk-ui-charts";
import { Deaths, Country, Gdp } from "../../ldm/full";
const measures = [Deaths.Sum, Country.Sum, Gdp.Sum];
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
