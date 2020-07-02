// (C) 2007-2020 GoodData Corporation
import React from "react";
import classNames from "classnames";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { MeasureValueFilterDropdown } from "@gooddata/sdk-ui-filters";
import { measureLocalId, localIdRef } from "@gooddata/sdk-model";
import { Continent, Gdp } from "../../../ldm/full";
const measures = [Gdp.Sum];
const attributes = [Continent];
const defaultFilter = {
    measureValueFilter: {
        measure: localIdRef(measureLocalId(measures[0])),
    },
};

const DropdownButton = ({ isActive, measureTitle, onClick }) => {
    const className = classNames(
        "gd-mvf-dropdown-button",
        "s-mvf-dropdown-button",
        "gd-button",
        "gd-button-secondary",
        "button-dropdown",
        "icon-right",
        {
            "icon-navigateup": isActive,
            "icon-navigatedown": !isActive,
        },
    );
    return (
        <button className={className} onClick={onClick}>
            {measureTitle}
        </button>
    );
};

export class MeasureValueFilterComponentExampleDropdown extends React.PureComponent {
    state = {
        displayDropdown: false,
        filters: [],
    };
    ref = React.createRef();

    constructor(props) {
        super(props);
    }

    onApply = filter => {
        this.setState({
            filters: [filter ?? defaultFilter],
            displayDropdown: false,
        });
    };
    onCancel = () => {
        this.setState({
            displayDropdown: false,
        });
    };
    toggleDropdown = () => {
        this.setState(state => ({ ...state, displayDropdown: !state.displayDropdown }));
    };

    render() {
        const { filters, displayDropdown } = this.state;
        return (
            <React.Fragment>
                <div ref={this.ref}>
                    <DropdownButton
                        onClick={this.toggleDropdown}
                        isActive={displayDropdown}
                        measureTitle="Custom button"
                    />
                </div>
                {displayDropdown ? (
                    <MeasureValueFilterDropdown
                        onApply={this.onApply}
                        onCancel={this.onCancel}
                        filter={filters[0]}
                        anchorEl={this.ref.current}
                        measureIdentifier={measureLocalId(Gdp.Sum)}
                    />
                ) : null}
                <hr className="separator" />
                <div
                    style={{
                        height: 300,
                    }}
                    className="s-pivot-table"
                >
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </React.Fragment>
        );
    }
}
export default MeasureValueFilterComponentExampleDropdown;
