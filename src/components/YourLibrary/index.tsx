import { Container } from "./style.ts";
import {VscAdd, VscLibrary} from 'react-icons/vsc';

const YourLibrary = () => {
    return (
        <Container>
            <header>
                <VscLibrary />
                Sua Biblioteca

                <a href=""> <VscAdd/> </a>
            </header>
        </Container>
    );
};

export default YourLibrary;
