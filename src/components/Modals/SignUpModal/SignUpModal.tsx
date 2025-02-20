import ReactDOM from 'react-dom';
import { Content, HeadModal, Overlay, SectionForm } from '../ModalStyled';
import { useForm } from 'react-hook-form';
import { AuthData } from '../../../vite-env';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../../schemas/signupSchema';
import { Input } from '../../Input/Input';
import { ErrorSpan } from '../../Navbar/NavbarStyled';
import { Button } from '../../Button/Button';
import { singUp } from "../../../service/userService";
import { upDateLocalStorage } from '../../../utils/utils';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup }, } = useForm<AuthData>({ resolver: zodResolver(signupSchema) });

    if (!isOpen) return null;

    async function onSignUpSubmit(data: AuthData) {
        try {
            const response = await singUp(data)
            upDateLocalStorage(response.data)
            window.location.reload()

        } catch (error: unknown) {
            console.log(error);
        }
    }

    return ReactDOM.createPortal(
        <Overlay onClick={onClose}>
            <Content onClick={(e) => e.stopPropagation()} className="modal-transition">
                <HeadModal>
                    <h3>Criar Conta</h3>
                    <span onClick={onClose}>X</span>
                </HeadModal>

                <SectionForm>
                    <form onSubmit={handleSubmitSignup(onSignUpSubmit)}>

                        <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                        {errorsSignup.name && <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>}

                        <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                        {errorsSignup.email && <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>}

                        <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                        {errorsSignup.password && <ErrorSpan>{errorsSignup.password.message}</ErrorSpan>}

                        <Input type="password" placeholder="Confirmar senha" name="confirmPassword" register={registerSignup} />
                        {errorsSignup.confirmPassword && <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>}

                        <Button type="submit" text="Cadastrar" />
                    </form>
                </SectionForm>

            </Content>
        </Overlay>,
        document.getElementById("modal")!
    );
}