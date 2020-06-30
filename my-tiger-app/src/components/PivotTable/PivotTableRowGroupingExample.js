// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LDiscount, CAcctbal, OTotalprice, RegionName, NationName, CCustkey } from "../../ldm/full";
const measures = [LDiscount.Sum, CAcctbal.Sum, OTotalprice.Sum];
const attributes = [NationName.Default, RegionName];
const columns = [CCustkey.Default];
const style = {
    height: 500,
};
export const PivotTableRowGroupingExample = () => {
    return (
        <div style={style} className="s-pivot-table-row-grouping">
            <PivotTable measures={measures} rows={attributes} columns={columns} pageSize={20} groupRows />
        </div>
    );
};
