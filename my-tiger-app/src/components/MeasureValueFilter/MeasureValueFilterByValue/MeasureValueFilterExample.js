// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newMeasureValueFilter } from "@gooddata/sdk-model";
import { NationName, CAcctbal } from "../../../ldm/full";
const measures = [CAcctbal.Sum];
const attributes = [NationName.Default];
const greaterThanFilter = newMeasureValueFilter(CAcctbal.Sum, "GREATER_THAN", 250000);
const betweenFilter = newMeasureValueFilter(CAcctbal.Sum, "BETWEEN", 200000, 300000);
export class FilterByValueExample extends Component {
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
                    {this.renderPresetButton("All Sum CAcctbal", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Sum CAcctbal greater than 250,000",
                        [greaterThanFilter],
                        filters[0] === greaterThanFilter,
                    )}
                    {this.renderPresetButton(
                        "Sum CAcctbal between 200,000 and 300,000",
                        [betweenFilter],
                        filters[0] === betweenFilter,
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
export default FilterByValueExample;
