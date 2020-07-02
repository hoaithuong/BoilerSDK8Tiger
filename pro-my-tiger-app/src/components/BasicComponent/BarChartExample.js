// (C) 2007-2019 GoodData Corporation
import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { Country, Gdp } from "../../ldm/full";
const style = {
    height: 300,
};
export const BarChartExample = () => {
    return (
        <div style={style} className="s-bar-chart">
            <BarChart measures={[Gdp.Sum]} viewBy={[Country.Default]} />
        </div>
    );
};
