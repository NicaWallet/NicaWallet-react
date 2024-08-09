import { Button } from "@/components/ui/button";

const LoginButton = () => {
  const onClickHandler = () => {
    console.info("Me hicieron click"); // TODO: Implementar lógica de login
  };
  return <Button onClick={onClickHandler}>Login</Button>;
};

export default LoginButton;
