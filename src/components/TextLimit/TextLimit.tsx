import { ITextLimitProps } from "../../vite-env"

export function TextLimit({ text, limit }: ITextLimitProps) {
    const textLimited = text.length > limit ? `${text.substring(0, limit)}...` : text
    return <p>{textLimited}</p>
}