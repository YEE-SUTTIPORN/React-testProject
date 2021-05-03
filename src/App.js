import { useState } from 'react';
import './App.css';
import AppSearch from './components/AppSearch';
import AppHeader from './components/Header';
import TattooItem from './components/Tattoo-item';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';

function App() {
    const [selectedTattoo, setSelectedTattoo] = useState(null);

    const [searchText, setSearchText] = useState('');

    function onTattooOpentClick(theTattoo) {
        setSelectedTattoo(theTattoo);
    }

    function onTattooCloseClick() {
        setSelectedTattoo(null);
    }

    const tattooElements = tattoos.filter((tattoo) => {
        return tattoo.title.includes(searchText);
    }).map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpentClick} />;
    });

    let tattooPost = null;

    if (!!selectedTattoo) {
        tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick} />
    }

    return (
        <div className="App">
            <AppHeader />
            <selection className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {tattooElements}
                    </div>
                </div>
            </selection>
            { tattooPost}
        </div>
    );
}

export default App;
