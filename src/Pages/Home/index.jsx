import { LoginContainer, LoginForm, LoginButton, LoginInput} from "./styles";

function Home() {
  return (
    <LoginContainer>
      <img src="/icon.jpg" alt=""/>
      <h3>Welcome Back!</h3>
      <h2>Joao Carlos</h2>
      <LoginForm>
        <LoginInput type="password" placeholder="Enter your password..."/>
        <LoginButton type="submit">LOGIN</LoginButton>
        <a href="#">Forget your password?</a>
      </LoginForm>
    </LoginContainer>
  )
}

export default Home
