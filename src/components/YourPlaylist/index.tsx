import {Container} from "./style.ts";
import Button from "../Button";

interface YourPlaylistProps {
    title: string;
    description: string;
    button: string;
    onClick: () => void;
}

const YourPlaylist = ({
                          title,
                          description,
                          button,
                          onClick,
                      }: YourPlaylistProps) => {
    return (
        <Container>
            <h4>{title}</h4>
            <p>{description}</p>

            <div className="btn">
                <Button onClick={onClick} label={button}></Button>
            </div>
        </Container>
    );
};

export default YourPlaylist;
