import Catalogue from "../Catalogue/Catalogue";
import Header from "../Header/Header";
import "./Home.css";
import MenuCat from "../MenuCat/MenuCat";
const Home = () => {
    
        return (
            <>
            <div className="Home">
                <Header />
                <Catalogue />
                <MenuCat />
            </div>
            </>
        );
    
}

export default Home;