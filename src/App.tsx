import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import routes from './config/routes'





export const App = () => {

 return (

  <>
  <Header />
    <Routes>
        { routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />} />
        ))}
    </Routes>
   <Footer />
  </>
 );
};
export default App;
