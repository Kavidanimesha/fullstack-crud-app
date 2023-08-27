import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Books from '../src/pages/Books'
import NewBook from '../src/pages/NewBook'
import UpdateBook from '../src/pages/UpdateBook'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Books />} />
          <Route path='newbook' element = {<NewBook />} />
          <Route path='updatebook/:id' element = {<UpdateBook />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
