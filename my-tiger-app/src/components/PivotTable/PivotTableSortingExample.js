// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import { newAttributeSort, modifyAttribute } from "@gooddata/sdk-model";
import { LDiscount, CAcctbal, RegionName, CCustkey } from "../../ldm/full";
const measures = [
    LDiscount.Sum,
    CAcctbal.Sum,
    // OTotalprice.Sum
];
const attributes = [
    // NationName.Default,
    modifyAttribute(RegionName, a => a.localId("name")),
];
const columns = [CCustkey.Default];
const sortBy = [newAttributeSort("name", "asc")];
const style = {
    height: 400,
};
export const PivotTableSortingExample = () => {
    return (
        <div style={style} className="s-pivot-table-sorting">
            <PivotTable
                measures={measures}
                rows={attributes}
                columns={columns}
                pageSize={20}
                sortBy={sortBy}
            />
        </div>
    );
};
