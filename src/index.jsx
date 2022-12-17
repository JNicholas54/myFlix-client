import React from 'react';
import ReactDOM from 'react-dom';

import { MainView } from './components/main-view/main-view';
import { MovieCard } from './components/movie-card/movie-card';

import Container from 'react-bootstrap/Container';

//the line below needs to come before the './index.scss' line
import 'bootstrap/dist/css/bootstrap.min.css';

// Import statement ot indicate that you need to bundle './index.scss'
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
    render() {
        return (
            <Container>
                <MainView />
            </Container>
        );
    }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container') [0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);