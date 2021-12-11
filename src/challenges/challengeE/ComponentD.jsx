import React, { useContext} from "react";
import { ExampleContext } from "./ComponentA";

export const ComponentD = () => {
    const passedData = useContext(ExampleContext)
    return(
        <>
            {passedData}
        </>
    )
}