import React from "react";
import { CombineFilterWithColumnChartExample } from "../components/CombineFiler/DateFilterWithColumnChartExample";

import Page from "../components/Page";

const GeoChart = () => {
    return (
        <Page>
            <h2>Combine Filter</h2>
            <div>
                <h3>Combine Filter Example</h3>
                <CombineFilterWithColumnChartExample />
                <hr />
            </div>
        </Page>
    );
};

export default GeoChart;
