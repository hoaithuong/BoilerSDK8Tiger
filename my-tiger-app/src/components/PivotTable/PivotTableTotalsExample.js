// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
// import { newTotal } from "@gooddata/sdk-model";
import { LDiscount, CAcctbal, RegionName, CCustkey } from "../../ldm/full";
const measures = [
    LDiscount.Sum,
    CAcctbal.Sum,
    // OTotalprice.Sum
];
const attributes = [
    // NationName.Default,
    RegionName,
];
const columns = [CCustkey.Default];

// const totals = [newTotal("sum", LDiscount.Sum, RegionName), newTotal("avg", CAcctbal.Avg, RegionName)];
const style = {
    height: 400,
};
const config = {
    menu: {
        aggregations: true,
    },
};
export const PivotTableTotalsExample = () => {
    return (
        <div style={style} className="s-pivot-table-totals">
            <PivotTable
                config={config}
                measures={measures}
                rows={attributes}
                columns={columns}
                pageSize={20}
                // totals={totals}
            />
        </div>
    );
};
