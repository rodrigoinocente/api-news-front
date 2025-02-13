import { IUser } from "../../vite-env";
import profileNull from "../../images/icons/profileNull.png";
import { UserAvatarContiner } from "./UserAvatarStyled";
import { useNavigate } from "react-router-dom";

interface UserAvatarProps {
    user: IUser;
}

export function UserAvatar({ user }: UserAvatarProps) {
    const avatarSrc = user.profilePicture && user.profilePicture !== "null" ? user.profilePicture : profileNull
    const navigate = useNavigate()

    function profile() {
        navigate("/profile")
    }

    return (
        <UserAvatarContiner onClick={profile}>
            <img src={avatarSrc} alt="Foto do perfil" />
        </UserAvatarContiner>
    )
}