// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Deaths, DeathRate, Continent } from "../../ldm/full";
import { newArithmeticMeasure, newMeasure, modifyMeasure } from "@gooddata/sdk-model";

export const DeathRate1 = newMeasure("countries.death_rate", m => m.format("#,##0").localId("DeathRate"));

export const Deaths1 = modifyMeasure(Deaths.Sum, m => m.format("#,##0").localId("Deaths"));

export const arithmeticMeasure2 = newArithmeticMeasure(
    ["DeathRate", "Deaths"],
    // @ts-ignore
    "MULTIPLICATION",
    m =>
        m
            .format("#,##0")
            .title("$ Avg State Daily Costs")
            .localId("arithmeticMeasure2"),
);

const measures = [DeathRate.Sum, Deaths.Sum, arithmeticMeasure2];
const rows = [Continent];
const style = {
    height: 200,
};
export const ArithmeticMeasureMultiplicationExample = () => {
    return (
        <div style={style} className="s-table">
            <PivotTable measures={measures} rows={rows} />
        </div>
    );
};
