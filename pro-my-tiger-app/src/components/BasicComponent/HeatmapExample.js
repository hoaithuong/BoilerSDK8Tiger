// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Heatmap } from "@gooddata/sdk-ui-charts";
import { Gdp, Continent, Country } from "../../ldm/full";
const style = {
    height: 300,
};
export const HeatmapExample = () => {
    return (
        <div style={style} className="s-heat-map">
            <Heatmap measure={Gdp.Sum} rows={Continent} columns={Country.Default} />
        </div>
    );
};
