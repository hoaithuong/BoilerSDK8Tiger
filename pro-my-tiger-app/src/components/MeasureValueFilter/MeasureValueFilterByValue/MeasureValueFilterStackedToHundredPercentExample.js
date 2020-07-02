// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newMeasureValueFilter, measureIdentifier, idRef, modifyMeasure } from "@gooddata/sdk-model";
import { Continent, Gdp, Deaths } from "../../../ldm/full";

export const Gdp1 = modifyMeasure(Gdp.Sum, m =>
    m
        .format("#,##0")
        .alias("$ Gdp")
        .title("Gdp")
        .localId("Gdp"),
);
export const Deaths1 = modifyMeasure(Deaths.Sum, m =>
    m
        .localId("Deaths")
        .format("#,##0")
        .alias("# Deaths1")
        .title("Deaths1"),
);

const measures = [Gdp1, Deaths1];
const attributes = [Continent];
const greaterThanFilter = newMeasureValueFilter(idRef(measureIdentifier(Gdp1)), "GREATER_THAN", 30000);
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
                    {this.renderPresetButton("All Gdp", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Gdp greater than 30,000 (stacked to 100%)",
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
                            // stackMeasuresToPercent: true,
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
