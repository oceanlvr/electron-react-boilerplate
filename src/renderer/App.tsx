import routes from './routes/index';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Nav from './application/Nav/index';
import { GlobalStyle } from './style';
import { IconStyle } from '../renderer/assets/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store/index';

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
        <Nav></Nav>
      </HashRouter>
    </Provider>
  );
}
