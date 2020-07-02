// (C) 2020 GoodData Corporation
import React, { Component } from "react";
import { GeoPushpinChart } from "@gooddata/sdk-ui-geo";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import { Country } from "../../ldm/full";
export class GeoPushpinChartClusteringExample extends Component {
    render() {
        return (
            <div
                style={{
                    height: "500px",
                    position: "relative",
                }}
                className="s-geo-pushpin-chart-clustering"
            >
                <GeoPushpinChart
                    location={Country.Location}
                    config={{
                        mapboxToken:
                            "pk.eyJ1IjoidGh1b25nZ29vZGRhdGEiLCJhIjoiY2s5aThtb3NrMTF1MjNsdGIxOTdqcXlvcyJ9.n0dhhtSmKxTZZYLBo8sfbw",
                    }}
                    onZoomChanged={this.onZoomChanged}
                    onCenterPositionChanged={this.onCenterPositionChanged}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }

    onLoadingChanged(...params) {
        // tslint:disable-next-line:no-console
        return console.log("GeoPushpinChartClusteringExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // tslint:disable-next-line:no-console
        return console.log("GeoPushpinChartClusteringExample onError", ...params);
    }

    onZoomChanged(...params) {
        // tslint:disable-next-line:no-console
        return console.log("GeoPushpinChartClusteringExample onZoomChanged", ...params);
    }

    onCenterPositionChanged(...params) {
        // tslint:disable-next-line:no-console
        return console.log("GeoPushpinChartClusteringExample onCenterPositionChanged", ...params);
    }
}
export default GeoPushpinChartClusteringExample;
