import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './state';
import 'materialize-css/dist/css/materialize.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
