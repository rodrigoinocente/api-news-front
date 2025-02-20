import { IUser } from "../vite-env";

export function reduceText(text: string, maxTitleLength: number): string {
    const reduceText =
        text.length > maxTitleLength ? text.substring(0, maxTitleLength).trim() + '...' : text
    return reduceText;
}

export function upDateLocalStorage(user: IUser) {
    try {
        localStorage.setItem("name", user.name)
        localStorage.setItem("email", user.email)
        localStorage.setItem("username", user.username)
        if (user.profilePicture) localStorage.setItem("profilePicture", user.profilePicture)
    } catch (error) {
        console.log(error);
    }
}