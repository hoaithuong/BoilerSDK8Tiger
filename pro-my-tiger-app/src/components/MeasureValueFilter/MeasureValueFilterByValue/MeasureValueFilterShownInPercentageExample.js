// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newMeasureValueFilter, modifySimpleMeasure, modifyMeasure } from "@gooddata/sdk-model";
import { Country, Gdp } from "../../../ldm/full";
export const GdpNormal = modifyMeasure(Gdp.Sum, m =>
    m
        .format("#,##0")
        .title("Gdp Normal")
        .localId("GdpNormal"),
);
export const GdpAsPercent = modifySimpleMeasure(GdpNormal, m =>
    m
        .format("#,##0.00%")
        .title("Acctbal Percent")
        .localId("AcctbalPercentRatio")
        .ratio(),
);

const measures = [GdpNormal, GdpAsPercent];
const attributes = [Country.Default];
const greaterThanFilter = newMeasureValueFilter(GdpAsPercent, "GREATER_THAN", 20000);
export class MeasureValueFilterExampleShowInPercent extends Component {
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
                        "Gdp greater than 20,000 (shown in %)",
                        [greaterThanFilter],
                        filters.length > 0,
                    )}
                </div>
                <hr className="separator" />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-pivot-table"
                >
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </div>
        );
    }
}
export default MeasureValueFilterExampleShowInPercent;
