import { Container } from "./style.ts";
5;
import SideMenu from "../../components/SideMenu";
import YourLibrary from "../../components/YourLibrary";

function Home() {
  return (
    <Container>
      <aside>
        <SideMenu />
        <YourLibrary />
      </aside>

      <main>
        <p>Hello</p>
      </main>
    </Container>
  );
}

export default Home;
