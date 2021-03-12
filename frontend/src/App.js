import './App.css';
import MenuRouters from './router/MenuRouter';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
    gsap.registerPlugin(ScrollTrigger);
    return (
        <div className="App">
            <MenuRouters />
        </div>
    );
}

export default App;
