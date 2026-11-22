import React from 'react';
import {createRoot} from 'react-dom/client';
import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import {Theme} from '@astryxdesign/core/theme';
import {fccTheme} from './theme';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <Theme theme={fccTheme} mode="dark">
    <App />
  </Theme>
);
