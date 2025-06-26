import ReactDOM from 'react-dom';
import { useUser } from '../../../Context/userCustomHook';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../../service/userService';
import { UserAvatar } from '../../UserAvatar/UserAvatar';
import { ObjectModal } from '../ObjectModal/ObjectModal';

interface UserAvatarModalProps {
    isOpenAvatar: boolean;
    onCloseModal: () => void
}

export function UserAvatarModal({ isOpenAvatar, onCloseModal }: UserAvatarModalProps) {
    const { user, setUser } = useUser()
    const location = useLocation();
    const navigate = useNavigate()
    if (!isOpenAvatar) return null

    async function signoutHandler() {
        await logout()
        localStorage.clear()
        setUser(null)
        if (location.pathname === "/profile") navigate("/")
        onCloseModal()
    }

    return ReactDOM.createPortal(
        <>
            {user &&
                <ObjectModal title={user.name} onCloseModal={onCloseModal}  >
                        <UserAvatar user={user} size="9rem" />

                            <span onClick={() => navigate("/profile")}>Editar</span>
                            <span onClick={signoutHandler}>Sair</span>
                </ObjectModal>
            }
        </>,
        document.getElementById("modal")!
    )
}