import {createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({children}){

    const [isLibraryOpen, setLibraryOpen] = useState(false);
    const [isSettingsOpen, setSettingsOpen] = useState(false);

    function toggleLibraryOpen(){
        setLibraryOpen(!isLibraryOpen)
    }
    function toggleSettingsOpen(){
        setSettingsOpen(!isSettingsOpen)
    }

    return(
        <AppContext.Provider value={{
            isLibraryOpen,
            toggleLibraryOpen,
            isSettingsOpen,
            toggleSettingsOpen
        }}>
        {children}
        </AppContext.Provider>
    )
}

export default AppProvider;