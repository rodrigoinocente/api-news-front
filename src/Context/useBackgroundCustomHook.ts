import { useContext } from "react";
import {BackgroundContext} from "./BackgroundContext";

export const useBackground = () => {
    const context = useContext(BackgroundContext)
    if (!context) {
        throw new Error("use Background must be used inside a BackgroundProvider")
    }
    return context
}