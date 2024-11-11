import { createContext, useState } from "react";
import { IUser, UserContextProps, UserProviderProps } from "../vite-env";

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}