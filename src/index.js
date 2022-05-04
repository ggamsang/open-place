// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    // <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </StrictMode>
)
// ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
// registerServiceWorker();
