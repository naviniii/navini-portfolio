import Flower from '../components/Flower';
import Character from '../components/Character';
import './Home.css';


function Home(){
    return(
        <section className = "hero">
            <div className = "hero-content">
                <h1 className = "hero-name"> navini ariyasinghe </h1>
                <p className = "hero-est"> est. 2026</p>
                <p className = "hero-welcome-sign"> Welcome to my little world &hearts;</p>
            </div>

            <div className = "hero-scene">
                <Flower to = "/projects" label = "projects" variant = {1}/>
                <Character to = "/about" label = "about me"/>
                <Flower to = "/diary" label = "my digital diary" variant = {2} />
            </div>
        </section>
    );

}

export default Home;