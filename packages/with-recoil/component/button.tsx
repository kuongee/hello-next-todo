interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => <button>{children}</button>;

export default Button;
