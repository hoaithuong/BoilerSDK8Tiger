// (C) 2007-2019 GoodData Corporation
import React, { useState } from "react";
import { DateFilter, DateFilterHelpers } from "@gooddata/sdk-ui-filters";
import { Insights } from "../../ldm/full";
import { InsightView } from "@gooddata/sdk-ui-ext";
const availableGranularities = ["GDC.time.year"];
const defaultDateFilterOptions = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },
    absoluteForm: {
        localIdentifier: "ABSOLUTE_FORM",
        type: "absoluteForm",
        from: "2017-01-01",
        to: "2017-12-31",
        name: "",
        visible: true,
    },
    absolutePreset: [
        {
            from: "2015-01-01",
            to: "2015-12-31",
            name: "Year 2015",
            localIdentifier: "year2015",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2016-01-01",
            to: "2016-12-31",
            name: "Year 2016",
            localIdentifier: "year2016",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2017-01-01",
            to: "2017-12-31",
            name: "Year 2017",
            localIdentifier: "year2017",
            visible: true,
            type: "absolutePreset",
        },
    ],
    relativeForm: {
        localIdentifier: "RELATIVE_FORM",
        type: "relativeForm",
        granularity: "GDC.time.year",
        from: -2,
        to: -2,
        name: "",
        visible: true,
        availableGranularities,
    },
    relativePreset: {
        "GDC.time.year": [
            {
                from: -2,
                to: -2,
                granularity: "GDC.time.year",
                localIdentifier: "twoYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "2 years ago",
            },
            {
                from: -3,
                to: -3,
                granularity: "GDC.time.year",
                localIdentifier: "threeYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "3 years ago",
            },
            {
                from: -4,
                to: -4,
                granularity: "GDC.time.year",
                localIdentifier: "fourYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "4 years ago",
            },
        ],
    },
};
const dateFilterContainerStyle = {
    width: 200,
};
const columnChartContainerStyle = {
    height: 300,
};
export const CombineFilterWithColumnChartExample = () => {
    const [state, setState] = useState({
        selectedFilterOption: defaultDateFilterOptions.allTime,
        excludeCurrentPeriod: false,
    });

    const onApply = (selectedFilterOption, excludeCurrentPeriod) => {
        setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
    };

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        // @ts-ignore
        state.selectedFilterOption,
        { identifier: "event_date" }, // this is the important change
        state.excludeCurrentPeriod,
    );

    return (
        <div>
            <div style={dateFilterContainerStyle}>
                <DateFilter
                    excludeCurrentPeriod={state.excludeCurrentPeriod}
                    // @ts-ignore
                    selectedFilterOption={state.selectedFilterOption}
                    // @ts-ignore
                    filterOptions={defaultDateFilterOptions}
                    // @ts-ignore
                    availableGranularities={availableGranularities}
                    customFilterName="Selected date range"
                    dateFilterMode="active"
                    onApply={onApply}
                />
            </div>
            <div style={columnChartContainerStyle}>
                {/* <ColumnChart
                    measures={measures}
                    viewBy={EventDateYear}
                    filters={dateFilter ? [dateFilter] : []}
                /> */}
                <InsightView insight={Insights.Thgchart} filters={dateFilter ? [dateFilter] : []} />
            </div>
        </div>
    );
};
