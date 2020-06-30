// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Kpi } from "@gooddata/sdk-ui";
import { LDiscount } from "../../ldm/full";
export const KpiExample = () => {
    return (
        <div className="kpi">
            <style>{`
                .kpi {
                    margin: 10px 0;
                    font-size: 50px;
                    white-space: nowrap;
                    vertical-align: bottom;
                    text-align: center;
                    min-width: 300px;
                    line-height: 1.2em;
                    font-weight: 700;
                    width: 300px;
                }
            `}</style>
            <Kpi measure={LDiscount.Sum} />
        </div>
    );
};
