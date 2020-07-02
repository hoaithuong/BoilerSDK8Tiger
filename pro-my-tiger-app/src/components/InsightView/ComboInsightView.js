import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import "@gooddata/sdk-ui-ext/styles/css/insightView.css";
import { Insights } from "../../ldm/full";
const style = { height: 400 };
export const ComboInsightView = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Insights.ComboThg} />
        </div>
    );
};
