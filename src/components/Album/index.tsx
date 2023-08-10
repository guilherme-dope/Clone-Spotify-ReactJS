import {Container} from "./style.ts";
import {BsFillPlayFill} from "react-icons/bs";

interface AlbumProps {
    image: string;
    title: string;
    subtitle: string;
}

const Album = ({image, title, subtitle}: AlbumProps) => {
    return (
        <Container>
            <a href="">
                {" "}
                <BsFillPlayFill/>{" "}
            </a>
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </Container>
    );
};

export default Album;
