import React from "react";
import { AreaChartExample } from "../components/BasicComponent/AreaChartExample";
import { BarChartExample } from "../components/BasicComponent/BarChartExample";
import { BubbleChartExample } from "../components/BasicComponent/BubbleChartExample";
import { BulletChartExample } from "../components/BasicComponent/BulletChartExample";
import { ColumnChartExample } from "../components/BasicComponent/ColumnChartExample";
import { ComboChartExample } from "../components/BasicComponent/ComboChartExample";
import { DonutChartExample } from "../components/BasicComponent/DonutChartExample";
import { HeadlineExample } from "../components/BasicComponent/HeadlineExample";
import { HeatmapExample } from "../components/BasicComponent/HeatmapExample";
import { KpiExample } from "../components/BasicComponent/KpiExample";
import { LineChartExample } from "../components/BasicComponent/LineChartExample";
import { PieChartExample } from "../components/BasicComponent/PieChartExample";
import { ScatterPlotExample } from "../components/BasicComponent/ScatterPlotExample";
import { StackedAreaChartExample } from "../components/BasicComponent/StackedAreaChartExample";
import { TreemapExample } from "../components/BasicComponent/TreemapExample";

import Page from "../components/Page";

const BasicComponent = () => {
    return (
        <Page>
            <h2>Basic Component</h2>
            <div>
                <h3>Area Chart Example</h3>
                <AreaChartExample />
                <hr />
            </div>
            <div>
                <h3>Bar Chart Example</h3>
                <BarChartExample />
                <hr />
            </div>
            <div>
                <h3>Bubble Chart Example</h3>
                <BubbleChartExample />
                <hr />
            </div>
            <div>
                <h3>Bullet Chart Example</h3>
                <BulletChartExample />
                <hr />
            </div>
            <div>
                <h3>Column Chart Example</h3>
                <ColumnChartExample />
                <hr />
            </div>
            <div>
                <h3>Combo Chart Example</h3>
                <ComboChartExample />
                <hr />
            </div>
            <div>
                <h3>Donut Chart Example</h3>
                <DonutChartExample />
                <hr />
            </div>
            <div>
                <h3>Headline Example</h3>
                <HeadlineExample />
                <hr />
            </div>
            <div>
                <h3>Heatmap Example</h3>
                <HeatmapExample />
                <hr />
            </div>
            <div>
                <h3>Kpi Example</h3>
                <KpiExample />
                <hr />
            </div>
            <div>
                <h3>Line Chart Example</h3>
                <LineChartExample />
                <hr />
            </div>
            <div>
                <h3>Pie Chart Example</h3>
                <PieChartExample />
                <hr />
            </div>
            <div>
                <h3>Scatter Plot Example</h3>
                <ScatterPlotExample />
                <hr />
            </div>
            <div>
                <h3>Stacked Area Chart Example</h3>
                <StackedAreaChartExample />
                <hr />
            </div>
            <div>
                <h3>Treemap Example</h3>
                <TreemapExample />
                <hr />
            </div>
        </Page>
    );
};

export default BasicComponent;
