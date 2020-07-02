import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import BasicComponent from "./BasicComponent";
import InsightView from "./InsightView";
import CombineFilter from "./CombineFilter";
import PivotTable from "./PivotTable";
import GeoChart from "./GeoChart";
import ArithmeticMeasure from "./ArithmeticMeasure";
import Execution from "./Execution";
import AttributeFilter from "./AttributeFilter";
import MeasureValueFilter from "./MeasureValueFilter";
import Page from "../components/Page";

import styles from "./AppRouter.module.scss";
// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/" component={BasicComponent} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/insight-view" component={InsightView} />
                    <Route exact path="/pivot-table" component={PivotTable} />
                    <Route exact path="/date-filter" component={GeoChart} />
                    <Route exact path="/combine-filter" component={CombineFilter} />
                    <Route exact path="/execution" component={Execution} />
                    <Route exact path="/attribute-filter" component={AttributeFilter} />
                    <Route exact path="/measure-value-filter" component={MeasureValueFilter} />
                    <Route exact path="/arithmetic-measure" component={ArithmeticMeasure} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* DELETE THIS LINE  */} <Redirect to="/combine-filter" />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
