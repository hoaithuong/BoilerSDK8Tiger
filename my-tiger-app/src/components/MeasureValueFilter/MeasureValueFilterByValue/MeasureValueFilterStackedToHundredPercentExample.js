// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newMeasureValueFilter, measureIdentifier, idRef, modifyMeasure } from "@gooddata/sdk-model";
import { NationName, CAcctbal, LDiscount } from "../../../ldm/full";

export const CAcctbal1 = modifyMeasure(CAcctbal.Sum, m =>
    m
        .format("#,##0")
        .alias("$ Total Sales")
        .title("CAcctbal 1")
        .localId("CAcctbal1"),
);
export const LDiscount1 = modifyMeasure(LDiscount.Sum, m =>
    m
        .localId("LDiscount1")
        .format("#,##0")
        .alias("# Checks")
        .title("LDiscount"),
);

const measures = [CAcctbal1, LDiscount1];
const attributes = [NationName.Default];
const greaterThanFilter = newMeasureValueFilter(idRef(measureIdentifier(CAcctbal1)), "GREATER_THAN", 250000);
export class MeasureValueFilterExampleStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
        };
    }

    renderPresetButton(label, appliedFilters, isActive) {
        return (
            <button
                className={`gd-button gd-button-secondary ${isActive ? "is-active" : ""} s-filter-button`}
                onClick={() =>
                    this.setState({
                        filters: appliedFilters,
                    })
                }
            >
                {label}
            </button>
        );
    }

    render() {
        const { filters } = this.state;
        return (
            <div>
                <div>
                    {this.renderPresetButton("All total sales", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Total sales greater than 7,000,000 (stacked to 100%)",
                        [greaterThanFilter],
                        filters.length > 0,
                    )}
                </div>
                <hr className="separator" />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-stacked-bar"
                >
                    <BarChart
                        measures={measures}
                        viewBy={attributes}
                        config={{
                            stackMeasuresToPercent: true,
                            dataLabels: {
                                visible: true,
                            },
                        }}
                        filters={filters}
                    />
                </div>
            </div>
        );
    }
}
export default MeasureValueFilterExampleStack;
