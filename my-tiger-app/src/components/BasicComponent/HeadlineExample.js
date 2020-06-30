// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { LDiscount, PSize_2 } from "../../ldm/full";
export class HeadlineExample extends Component {
    onLoadingChanged(...params) {
        // tslint:disable-next-line:no-console
        return console.log("ColumnChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // tslint:disable-next-line:no-console
        return console.log("ColumnChartExample onError", ...params);
    }

    render() {
        const primaryMeasure = LDiscount.Sum;
        const secondaryMeasure = PSize_2.Sum;
        return (
            <div
                className="s-headline"
                style={{
                    display: "flex",
                }}
            >
                <style>
                    {`
                        .column {
                            flex: "1 1 50%";
                        }
                    `}
                </style>
                <div className="column">
                    <Headline
                        primaryMeasure={primaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
                <div className="column">
                    <Headline
                        primaryMeasure={primaryMeasure}
                        secondaryMeasure={secondaryMeasure}
                        onLoadingChanged={this.onLoadingChanged}
                        onError={this.onError}
                    />
                </div>
            </div>
        );
    }
}
export default HeadlineExample;
