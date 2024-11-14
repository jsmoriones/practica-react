import React, {useState} from 'react';
import {ThemeContext} from "./ThemeContext";

const StateTheme = ({children}) => {
    const [isLightTheme, setLighthTheme] = useState(true);
    const themeLight = {
        light: {syntax: "#555", ui: "#ddd", bg: "#eee"},
        dark: {syntax: "#ddd", ui: "#333", bg: "#555"}
    }

    const toggleTheme = () => {
        setLighthTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                toggleTheme, themeLight, isLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default StateTheme