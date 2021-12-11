import React, { createContext } from 'react'
import { ComponentB } from './ComponentB'

export const ExampleContext = createContext()

const ComponentA = () => {
    return (
        <div>
            <ExampleContext.Provider value={'passing Data'} >
                <ComponentB />
            </ExampleContext.Provider>
        </div>
    )
}

export default ComponentA