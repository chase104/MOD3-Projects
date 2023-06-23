import { createContext, useState } from 'react';


export const primaryContext = createContext()


const PrimaryContextProvider = ({children}) => {

    // put state
    const [cars, setCars] = useState(["bmw", "toyota", "honda"])
    const [user, setUser] = useState("Chase")

    let stateObject = {
        cars, setCars,
        user
    }



    return (
        // put state into provider
    <primaryContext.Provider value={stateObject}>
        {children}
    </primaryContext.Provider>
    )
    }

export default PrimaryContextProvider;