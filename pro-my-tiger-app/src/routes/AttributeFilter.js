import React from "react";
import { AttributeFilterItem } from "../components/AttributeFilter/AttributeElementsExample";
import { AttributeFilterExample } from "../components/AttributeFilter/AttributeFilterExample";
import { AttributeFilterComponentExample } from "../components/AttributeFilter/AttributeFilterComponentExample";
import { AttributeFilterExampleTitle } from "../components/AttributeFilter/AttributeFilterExampleTitle";
import Page from "../components/Page";

const AttributeFilter = () => {
    return (
        <Page>
            <h2>Attribute Filter</h2>
            <div>
                <h3>Attribute Filter Component Example</h3>
                <AttributeFilterComponentExample />
                <hr />
            </div>
            <div>
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
            </div>
        </Page>
    );
};

export default AttributeFilter;
