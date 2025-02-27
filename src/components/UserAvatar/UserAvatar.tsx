import { IUser } from "../../vite-env";
import profileNull from "../../images/icons/profileNull.png";
import { UserAvatarContiner } from "./UserAvatarStyled";

interface UserAvatarProps {
    user: IUser;
    onClick?: () => void;
}

export function UserAvatar({ user }: UserAvatarProps) {
    const avatarSrc = user.profilePicture && user.profilePicture !== "null" ? user.profilePicture : profileNull

    return (
        <UserAvatarContiner>
            <img src={avatarSrc} alt="Foto do perfil" />
        </UserAvatarContiner>
    )
}