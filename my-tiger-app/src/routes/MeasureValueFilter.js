import React from "react";
import { FilterByValueExample } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterExample";
import { MeasureValueFilterExample } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterFormattedInPercentageExample";
import { MeasureValueFilterExampleShowInPercent } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterShownInPercentageExample";
import { MeasureValueFilterExampleStack } from "../components/MeasureValueFilter/MeasureValueFilterByValue/MeasureValueFilterStackedToHundredPercentExample";
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
            {/* <div>
                <h3>Attribute Filter Example</h3>
                <AttributeFilterExample />
                <hr />
            </div>
            <div>
                <h3>Attribute Filter Element with Showing Title</h3>
                <AttributeFilterExampleTitle />
                <hr />
            </div>
            <div>
                <h3>Attribute Filter Element</h3>
                <AttributeFilterItem />
                <hr />
            </div> */}
        </Page>
    );
};

export default AttributeFilter;
