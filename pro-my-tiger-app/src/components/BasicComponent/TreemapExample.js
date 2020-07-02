// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import { Continent, Gdp, Country } from "../../ldm/full";
const style = {
    height: 300,
};
export const TreemapExample = () => {
    return (
        <div style={style} className="s-tree-map">
            <Treemap measures={[Gdp.Sum]} viewBy={Continent} segmentBy={Country.Default} />
        </div>
    );
};
