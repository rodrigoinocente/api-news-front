import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { AuthContainer, Section } from "./AuthenticationStyled"
import { AuthData } from "../../vite-env";

export function Authentication() {
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        formState: { errors: errorsSignin }, } = useForm<AuthData>(/* { resolver: zodResolver(signinSchema) } */);
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup }, } = useForm<AuthData>(/* { resolver: zodResolver(signupSchema) } */);

    function inHandleSubmit(data: AuthData) {
        console.log("Signin Data:", data);
    }

    function upHandleSubmit(data: AuthData) {
        console.log("Signup Data:", data);
    }

    return (
        <>
            <AuthContainer>
                <Section type="signin">
                    <h2>Entrar</h2>
                    <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                        <Input type="email" placeholder="Email" name="email" register={registerSignin} />
                        <Input type="password" placeholder="Senha" name="password" register={registerSignin} />
                        <Button type="submit" text="Entrar" />

                    </form>
                </Section>
                <Section type="signup">
                    <h2>Cadastrar</h2>
                    <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                        <Input type="text" placeholder="Nome" name="name" register={registerSignup} />
                        <Input type="email" placeholder="Email" name="email" register={registerSignup} />
                        <Input type="password" placeholder="Senha" name="password" register={registerSignup} />
                        <Input type="password" placeholder="Confirmar senha" name="password" register={registerSignup} />
                        <Button type="submit" text="Cadastrar" />
                    </form>
                </Section>
            </AuthContainer>
        </>
    )
}