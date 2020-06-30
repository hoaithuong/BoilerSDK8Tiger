import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "@gooddata/sdk-ui-ext/styles/css/insightView.css";
import { Insights } from "../../ldm/full";
const style = { height: 150 };
export const HeadlineInsightView = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Insights.HeadlineThg} />
        </div>
    );
};
