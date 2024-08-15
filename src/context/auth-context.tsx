import { createContext, useState } from "react";

interface AuthContextProps {
    user: any;
    login: (user: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => null,
    logout: () => null,
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    const login = (user: any) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;