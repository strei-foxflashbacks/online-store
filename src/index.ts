// styles import

import './style.scss';

// assets import

require.context('./assets', false, /\.(?:ico|gif|png|jpg|jpeg|svg|ogg|mp3|wav)$/i)

// app call (temp)

import './components/functions/changeNumberCards.ts';
import router from './components/router/router';

router.navigateTo('/');
router.addUriListener()