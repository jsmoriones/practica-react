import {useState} from 'react';
import { AuthContext } from './AuthContext';

const StateAuth = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuthentica = () => {
        setIsAuthenticated(!isAuthenticated);
    }

    return (
        <AuthContext.Provider
            value={{
                toggleAuthentica,
                isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default StateAuth