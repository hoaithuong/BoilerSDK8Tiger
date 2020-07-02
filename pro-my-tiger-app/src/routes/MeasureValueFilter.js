import React from "react";
import { FilterByValueExample } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterExample";
import { MeasureValueFilterExample } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterFormattedInPercentageExample";
import { MeasureValueFilterExampleShowInPercent } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterShownInPercentageExample";
import { MeasureValueFilterExampleStack } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterStackedToHundredPercentExample";
import { MeasureValueFilterComponentExample } from "../components/MeasureValueFilter/MeasureValueFilterComponent/MeasureValueFilterComponentExample";
import { MeasureValueFilterComponentPercentageExample } from "../components/MeasureValueFilter/MeasureValueFilterComponent/MeasureValueFilterComponentPercentageExample";
import { MeasureValueFilterComponentRatioExample } from "../components/MeasureValueFilter/MeasureValueFilterComponent/MeasureValueFilterComponentRatioExample";
import { MeasureValueFilterComponentExampleDropdown } from "../components/MeasureValueFilter/MeasureValueFilterComponent/MeasureValueFilterDropdownComponentExample";
import Page from "../components/Page";

const AttributeFilter = () => {
    return (
        <Page>
            <h2>Measure Value Filter By Value</h2>
            <div>
                <h3>Filter By Value Example</h3>
                <FilterByValueExample />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Formatted In Percentage Example</h3>
                <MeasureValueFilterExample />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Example Show In Percent</h3>
                <MeasureValueFilterExampleShowInPercent />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Example Stack</h3>
                <MeasureValueFilterExampleStack />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Component Example</h3>
                <MeasureValueFilterComponentExample />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Component Percentage Example</h3>
                <MeasureValueFilterComponentPercentageExample />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Component Ratio Example</h3>
                <MeasureValueFilterComponentRatioExample />
                <hr />
            </div>
            <div>
                <h3>Measure Value Filter Component Example Dropdown</h3>
                <MeasureValueFilterComponentExampleDropdown />
                <hr />
            </div>
        </Page>
    );
};

export default AttributeFilter;
