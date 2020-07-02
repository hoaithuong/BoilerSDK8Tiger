// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newMeasureValueFilter } from "@gooddata/sdk-model";
import { Country, Gdp } from "../../../ldm/full";
const measures = [Gdp.Sum];
const attributes = [Country.Default];
const greaterThanFilter = newMeasureValueFilter(Gdp.Sum, "GREATER_THAN", 20000);
const betweenFilter = newMeasureValueFilter(Gdp.Sum, "BETWEEN", 15000, 25000);
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
                    {this.renderPresetButton("All Sum Gdp", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Sum Gdp greater than 20,000",
                        [greaterThanFilter],
                        filters[0] === greaterThanFilter,
                    )}
                    {this.renderPresetButton(
                        "Sum Gdp between 15,000 and 25,000",
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
