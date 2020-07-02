// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Deaths, Gdp, PhonesPer1k, Country, State, Continent } from "../../ldm/full";
const measures = [Deaths.Sum, Gdp.Sum, PhonesPer1k.Sum];
const attributes = [Continent, Country.Default];
const columns = [State];
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
