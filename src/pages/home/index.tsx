import {Container} from "./style.ts";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import SideMenu from "../../components/SideMenu";
import YourLibrary from "../../components/YourLibrary";
import Button from "../../components/Button";
import Album from "../../components/Album";

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
                            <Button onClick={() =>
                                window.open("https://github.com/guilherme-dope/WebDev-ReactJS")
                            } label={'Entrar'}></Button>
                        </li>

                    </ul>

                </header>

                <section className="focus">
                    <article>
                        <header>
                            <h2>Foco</h2>
                            <a href="">Mostrar tudo {'>'} </a>
                        </header>

                        <section>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Travis Scott'}
                                subtitle={'Freeezinng Collddd'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Manoel Gomes'}
                                subtitle={'Olha se voce nao me ama'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Gustavo Lima'}
                                subtitle={'e vc tcheretchetche'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>
                        </section>
                    </article>

                    <article>
                        <header>
                            <h2>Playlists do Spotify</h2>
                            <a href="">Mostrar tudo {'>'} </a>
                        </header>

                        <section>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Travis Scott'}
                                subtitle={'Freeezinng Collddd'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Manoel Gomes'}
                                subtitle={'Olha se voce nao me ama'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Gustavo Lima'}
                                subtitle={'e vc tcheretchetche'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Cachorrao do Brega'}
                                subtitle={'TCHANANANANA'}/>
                        </section>
                    </article>


                </section>

            </main>
        </Container>
    );
}


export default Home;
