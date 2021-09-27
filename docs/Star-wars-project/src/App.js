import React from 'react';
import './App.css';
// import ReactAudioPlayer from 'react-audio-player';
import Table from './Components/Table';
import Filters from './Components/Filters';
import PlanetsProvider from './Context/PlanetProvider';
import OrderFilter from './Components/OrderFilter';

function App() {
  return (
    <PlanetsProvider>
      <header className="background-starwars">
        <iframe
          src="https://open.spotify.com/embed/track/2bw4WgXyXP90hIex7ur58y?theme=0"
          width="100%"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="StarWars"
          className="MarchImperial"
        >
          Star Wars
        </iframe>
        <Filters />
        <OrderFilter />
      </header>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
