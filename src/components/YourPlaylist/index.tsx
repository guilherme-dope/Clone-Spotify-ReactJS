import {Container} from "./style.ts";

interface YourPlaylistProps {
    title: string;
    description: string;
    button: string;
}

const YourPlaylist = ({ title, description, button}: YourPlaylistProps) => {
    return (
        <Container>
            <h4>{title}</h4>
            <p>{description}</p>

            <div>
            <button>{button}</button>
            </div>
        </Container>
    );
};

export default YourPlaylist;

