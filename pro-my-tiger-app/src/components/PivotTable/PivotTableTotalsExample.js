// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
// import { newTotal } from "@gooddata/sdk-model";
import { Deaths, Gdp, Country, State } from "../../ldm/full";
const measures = [
    Deaths.Sum,
    Gdp.Sum,
    // PhonesPer1k.Sum
];
const attributes = [
    // DeathRate.Default,
    Country.Default,
];
const columns = [State];

// const totals = [newTotal("sum", Deaths.Sum, RegionName), newTotal("avg", Gdp.Avg, RegionName)];
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
