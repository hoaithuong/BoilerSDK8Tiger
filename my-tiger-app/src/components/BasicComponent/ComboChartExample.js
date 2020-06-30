// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ComboChart } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, LQuantity } from "../../ldm/full";
const style = {
    height: 300,
};
export const ComboChartExample = () => {
    return (
        <div style={style} className="s-combo-chart">
            <ComboChart
                primaryMeasures={[CAcctbal.Sum]}
                secondaryMeasures={[LQuantity.Sum]}
                viewBy={NationName.Default}
            />
        </div>
    );
};
