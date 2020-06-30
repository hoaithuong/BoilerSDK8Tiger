// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import { NationName, CAcctbal, RegionName } from "../../ldm/full";
const style = {
    height: 300,
};
export const TreemapExample = () => {
    return (
        <div style={style} className="s-tree-map">
            <Treemap measures={[CAcctbal.Sum]} viewBy={NationName.Default} segmentBy={RegionName} />
        </div>
    );
};
