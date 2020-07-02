import React from "react";
import { InsightViewExample } from "../components/InsightView/InsightView";

import Page from "../components/Page";

const InsightView = () => {
    return (
        <Page>
            <h2>Insight View</h2>
            <div>
                <h3>Column Chart Example</h3>
                <InsightViewExample />
                <hr />
            </div>
        </Page>
    );
};

export default InsightView;
