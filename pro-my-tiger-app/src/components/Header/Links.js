import React from "react";
// import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            {/* <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink> */}
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Basic
            </NavLink>
            <NavLink to={"/insight-view"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                InsightView
            </NavLink>
            <NavLink to={"/pivot-table"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                PivotTable
            </NavLink>
            <NavLink to={"/date-filter"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                DateFilter
            </NavLink>
            <NavLink to={"/combine-filter"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                CombineFilter
            </NavLink>
            <NavLink
                to={"/arithmetic-measure"}
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                ArithmeticMeasure
            </NavLink>
            <NavLink to={"/execution"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Execution
            </NavLink>
            <NavLink
                to={"/attribute-filter"}
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                AttributeFilter
            </NavLink>
            <NavLink
                to={"/measure-value-filter"}
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                MeasureValueFilter
            </NavLink>
        </>
    );
};

export default Links;
