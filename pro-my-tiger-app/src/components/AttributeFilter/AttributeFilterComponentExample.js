// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";
import { idRef, newPositiveAttributeFilter, newNegativeAttributeFilter } from "@gooddata/sdk-model";
import { Country } from "../../ldm/full";
export const Country1 = "countries.country";
export class AttributeFilterComponentExample extends Component {
    onApply(...params) {
        // tslint:disable-next-line:no-console
        console.log("AttributeFilterComponentExample onApply", ...params);
    }

    render() {
        return (
            <div>
                <div>attribute defined by identifier</div>
                <AttributeFilter
                    filter={newPositiveAttributeFilter(idRef(Country1), [])}
                    fullscreenOnMobile={false}
                    titleWithSelection={false}
                    onApply={this.onApply}
                />
                <br />
                <div>attribute defined by identifier has titleWithSelection</div>
                <AttributeFilter
                    filter={newNegativeAttributeFilter(idRef(Country1), [])}
                    fullscreenOnMobile={false}
                    titleWithSelection={true}
                    onApply={this.onApply}
                />
                <div>attribute defined by filter definition, including selection</div>
                <AttributeFilter
                    filter={newPositiveAttributeFilter(Country.Default, ["ALGERIA", "ARGENTINA", "CANADA"])}
                    titleWithSelection={false}
                    onApply={this.onApply}
                />
                <div>attribute defined by filter definition, including selection has titleWithSelection </div>
                <AttributeFilter
                    filter={newPositiveAttributeFilter(Country.Default, ["ALGERIA", "ARGENTINA", "CANADA"])}
                    titleWithSelection={true}
                    onApply={this.onApply}
                />
            </div>
        );
    }
}
export default AttributeFilterComponentExample;
