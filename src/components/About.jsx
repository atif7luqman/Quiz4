import React, { useState } from 'react';
import { Image} from 'react-bootstrap';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ab1 from '../assetes/images/ab1.png'; // Corrected the path to the image

export default function About() {
  const [value, setValue] = useState(0); // Assuming you have a state for the BottomNavigation value

  return (
    <div style={{ backgroundColor: '#FFEEFC' }}>
      <div className="m-5 p-5 text-center">
        <Image src={ab1} alt="Logo" fluid />
        <p>WRITEALY</p>
        <p className='fw-bold fs-3'>The only brainstorming solution <br />that lives up to the hype</p>

        {/* Assuming you have the 'value' and 'setValue' states defined */}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" />
          <BottomNavigationAction label="Favorites" />
          <BottomNavigationAction label="Nearby" />
          <BottomNavigationAction label="Favorites" />
          <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
      </div>
    </div>
  );
}
