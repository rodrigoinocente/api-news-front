import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser deve ser utilizado dentro de um UserProvider");
    }
    return context
}