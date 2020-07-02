// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { Country, Gdp, Deaths } from "../../ldm/full";
const style = {
    height: 300,
};
export const ComboChartExample = () => {
    return (
        <div style={style} className="s-combo-chart">
            <ComboChart
                primaryMeasures={[Gdp.Sum]}
                secondaryMeasures={[Deaths.Sum]}
                viewBy={Country.Default}
            />
        </div>
    );
};
