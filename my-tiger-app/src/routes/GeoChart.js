import React from "react";
import { GeoPushpinChartClusteringExample } from "../components/GeoChart/GeoPushpinChartClusteringExample";

import Page from "../components/Page";

const GeoChart = () => {
    return (
        <Page>
            <h2>Geo Chart Component</h2>
            <div>
                <h3>Geo Chart Example</h3>
                <GeoPushpinChartClusteringExample />
                <hr />
            </div>
        </Page>
    );
};

export default GeoChart;
