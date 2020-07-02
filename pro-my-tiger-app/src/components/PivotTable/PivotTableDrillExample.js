// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import { attributeIdentifier, measureIdentifier } from "@gooddata/sdk-model";
import { Deaths, Gdp, PhonesPer1k, Country, DeathRate, Population } from "../../ldm/full";
const measures = [Deaths.Sum, Gdp.Sum, PhonesPer1k.Sum];
const attributes = [DeathRate.Default, Country.Default];
const columns = [Population.Default];

const drillableItems = [
    HeaderPredicates.identifierMatch(attributeIdentifier(Country.Default)),
    HeaderPredicates.identifierMatch(measureIdentifier(Deaths.Sum)),
];
export class PivotTableDrillExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drillEvent: null,
        };
    }

    onDrill = drillEvent => {
        // tslint:disable-next-line:no-console
        console.log(
            "onFiredDrillEvent",
            drillEvent,
            JSON.stringify(drillEvent.drillContext.intersection, null, 2),
        );
        this.setState({
            drillEvent,
        });
        return true;
    };

    renderDrillValue() {
        const { drillEvent } = this.state;

        if (!drillEvent) {
            return null;
        }

        const drillColumn = drillEvent.drillContext.row[drillEvent.drillContext.columnIndex];
        const drillValue = typeof drillColumn === "object" ? drillColumn.name : drillColumn;
        return (
            <h3>
                You have Clicked <span className="s-drill-value">{drillValue}</span>{" "}
            </h3>
        );
    }

    render() {
        return (
            <div>
                {this.renderDrillValue()}
                <div
                    style={{
                        height: 600,
                    }}
                    className="s-pivot-table-drill"
                >
                    <PivotTable
                        measures={measures}
                        rows={attributes}
                        columns={columns}
                        pageSize={20}
                        drillableItems={drillableItems}
                        onDrill={this.onDrill}
                        // totals={totals}
                    />
                </div>
            </div>
        );
    }
}
export default PivotTableDrillExample;
