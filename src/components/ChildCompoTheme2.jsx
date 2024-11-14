import { useContext } from "react";
import ThemeContext2 from "../context/ThemeContext2/ThemeContext2";

const ChildCompoTheme2 = () => {
    const { theme, toggleTheme } = useContext(ThemeContext2);

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button className="bg-red-700 hover:bg-red-500 transition-colors px-4 py-2 text-white text-xl rounded-xl" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ChildCompoTheme2