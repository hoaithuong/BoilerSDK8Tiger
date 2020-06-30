import React from "react";
import { ExecuteExample } from "../components/Execution/ExecuteExample";

import Page from "../components/Page";

const Execution = () => {
    return (
        <Page>
            <h2>Execute</h2>
            <div>
                <h3>Execute Example</h3>
                <ExecuteExample />
                <hr />
            </div>
        </Page>
    );
};

export default Execution;
