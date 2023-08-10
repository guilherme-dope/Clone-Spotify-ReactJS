import { RiSearchLine } from "react-icons/ri";
import { CgHome } from "react-icons/cg";
import { Container } from "./style.ts";

const SideMenu = () => {
    return (
        <Container>
            <ul>
                <li>
                    <a href=""> <CgHome /> inicio </a>
                </li>

                <li>
                    <a href=""><RiSearchLine /> Buscar </a>
                </li>
            </ul>

        </Container>
    );

};

export default SideMenu;