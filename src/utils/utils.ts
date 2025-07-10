import { IUser } from "../vite-env";

export function upDateLocalStorage(user: IUser) {
    try {
        localStorage.setItem("name", user.name)
        localStorage.setItem("email", user.email)
        localStorage.setItem("username", user.username)
        localStorage.setItem("_id", user._id)
        if (user.profilePicture) localStorage.setItem("profilePicture", user.profilePicture)
    } catch (error) {
        console.log(error);
    }
}

export function constructUserFromLocalStorage(): IUser | null {
    const name = localStorage.getItem("name")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const profilePicture = localStorage.getItem("profilePicture")
    const _id = localStorage.getItem("_id")
    if (name && username && email && _id) return { name, username, email, profilePicture, _id }

    return null
}