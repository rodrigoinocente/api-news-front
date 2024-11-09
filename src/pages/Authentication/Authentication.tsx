import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { AuthContainer, Section } from "./AuthenticationStyled"
import { AuthData } from "../../vite-env";
import { zodResolver } from "@hookform/resolvers/zod"
import { signinSchema } from "../../schemas/signinSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { signupSchema } from "../../schemas/signupSchema";
import { singin, singup } from "../../service/userService";

export function Authentication() {
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: { errors: errorsSignin }, } = useForm<AuthData>({ resolver: zodResolver(signinSchema) });
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup }, } = useForm<AuthData>({ resolver: zodResolver(signupSchema) });

    async function inHandleSubmit(data: AuthData) {
        try {
            const response = await singin(data)
            console.log("Response: ", response);
        } catch (error: unknown) {
            console.log(error);
        }
        console.log("Signin Data:", data);
    }

    async function upHandleSubmit(data: AuthData) {
        try {
            const response = await singup(data)
            console.log("Response: ", response);
        } catch (error: unknown) {
            console.log(error);
        }
        console.log("Signup Data:", data);
    }

    return (
        <>
            <AuthContainer>
                <Section type="signin">
                    <h2>Entrar</h2>
                    <form onSubmit={handleSubmitSignin(inHandleSubmit)}>

                        <Input type="email" placeholder="Email" name="email" register={registerSignin} />
                        {errorsSignin.email && <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>}

                        <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
                        {errorsSignin.password && <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>}

                        <Button type="submit" text="Entrar" />

                    </form>
                </Section>
                <Section type="signup">
                    <h2>Cadastrar</h2>

                    <form onSubmit={handleSubmitSignup(upHandleSubmit)}>

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
                </Section>
            </AuthContainer>
        </>
    )
}