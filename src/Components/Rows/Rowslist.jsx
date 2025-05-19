// components/Rowslist/Rowslist.jsx
import requests from '../../utils/requests';
import Row from '../Rows/Rows';
import './Rowslist.css';

const RowList = () => {
  return (
    <div className='app'>
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated Movies' fetchUrl={requests.fetchTopRatedMovies} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Row title='Music' fetchUrl={requests.fetchMusic} />
      <Row title='Adventure' fetchUrl={requests.fetchAdventure} />
    </div>
  );
};

export default RowList;
