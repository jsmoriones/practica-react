import {useState} from "react";
import ThemeContext2 from "./ThemeContext2";
import ChildCompoTheme2 from "../../components/ChildCompoTheme2";

const ThemeComponent = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext2.Provider value={{ theme, toggleTheme }}>
            <ChildCompoTheme2 />
        </ThemeContext2.Provider>
    )
}

export default ThemeComponent