import LoginPageForm from "../../components/LoginPageForm/LoginPageForm";

export default function LoginPage({setUser}){
    return (
        <main>
            <h1>Welcome</h1>
            <LoginPageForm setUser={setUser}/>
        </main>
    )
}