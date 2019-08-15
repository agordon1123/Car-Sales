import React from 'react';

const AddedFeature = props => {
  console.log('props in AddedFeature: ', props)

  return (
    <li>
      <button onClick={() => props.removeItem(props.feature, props.car)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
