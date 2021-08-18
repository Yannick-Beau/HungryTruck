// == Import npm
import React from 'react';

// == Import
import './toggle.scss';

// == Composant
const Toggle = () => (
  <div>
  <div class="switch-button">
    <input class="switch-button-checkbox" type="checkbox"></input>
    <label class="switch-button-label" for=""><span class="switch-button-label-span">Light</span></label>
  </div>
  </div>
);

// == Export
export default Toggle;
