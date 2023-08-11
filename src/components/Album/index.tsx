import {Container} from "./style.ts";
import {BsFillPlayFill} from "react-icons/bs";

interface AlbumProps {
    image: string;
    title: string;
    subtitle: string;
    onClick: () => void;
}

const Album = ({image, title, subtitle, onClick,}: AlbumProps) => {
    return (
        <Container>
            <a href="">
                {" "}
                <BsFillPlayFill/>{" "}
            </a>
            <img onClick={onClick} src={image} alt=""/>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </Container>
    );
};

export default Album;
