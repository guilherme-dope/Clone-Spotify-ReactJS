import {Container} from "./style.ts";

interface YourPlaylistProps {
    title: string;
    description: string;
    button: string;
    onClick: () => void;
}

const YourPlaylist = ({ title, description, button, onClick}: YourPlaylistProps) => {
    return (
        <Container>
            <h4>{title}</h4>
            <p>{description}</p>

            <div>
            <button onClick={onClick}>{button}</button>
            </div>
        </Container>
    );
};

export default YourPlaylist;

