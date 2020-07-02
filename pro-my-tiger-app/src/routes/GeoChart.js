import React from "react";
// import { GeoPushpinChartClusteringExample } from "../components/GeoChart/GeoPushpinChartClusteringExample";
import { DateFilterComponentExample } from "../components/DateFilter/DateFilterComponentExample";
import { DateFilterWithColumnChartExample } from "../components/DateFilter/DateFilterWithColumnChartExample";
import Page from "../components/Page";

const GeoChart = () => {
    return (
        <Page>
            <h2>Date Filter</h2>
            {/* <div>
                <h3>Geo Chart Example</h3>
                <GeoPushpinChartClusteringExample />
                <hr />
            </div> */}
            <div>
                <h3>Date Filter Component Example</h3>
                <DateFilterComponentExample />
                <hr />
            </div>
            <div>
                <h3>Date Filter With Column Chart Example</h3>
                <DateFilterWithColumnChartExample />
                <hr />
            </div>
        </Page>
    );
};

export default GeoChart;
