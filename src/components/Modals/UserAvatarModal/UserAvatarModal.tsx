import ReactDOM from 'react-dom';
import { useUser } from '../../../Context/userCustomHook';
import { Content, HeadModal, Overlay } from './UserAvatarModalStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../../service/userService';
import { UserAvatar } from '../../UserAvatar/UserAvatar';

interface UserAvatarModalProps {
    isOpenAvatar: boolean;
    onCloseAvatar: () => void
}

export function UserAvatarModal({ isOpenAvatar, onCloseAvatar }: UserAvatarModalProps) {
    const { user, setUser } = useUser()
    const location = useLocation();
    const navigate = useNavigate()
    if (!isOpenAvatar) return null

    async function signoutHandler() {
        await logout()
        localStorage.clear()
        setUser(null)
        if (location.pathname === "/profile") navigate("/")
        window.location.reload()
    }

    return ReactDOM.createPortal(
        <Overlay onClick={onCloseAvatar}>
            <Content onClick={(e) => e.stopPropagation()} className="modal-transition">
                <HeadModal>
                    <span onClick={onCloseAvatar}>X</span>

                    {user ? (
                        <>
                            <p>{user.name}</p>
                            <UserAvatar user={user} size="7rem"/>
                        </>
                    ) : (
                        <h1>Sem Usuário</h1>
                    )}

                </HeadModal>
                <nav>
                    <p onClick={() => navigate("/profile")}>Conta</p>
                    <p onClick={signoutHandler}>Sair</p>
                </nav>
            </Content>
        </Overlay>,
        document.getElementById("modal")!
    )
}