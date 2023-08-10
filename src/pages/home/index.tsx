import {Container} from "./style.ts";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import SideMenu from "../../components/SideMenu";
import YourLibrary from "../../components/YourLibrary";
import Button from "../../components/Button";

function Home() {
    return (
        <Container>
            <aside>
                <SideMenu/>
                <YourLibrary/>
            </aside>

            <main>
                <header>
                    <div className="navigation">
                        <a href="">
                            <MdArrowBackIosNew/>
                        </a>

                        <a href="">
                            <MdArrowForwardIos/>
                        </a>
                    </div>

                    <ul className="menu">
                        <li>
                            <a href="">Premium</a>
                        </li>

                        <li>
                            <a href="">Suporte</a>
                        </li>

                        <li>
                            <a href="">Baixar</a>
                        </li>

                        <li className="space">|</li>

                        <li>
                            <a href="">Inscrever-se</a>
                        </li>

                        <li className="btn">
                            <Button onClick={(): void => {
                            }} label={'Entrar'}></Button>
                        </li>

                    </ul>

                </header>

            </main>
        </Container>
    );
}

export default Home;
