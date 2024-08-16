import { createContext, useState } from "react";
import { MoneyUser } from "../utils/interfase";

interface AuthContextProps {
    user: MoneyUser | null;
    login: (user: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => null,
    logout: () => null,
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<MoneyUser | null>(null);

    const login = (user: MoneyUser | null) => {
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