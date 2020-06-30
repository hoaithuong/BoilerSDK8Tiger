// (C) 2007-2020 GoodData Corporation
import React from "react";
import { BulletChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, LQuantity } from "../../ldm/full";
const style = {
    height: 300,
};
export const BulletChartExample = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BulletChart
                primaryMeasure={CAcctbal.Sum}
                targetMeasure={LQuantity.Sum}
                viewBy={NationName.Default}
            />
        </div>
    );
};
