import React from "react";
import { ArithmeticMeasureChangeExample } from "../components/ArithmeticMeasure/ArithmeticMeasureChangeExample";
import { ArithmeticMeasureDrillingExample } from "../components/ArithmeticMeasure/ArithmeticMeasureDrillingExample";
import { ArithmeticMeasureMultiplicationExample } from "../components/ArithmeticMeasure/ArithmeticMeasureMultiplicationExample";
import Page from "../components/Page";

const ArithmeticMeasure = () => {
    return (
        <Page>
            <h2>Arithmetic Measure</h2>
            <div>
                <h3>Arithmetic Measure Change Example</h3>
                <ArithmeticMeasureChangeExample />
                <hr />
            </div>
            <div>
                <h3>Arithmetic Measure Drilling Example</h3>
                <ArithmeticMeasureDrillingExample />
                <hr />
            </div>
            {/* <div>
                <h3>Arithmetic Measure Multiplication Example</h3>
                <ArithmeticMeasureMultiplicationExample />
                <hr />
            </div> */}
        </Page>
    );
};

export default ArithmeticMeasure;
