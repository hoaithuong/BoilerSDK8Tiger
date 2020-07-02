// (C) 2007-2020 GoodData Corporation
import React from "react";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { measureLocalId, modifyMeasure } from "@gooddata/sdk-model";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Continent, Gdp } from "../../../ldm/full";
const measureTitle = "Franchised Sales Ratio";
export const GdpAsPercent = modifyMeasure(Gdp.Sum, m => m.format("#,##0%").title("Acctbal Percent"));
const measures = [GdpAsPercent];
const attributes = [Continent];
const defaultFilter = {
    measureValueFilter: {
        measure: measures,
    },
};
export class MeasureValueFilterComponentPercentageExample extends React.PureComponent {
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
                    usePercentage
                    measureIdentifier={measureLocalId(GdpAsPercent)}
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
export default MeasureValueFilterComponentPercentageExample;
