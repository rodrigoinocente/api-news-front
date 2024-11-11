import { useUser } from "../../Context/userCustomHook";

export function Profile() {
    const { user } = useUser()

    return (
        <>
            {user ? (
                <h3>{user.name}</h3>
            ) : (
                <h3>Nenhum usuário está logado.</h3>
            )}
        </>
    )
}
