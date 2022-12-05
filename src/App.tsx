import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router.jsx'
import { GlobalStyle } from './Style/GlobalStyle';

export function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </>
  )
}