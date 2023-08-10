import {Container} from "./style.ts";

interface ButtonProps {
    onClick: () => void
    label?: string;
}


const Button = ({label, onClick}: ButtonProps) => {
    return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
