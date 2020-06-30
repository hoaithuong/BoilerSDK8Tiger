import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Insights } from "../../ldm/full";
import "@gooddata/sdk-ui-ext/styles/css/insightView.css";
const style = { height: 400 };
export const LineInsightView = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Insights.LineThg} />
        </div>
    );
};
