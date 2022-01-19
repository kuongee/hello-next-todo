import Button from "../component/button";
const LoginForm = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <input placeholder="아이디" />
    <input placeholder="비밀번호" />
    <Button>로그인</Button>
  </form>
);

export default LoginForm;
