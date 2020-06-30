// (C) 2007-2019 GoodData Corporation
import React from "react";
import { AreaChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal } from "../../ldm/full";
const style = {
    height: 300,
};

export const AreaChartExample = () => {
    return (
        <div style={style} className="s-area-chart">
            <AreaChart measures={[CAcctbal.Sum]} viewBy={[NationName.Default]} />
        </div>
    );
};
