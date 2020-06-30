import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "@gooddata/sdk-ui-ext/styles/css/insightView.css";
import { Insights } from "../../ldm/full";
const style = { height: 400 };
export const InsightViewExample = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Insights.SomeVisualizationObject} />
        </div>
    );
};