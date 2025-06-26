import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { AuthData } from '../../../vite-env';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema } from '../../../schemas/signinSchema';
import { singIn } from '../../../service/userService';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';
import { useEffect, useState } from 'react';
import { constructUserFromLocalStorage, upDateLocalStorage } from '../../../utils/utils';
import axios from 'axios';
import { useUser } from '../../../Context/userCustomHook';
import { ObjectModal } from '../ObjectModal/ObjectModal';

interface ModalProps {
  isOpenLogin: boolean;
  onOpenSignUp: () => void;
  onCloseModal: () => void;
}

export function LoginModal({ isOpenLogin, onOpenSignUp, onCloseModal }: ModalProps) {
  const [loginError, setLoginError] = useState<string | null>(null)
  const { setUser } = useUser()


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
      setUser(constructUserFromLocalStorage())
      onCloseModal()

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) setLoginError(error.response?.data.message || "Ocorreu um erro desconhecido")
      else setLoginError("Ocorreu um erro desconhecido")

      console.log(error);
    }
  }

  return ReactDOM.createPortal(
    <>
      <ObjectModal title={"Login"} onCloseModal={onCloseModal}  >

        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input type="email" placeholder="Email" name="email" register={registerSignin} />
          {errorsSignin.email && <span className="errorSpanModal">{errorsSignin.email.message}</span>}

          <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
          {errorsSignin.password && <span className="errorSpanModal">{errorsSignin.password.message}</span>}
          {loginError && <span className="errorSpanModal">{loginError}</span>}

          <Button type="submit" text="Entrar" />
        </form>

        <section onClick={() => onOpenSignUp()}>Criar conta</section>

      </ObjectModal>
    </>,
    document.getElementById("modal")!
  )
}