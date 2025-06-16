import React, { useState } from 'react';

let ListCity = ({ cities }) => {

    return (<div>
        <ul>
            {cities.map((city, i) => {
              return  <li key={i}>{city}</li>
            })}
        </ul>
    </div>)
}
export default ListCity