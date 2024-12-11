import { TimeStyled } from "./NewsTimestampsStyled"

interface NewsTimestampsProps {
    publishedAt: Date
    edited?: Date | null
    type: "card" | "full"
}

export function NewsTimestamps({ publishedAt, edited, type }: NewsTimestampsProps) {
    const formatDate = (dateString: Date): string => {
        const date = new Date(dateString)
        return date.toLocaleDateString("pt-BR")
    }

    const formatDateTime = (dateString: Date): string => {
        const date = new Date(dateString)
        return `${date.toLocaleDateString("pt-BR")} ${date.getHours()}h${date.getMinutes().toString().padStart(2, "0")}`
    }

    const timeAgo = (dateString: Date): string => {
        const date = new Date(dateString)
        const now = new Date()
        const diffInMs = now.getTime() - date.getTime()
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minuto${diffInMinutes !== 1 ? "s" : ""}`
        } else if (diffInHours < 24) {
            return `${diffInHours} hora${diffInHours !== 1 ? "s" : ""}`
        } else if (diffInDays <= 7) {
            return `${diffInDays} dia${diffInDays !== 1 ? "s" : ""}`
        } else {
            return `Publicado em ${formatDate(dateString)}`
        }
    }

    const isRelativeTime = (formattedTime: string): boolean => {
        return !formattedTime.startsWith("Publicado em")
    }

    const isRecent = (dateString: Date): boolean => {
        const date = new Date(dateString)
        const now = new Date()
        const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
        return diffInDays < 7
    }

    return (
        <TimeStyled>
            {type === "card" && (
                <p>
                    {isRelativeTime(timeAgo(publishedAt)) ? `Há ${timeAgo(publishedAt)}` : timeAgo(publishedAt)}
                </p>
            )}

            {type === "full" && (
                <div className="full">
                    <p>
                        {`${formatDateTime(publishedAt)}`}
                    </p>
                    {edited && (
                        <p>
                            {isRecent(edited)
                                ? `- Atualizado há ${timeAgo(edited)}`
                                : `- Atualizado em: ${formatDateTime(edited)}`}
                        </p>
                    )}
                </div>
            )}
        </TimeStyled>
    )
}