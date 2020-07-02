import React from "react";
import { PivotTableExample } from "../components/PivotTable/PivotTableExample";
import { PivotTableSortingExample } from "../components/PivotTable/PivotTableSortingExample";
import { PivotTableTotalsExample } from "../components/PivotTable/PivotTableTotalsExample";
import { PivotTableRowGroupingExample } from "../components/PivotTable/PivotTableRowGroupingExample";
import { PivotTableDrillExample } from "../components/PivotTable/PivotTableDrillExample";

import Page from "../components/Page";
// import { fromPairs } from "lodash";

const PivotTable = () => {
    return (
        <Page>
            <h2>Pivot Table</h2>
            <div>
                <h3>Pivot Table Example</h3>
                <PivotTableExample />
                <hr />
            </div>
            <div>
                <h3>Pivot Table Sorting Example</h3>
                <PivotTableSortingExample />
                <hr />
            </div>
            <div>
                <h3>Pivot Table Totals Example</h3>
                <PivotTableTotalsExample />
                <hr />
            </div>
            <div>
                <h3>Pivot Table Row Grouping Example</h3>
                <PivotTableRowGroupingExample />
                <hr />
            </div>
            <div>
                <h3>Pivot Table Drill Example</h3>
                <PivotTableDrillExample />
                <hr />
            </div>
        </Page>
    );
};

export default PivotTable;
