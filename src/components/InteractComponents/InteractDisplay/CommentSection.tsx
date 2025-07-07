import { Container } from "./CommentSectionStyled";
import iconCommett from "../../../images/icons/icon-comments.png";
import { useUser } from "../../../Context/userCustomHook"
import { Button } from "../../Button/Button";
import { interactSchema } from '../../../schemas/interactSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getComments, sendComment } from "../../../service/interact";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ApiCommentData } from "../../../vite-env";

export interface ICommentCard {
    publicationId: string;
    commentCount: number;
}

type IComment = z.infer<typeof interactSchema>;

export function CommentSection({ publicationId, commentCount }: ICommentCard) {
    const { user } = useUser()
    const [commentError, setCommentError] = useState<string | null>(null)
    const [comments, setComments] = useState<ApiCommentData[]>([])
    const [hasMoreComments, setHasMoreComments] = useState(false)
    const [offset, setOffset] = useState(0)
    const limitComments = 6
    const [loadComments, setLoadComments] = useState(false)
    const [sendComments, setSendComments] = useState(false)
    const commentsTopRef = useRef<HTMLDivElement>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IComment>({ resolver: zodResolver(interactSchema) })

    const findComments = async (publicationId: string) => {
        if (!publicationId) return console.error("publicationId is undefined")
        setLoadComments(true)

        try {
            const response = await getComments(publicationId, limitComments, offset)
            setComments(prev => [
                ...(offset === 0 ? [] : prev),
                ...response.data.comments
            ]);
            setHasMoreComments(response.data.hasMore)
            setOffset(response.data.nextOffset)

        } catch (error) {
            if (axios.isAxiosError(error)) console.error(error.response?.data.message || "Ocorreu um erro desconhecido")
        } finally {
            setLoadComments(false)
        }
    }

    async function inHandleSubmit(data: IComment) {
        setSendComments(true)
        try {
            const response = await sendComment(publicationId, data)
            reset()
            setComments((prevComments) => [response.data.comment.comment[0], ...prevComments])
            commentsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) setCommentError(error.response?.data.message || "Ocorreu um erro desconhecido")
            else setCommentError("Ocorreu um erro desconhecido")
            console.error(error);
        } finally {
            setSendComments(false)
        }
    }

    useEffect(() => {
        findComments(publicationId)
    }, [publicationId, user])

    return (
        <Container>
            <div id="comments" ref={commentsTopRef}>
                <img src={iconCommett} alt="Ícone de comentario" />
                <h4>{commentCount} comentários</h4>
            </div>

            {!user ? (
                <p>Faça o login para comentar</p>

            ) : (
                <>
                    <div >

                        {comments.map((commentItem) => (
                            <div key={commentItem._id}>
                                <p>{commentItem.user.name}</p>
                                <strong>{commentItem.content}</strong>

                                <p>{commentItem._id}</p>
                                <br />
                            </div>
                        ))}

                        {loadComments && <p>Carregando ...</p>}
                        {sendComments && <p>Enviando ...</p>}
                        {hasMoreComments &&
                            <button type="button" onClick={() => findComments(publicationId)}>
                                Mais
                            </button>
                        }
                    </div>

                    <form onSubmit={handleSubmit(inHandleSubmit)}>
                        <textarea
                            {...register("content")}
                            placeholder="Escreva seu comentário..."
                            rows={4}
                        />

                        {errors.content && <span>{errors.content.message}</span>}
                        {commentError && <span>{commentError} </span>}

                        <Button text="Enviar" type="submit" />
                    </form>
                </>
            )}
        </Container>
    )
}