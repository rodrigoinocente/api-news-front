import React, { createContext, useState } from "react";

type BackgroundContextType = {
    bgImage: string | null
    updateBackground: (image: string | null) => void
}

export const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bgImage, setBgImage] = useState<string | null>(null)

    const updateBackground = (image: string | null) => {
        if (image) {
            const img = new Image()
            img.src = image

            img.onload = () => {
                setBgImage(image)
            }
        }
        setBgImage(null)
    }

    return (
        <BackgroundContext.Provider value={{ bgImage, updateBackground }}>
            {children}
        </BackgroundContext.Provider>
    )
}