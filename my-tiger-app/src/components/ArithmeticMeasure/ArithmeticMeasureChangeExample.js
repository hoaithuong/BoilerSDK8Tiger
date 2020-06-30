// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newArithmeticMeasure } from "@gooddata/sdk-model";
import { LDiscount, CAcctbal, OTotalprice, NationName } from "../../ldm/full";

const changeMeasure = newArithmeticMeasure([LDiscount.Sum, OTotalprice.Sum], "change", m => m.title("AM"));

const measures = [LDiscount.Sum, CAcctbal.Sum, OTotalprice.Sum, changeMeasure];
const rows = [NationName.Default];

const style = {
    height: 200,
};
export const ArithmeticMeasureChangeExample = () => {
    return (
        <div style={style} className="s-table">
            <PivotTable
                measures={measures}
                // filters={filters}
                rows={rows}
            />
        </div>
    );
};
