// styles import

import './style.scss';

// assets import

require.context('./assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i)

// app call (temp)

import getMainPage from './components/mainPage';
import './components/functions/changeNumberCards.ts';
// import router from './components/router/router';

getMainPage();

console.log('Hello, World!');
