import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AppContext } from './context/contextApi';
import Feed from './Components/Feed'
import Header from './Components/Header'
import SearchResult from './Components/SearchResult'
import VideoDetails from './Components/VideoDetails'

function App() {
  return (
    <AppContext>
     <BrowserRouter>
     <div className='flex flex-col h-full'>
     <Header/>
     <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      </Routes>
     </div>
     </BrowserRouter>
    </AppContext>
  );
}

export default App;
