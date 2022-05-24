import { ActionTypes } from '@mui/base';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const mapStateToProps = (state: any) => {
  pods: state.pods;
};

const mapDispatchToProps = (dispatch: any) => ({
  // create functions that will dispatch action creators
  // getPods: () => dispatch(actions.getPods()),
  getPods: async () => {
    let pods = await actions.getPods;
    dispatch(actions.getPods(pods));
  },
});

const StructurePage = (props: any): JSX.Element => {
  const podsList = [];

  useEffect(() => {
    // const fetchPodData = async () => {
    //   const data = await fetch('api/structure/pod');
    //   const json = await data.json();
    //   console.log(json);

    //   // console.log('data HERE', JSON.parse(data));
    // };
    // fetchPodData();

    props.getPods();

    // const response = await fetch(request);
    // const body = await response.json();
    // return body;

    // fetch('api/structure/pod')
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .then((res: any) => res.json())
    //   .then((data) => {
    //     console.log('MAKE FETCH HAPPEN', data);
    //   });
  });

  return (
    <div
      style={{
        background: 'lightblue',
        color: 'white',
        marginLeft: '250px',
        marginTop: '25px',
        marginRight: '10px',
        height: '1000px',
        // width: 'vw',
      }}
    >
      Hello from Structure Page
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(StructurePage);
