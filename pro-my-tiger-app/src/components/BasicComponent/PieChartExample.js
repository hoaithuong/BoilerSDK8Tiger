// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PieChart } from "@gooddata/sdk-ui-charts";
import { Deaths, Country, Gdp } from "../../ldm/full";
const measures = [Deaths.Sum, Country.Sum, Gdp.Sum];
const style = {
    height: 300,
};
export const PieChartExample = () => {
    return (
        <div style={style} className="s-pie-chart">
            <PieChart measures={measures} />
        </div>
    );
};
