// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Deaths, Gdp, PhonesPer1k, Country, DeathRate, State } from "../../ldm/full";
import { sum } from "lodash";
const measures = [
    Deaths.Sum,
    Gdp.Sum,
    // PhonesPer1k.Sum
];
const attributes = [DeathRate.Default, Country.Default];
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

const columns = [State.Default];

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
