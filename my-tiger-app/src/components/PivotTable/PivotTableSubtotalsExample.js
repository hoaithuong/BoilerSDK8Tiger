// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LDiscount, CAcctbal, OTotalprice, RegionName, NationName, CCustkey } from "../../ldm/full";
import { sum } from "lodash";
const measures = [
    LDiscount.Sum,
    CAcctbal.Sum,
    // OTotalprice.Sum
];
const attributes = [NationName.Default, RegionName];
const totals = [
    {
        measureIdentifier: "lineitem.l_discount",
        type: "sum",
        attributeIdentifier: "customer.region_name",
    },
    // {
    //     measureIdentifier: "franchiseFees",
    //     type: "avg",
    //     attributeIdentifier: "locationName",
    // },
    // {
    //     measureIdentifier: "franchiseFeesOngoingRoyalty",
    //     type: "sum",
    //     attributeIdentifier: "menu",
    // },
    // {
    //     measureIdentifier: "franchiseFees",
    //     type: "max",
    //     attributeIdentifier: "menu",
    // },
];

const columns = [CCustkey.Default];

const config = {
    menu: {
        aggregations: true,
        aggregationsSubMenu: true,
    },
};
const style = {
    height: 400,
};
export const PivotTableSubtotalsExample = () => {
    return (
        <div style={style} className="s-pivot-table-row-grouping">
            <PivotTable
                measures={measures}
                config={config}
                rows={attributes}
                columns={columns}
                // totals={totals}
                pageSize={20}
                groupRows
            />
        </div>
    );
};
