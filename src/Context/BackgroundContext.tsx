import React, { createContext, useState } from "react";
import { IBackgroundContextType } from "../vite-env";
import tecnologia from "../images/banners/tecnologia.jpg";
import esportes from "../images/banners/esporte.jpg";
import ciencia from "../images/banners/ciencia.jpg";
import politica from "../images/banners/politica.jpg";
import saude from "../images/banners/saude.jpg";
import arte from "../images/banners/arte.jpg";

const categoryBackgrounds: Record<string, string | null> = {
    Tecnologia: tecnologia,
    Esportes: esportes,
    Ciência: ciencia,
    Política: politica,
    Saúde: saude,
    Arte: arte,
    Outros: null,
}

export const BackgroundContext = createContext<IBackgroundContextType | undefined>(undefined)

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bgImage, setBgImage] = useState<string | null>(null)

    const updateBackground = (category: string | null) => {
        if (category && categoryBackgrounds[category]) {
            const image = categoryBackgrounds[category]
            const img = new Image()
            img.src = image!

            img.onload = () => {
                setBgImage(image)
            }
        } else {
            setBgImage(null)
        }
    }

    return (
        <BackgroundContext.Provider value={{ bgImage, updateBackground }}>
            {children}
        </BackgroundContext.Provider>
    )
}