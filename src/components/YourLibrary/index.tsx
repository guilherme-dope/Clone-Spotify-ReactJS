import { Container } from "./style.ts";
import {VscAdd, VscLibrary} from 'react-icons/vsc';
import YourPlaylist from "../YourPlaylist";

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

            <section>
                <YourPlaylist onClick={() => window.open('https://github.com/guilherme-dope/WebDev-ReactJS')} button={'Criar Playlist'} description={'E facil, vamos te ajudar'} title={'Crie sua primeira playlist'}/>
                <YourPlaylist onClick={() => window.open('https://github.com/guilherme-dope/WebDev-ReactJS')} button={'Browse Podcasts'} description={'We\'ll keep you updated on new episodes'} title={'Let\'s find some podcasts to follow'}/>
            </section>
        </Container>
    );
};

export default YourLibrary;
