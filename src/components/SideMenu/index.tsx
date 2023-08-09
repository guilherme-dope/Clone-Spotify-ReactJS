import { RiHome5Line, RiSearchLine } from "react-icons/ri";
import { Container } from "./style.ts";

const SideMenu = () => {
    return (
        <Container>
            <ul>
                <li>
                    <a href=""> <RiHome5Line /> inicio </a>
                </li>

                <li>
                    <a href=""><RiSearchLine /> Buscar </a>
                </li>
            </ul>

        </Container>
    );

};

export default SideMenu;