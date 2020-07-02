// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { Country, Gdp, Deaths } from "../../ldm/full";
const style = {
    height: 300,
};
export const ColumnChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart measures={[Deaths.Sum, Gdp.Sum]} viewBy={[Country.Default]} />
        </div>
    );
};
