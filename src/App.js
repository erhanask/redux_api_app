import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./components/Home";
import {Detail} from "./components/Detail";
import {Quotes} from "./components/Quotes";
import {QuoteDetail} from "./components/QuoteDetail";


function App() {
    return (
        <div className="App">
            <nav>
                <Link to={'/'}>Characters</Link>
                <Link to={'/quotes'}>Quotes</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/char/:char_id" element={<Detail/>}/>
                <Route path="/quotes" element={<Quotes/>}/>
                <Route path="/quotes/:quote_id" element={<QuoteDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;
