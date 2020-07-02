// (C) 2007-2019 GoodData Corporation
import React from "react";
import { AreaChart } from "@gooddata/sdk-ui-charts";
import { Country, Gdp } from "../../ldm/full";
const style = {
    height: 300,
};

export const AreaChartExample = () => {
    return (
        <div style={style} className="s-area-chart">
            <AreaChart measures={[Gdp.Sum]} viewBy={[Country.Default]} />
        </div>
    );
};
