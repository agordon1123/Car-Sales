import React from 'react';

const AddedFeature = (props) => {
  console.log(props)
  // const [featureState, setFeatureState] = useState([])

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   return {
//     features: state.car.features
//   }
// }

// export default connect(mapStateToProps, {})(AddedFeature);
export default AddedFeature;
