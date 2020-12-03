import React from 'react';
import './App.css';
import endPoints from './request';
import Row from './components/Row';
import Slide from './components/Slide';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Slide />
      <Row title="Netflix Trending" fetchUrl={endPoints.fetchNetflixOrignal} islarge/>
      <Row title="Trending Now" fetchUrl={endPoints.fetchTrending} />
      <Row title="Top Rated" fetchUrl={endPoints.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={endPoints.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={endPoints.fetchComedyMoveis} />
      <Row title="Horror Movies" fetchUrl={endPoints.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={endPoints.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={endPoints.fetchDocumentaries} />
    </div>
  );
}

export default App;
