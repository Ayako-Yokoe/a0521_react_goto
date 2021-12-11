import React, { useContext} from "react";
import { ExampleContext } from "./ComponentA";

export const ComponentC = () => {
    const passedData = useContext(ExampleContext)
    return(
        <>
            {passedData}
        </>
    )
}