// (C) 2007-2020 GoodData Corporation
import React from "react";
import { measureLocalId } from "@gooddata/sdk-model";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Continent, Gdp } from "../../../ldm/full";
const measureTitle = "Gdp filter";
const measures = [Gdp.Sum];
const attributes = [Continent];
const defaultFilter = {
    measureValueFilter: {
        measure: measures,
    },
};
export class MeasureValueFilterComponentExample extends React.PureComponent {
    state = {
        filters: [],
    };
    onApply = filter => {
        this.setState({
            filters: [filter ?? defaultFilter],
        });
    };

    render() {
        const { filters } = this.state;
        return (
            <React.Fragment>
                <MeasureValueFilter
                    onApply={this.onApply}
                    filter={filters[0]}
                    buttonTitle={measureTitle}
                    measureIdentifier={measureLocalId(Gdp.Sum)}
                />
                <hr className="separator" />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-pivot-table"
                >
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </React.Fragment>
        );
    }
}
export default MeasureValueFilterComponentExample;
