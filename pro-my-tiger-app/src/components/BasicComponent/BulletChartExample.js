// (C) 2007-2020 GoodData Corporation
import React from "react";
import { BulletChart } from "@gooddata/sdk-ui-charts";
import { Country, Gdp, Deaths } from "../../ldm/full";
const style = {
    height: 300,
};
export const BulletChartExample = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BulletChart primaryMeasure={Gdp.Sum} targetMeasure={Deaths.Sum} viewBy={Country.Default} />
        </div>
    );
};
