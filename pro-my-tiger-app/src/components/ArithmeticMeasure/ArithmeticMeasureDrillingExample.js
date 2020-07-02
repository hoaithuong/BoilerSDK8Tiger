// (C) 2007-2019 GoodData Corporation
import React, { useState } from "react";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { measureIdentifier, newArithmeticMeasure } from "@gooddata/sdk-model";
// @ts-ignore
import { Deaths, DeathRate, Continent } from "../../ldm/full";
export const arithmeticMeasure1 = newArithmeticMeasure(
    [Deaths.Sum, DeathRate.Sum],
    // @ts-ignore
    "RATIO",
    m => m.format("#,##0").title("$ AM Ratio"),
);
const measures = [DeathRate.Sum, Deaths.Sum, arithmeticMeasure1];
const rows = [Continent];
const drillableItems = [HeaderPredicates.composedFromIdentifier(measureIdentifier(Deaths.Sum))];
const style = {
    height: 200,
};
export const ArithmeticMeasureDrillingExample = () => {
    const [drillEvent, setDrillEvent] = useState();

    const onDrill = drillEvent => setDrillEvent(drillEvent);

    let renderDrillEvent;

    if (drillEvent) {
        // @ts-ignore
        const averageSales = drillEvent.drillContext.row[drillEvent.drillContext.columnIndex];
        renderDrillEvent = (
            <h3>
                You have clicked <span className="s-drill-value">{averageSales}</span>
            </h3>
        );
    }

    return (
        <div>
            {renderDrillEvent}
            <div style={style} className="s-table">
                <PivotTable
                    measures={measures}
                    rows={rows}
                    drillableItems={drillableItems}
                    onDrill={onDrill}
                />
            </div>
        </div>
    );
};
