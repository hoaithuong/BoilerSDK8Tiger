// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Heatmap } from "@gooddata/sdk-ui-charts";
import { CAcctbal, NationName, RegionName } from "../../ldm/full";
const style = {
    height: 300,
};
export const HeatmapExample = () => {
    return (
        <div style={style} className="s-heat-map">
            <Heatmap measure={CAcctbal.Sum} rows={NationName.Default} columns={RegionName} />
        </div>
    );
};
