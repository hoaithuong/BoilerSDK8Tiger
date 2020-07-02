// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Country, DeathRate, Gdp } from "../../ldm/full";
const style = {
    height: 400,
};

export const PivotTableExample = () => {
    return (
        <div style={style} className="s-area-chart">
            <PivotTable measures={[Gdp.Sum, DeathRate.Sum]} rows={[Country.Default]} />
        </div>
    );
};
