// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newArithmeticMeasure } from "@gooddata/sdk-model";
import { Deaths, Gdp, PhonesPer1k, DeathRate, Continent } from "../../ldm/full";

const changeMeasure = newArithmeticMeasure(
    [Deaths.Sum, PhonesPer1k.Sum],
    // @ts-ignore
    "CHANGE",
    m => m.title("AM"),
);

const measures = [DeathRate.Sum, Deaths.Sum, Gdp.Sum, PhonesPer1k.Sum, changeMeasure];
const rows = [Continent];

const style = {
    height: 400,
};
export const ArithmeticMeasureChangeExample = () => {
    return (
        <div style={style} className="s-table">
            <PivotTable measures={measures} rows={rows} />
        </div>
    );
};
