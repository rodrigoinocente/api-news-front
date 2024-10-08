import { TextLimitProps } from "../../vite-env"

export function TextLimit({ text, limit }: TextLimitProps) {
    const textLimited = text.length > limit ? `${text.substring(0, limit)}...` : text
    return <p>{textLimited}</p>

}