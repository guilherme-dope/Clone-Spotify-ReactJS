import { Container } from "./style.ts";
import {VscAdd, VscLibrary} from 'react-icons/vsc';

const YourLibrary = () => {
    return (
        <Container>
            <header>

                <a href="" className="title">
                <VscLibrary />
                Sua Biblioteca
                </a>

                <a href="" className="icon"> <VscAdd/> </a>
            </header>
        </Container>
    );
};

export default YourLibrary;
