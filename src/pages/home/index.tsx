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
                            <h2>Meus Favoritos</h2>
                            <a href="">Mostrar tudo {'>'} </a>
                        </header>

                        <section>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002764be5f332335eab668ac859"}
                                title={'Travis Scott'}
                                subtitle={'Travis is the best one!'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67616d00001e029935bba90dee253e77d8f9ad"}
                                title={'Matue'}
                                subtitle={'Venha paras as conexoes, de mafia!'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67616d0000b2737c7f9d253c529c37de9b8af8"}
                                title={'Manoel Gomes'}
                                subtitle={'The last brazilian sigma'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67616d0000b273eaf3178d5ebb408fab56f6b8"}
                                title={'Maquina do tempo'}
                                subtitle={'Ela e tao linga rara e especial...'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67616d0000b2739ce3f2af269f08d61ac2ab9e"}
                                title={'Como Tudo Deve Ser'}
                                subtitle={'Eu não nasci ontem...'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67616d0000b273447b61cb670010f48444d7a4"}
                                title={'So os loucos sabem'}
                                subtitle={'Agora eu sei...'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67616d00001e0294d08ab63e57b0cae74e8595"}
                                title={'Scar Tissue'}
                                subtitle={'With the birds I\'ll share this lonely viewin\''}/>
                        </section>
                    </article>

                    <article>
                        <header>
                            <h2>Playlists do Spotify</h2>
                            <a href="">Mostrar tudo {'>'} </a>
                        </header>

                        <section>

                            <Album
                                image={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4293385d324db8558179afd9/1/en/default"}
                                title={'Daily Mix 1'}
                                subtitle={'Drake, Travis, and more!'}/>

                            <Album
                                image={"https://seeded-session-images.scdn.co/v1/img/artist/4gzpq5DPGxSnKTe4SA8HAU/en"}
                                title={'Coldplay Radio'}
                                subtitle={'Olha se voce nao me ama'}/>

                            <Album
                                image={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445b03e0b63147c2c1/2/en/default"}
                                title={'Daily Mix 2'}
                                subtitle={'Now they always say congratulations'}/>

                            <Album
                                image={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf1866b2284e5dbdae69f523e/3/en/default"}
                                title={'Daily Mix 3'}
                                subtitle={'Pivete, eh sal!'}/>

                            <Album
                                image={"https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/O1IxOkAdxj64B341UZUsdWYCKAXujCscDFjeV7FTk2kftczdbTvR1oEC4CHD3XLAdMNpVeZnHsvSz5fl5Pi9W5JqWrL9YlfOIgvA7B7mghs=/MzE6MjE6MTJUNDItODAtMw=="}
                                title={'Discover Weekly'}
                                subtitle={'Your weekly mixtape of fresh music.'}/>

                            <Album
                                image={"https://i.scdn.co/image/ab67706f00000002696803fc4064f73c84a7dd76"}
                                title={"I love my '90s Hip-Hop"}
                                subtitle={'Golden era real rap.'}/>

                            <Album
                                image={"https://thisis-images.scdn.co/37i9dQZF1DZ06evO0gIHkL-default.jpg"}
                                title={'Cachorrao do Brega'}
                                subtitle={'This is Cachorrão.'}/>
                        </section>
                    </article>


                </section>

            </main>
        </Container>
    );
}


export default Home;
