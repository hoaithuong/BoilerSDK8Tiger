// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { ErrorComponent } from "@gooddata/sdk-ui";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { LineChart } from "@gooddata/sdk-ui-charts";
import {
    attributeIdentifier,
    isAttributeElementsByRef,
    isPositiveAttributeFilter,
} from "@gooddata/sdk-model";
import { Country, Gdp } from "../../ldm/full";
export class AttributeFilterExample extends Component {
    constructor(props) {
        super(props);
        this.onApply = this.onApply.bind(this);
        this.state = {
            filters: [],
            error: undefined,
        };
    }

    onLoadingChanged(...params) {
        // tslint:disable-next-line:no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    }

    onApply(filter) {
        // tslint:disable-next-line:no-console
        console.log("AttributeFilterExample onApply", filter);
        this.setState({
            filters: [],
            error: undefined,
        });

        if (isPositiveAttributeFilter(filter)) {
            this.filterPositiveAttribute(filter);
        } else {
            this.filterNegativeAttribute(filter);
        }
    }

    onError(...params) {
        // tslint:disable-next-line:no-console
        console.info("AttributeFilterExample onLoadingChanged", ...params);
    }

    filterPositiveAttribute(filter) {
        let filters;
        const {
            positiveAttributeFilter,
            positiveAttributeFilter: { displayForm },
        } = filter;
        const inElements = filter.positiveAttributeFilter.in;
        const checkLengthOfFilter = isAttributeElementsByRef(positiveAttributeFilter.in)
            ? positiveAttributeFilter.in.uris.length !== 0
            : positiveAttributeFilter.in.values.length !== 0;

        if (checkLengthOfFilter) {
            filters = [
                {
                    positiveAttributeFilter: {
                        displayForm,
                        in: inElements,
                    },
                },
            ];
        } else {
            this.setState({
                error: "The filter must have at least one item selected",
            });
        }

        this.setState({
            filters,
        });
    }

    filterNegativeAttribute(filter) {
        let filters;
        const {
            negativeAttributeFilter: { notIn, displayForm },
        } = filter;
        const checkLengthOfFilter = isAttributeElementsByRef(notIn)
            ? notIn.uris.length !== 0
            : notIn.values.length !== 0;

        if (checkLengthOfFilter) {
            filters = [
                {
                    negativeAttributeFilter: {
                        displayForm,
                        notIn,
                    },
                },
            ];
        }

        this.setState({
            filters,
        });
    }

    render() {
        const { filters, error } = this.state;
        return (
            <div className="s-attribute-filter">
                <AttributeFilter
                    identifier={attributeIdentifier(Country.Default)}
                    fullscreenOnMobile={false}
                    onApply={this.onApply}
                />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-line-chart"
                >
                    {error ? (
                        <ErrorComponent message={error} />
                    ) : (
                        <LineChart
                            measures={[Gdp.Sum]}
                            trendBy={Country.Default}
                            filters={filters}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                        />
                    )}
                </div>
            </div>
        );
    }
}
export default AttributeFilterExample;