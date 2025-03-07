import ReactDOM from 'react-dom';
import { Content, HeadModal, Overlay, SectionForm } from '../ModalStyled';
import { useForm } from 'react-hook-form';
import { AuthData } from '../../../vite-env';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema } from '../../../schemas/signinSchema';
import { singIn } from '../../../service/userService';
import { Input } from '../../Input/Input';
import { ErrorSpan } from '../../Navbar/NavbarStyled';
import { Button } from '../../Button/Button';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import { useEffect, useState } from 'react';
import { upDateLocalStorage } from '../../../utils/utils';
import axios from 'axios';

interface ModalProps {
  isOpenLogin: boolean;
  onCloseLogin: () => void;
}

export function LoginModal({ isOpenLogin, onCloseLogin }: ModalProps) {
  const [isSignUpOpen, setSignUpOpen] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
    watch } = useForm<AuthData>({ resolver: zodResolver(signinSchema) })

  useEffect(() => {
    setLoginError(null)
  }, [watch("email"), watch("password")])

  if (!isOpenLogin) return null

  async function inHandleSubmit(data: AuthData) {
    try {
      const response = await singIn(data)
      upDateLocalStorage(response.data)
      window.location.reload()
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) setLoginError(error.message || "Ocorreu um erro desconhecido")
      else setLoginError("Ocorreu um erro desconhecido")

      console.log(error);
    }
  }

  function handleCloseModals() {
    onCloseLogin()
    setSignUpOpen(false)
  }

  return ReactDOM.createPortal(
    <Overlay onClick={onCloseLogin} >

      <Content onClick={(e) => e.stopPropagation()}>
        <HeadModal>
          <h3>Login</h3>
          <span onClick={onCloseLogin}>X</span>
        </HeadModal>

        <SectionForm>
          <form onSubmit={handleSubmitSignin(inHandleSubmit)}>

            <Input type="email" placeholder="Email" name="email" register={registerSignin} />
            {errorsSignin.email && <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>}

            <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
            {errorsSignin.password && <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>}
            {loginError && <ErrorSpan>{loginError}</ErrorSpan>}

            <Button type="submit" text="Entrar" />
          </form>
        </SectionForm>

        <section onClick={() => setSignUpOpen(true)}>Criar conta</section>
      </Content>

      {isSignUpOpen &&
        <SignUpModal isOpenSignUp={isSignUpOpen} onCloseSignUp={handleCloseModals} />
      }

    </Overlay>,
    document.getElementById("modal")!
  )
}