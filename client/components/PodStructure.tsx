// import React, { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PodModal from './PodModal';

const PodStructure = (props: any): JSX.Element => {
  // console.log('pod struc', props.podInfo);
  const pod: any = props.podInfo.podList[0] || {};
  console.log('pod', pod);

  const { items } = pod.body || [];
  console.log('items', items);

  if (!items) {
    console.log('equals 0');
  }

  if (items) {
    return (
      <div
        className='podContainer'
        style={{
          background: '#121212',
          display: 'flex',
          width: '100%',
          zIndex: '-1',
        }}
      >
        {items.length &&
          items.map((item: any, index: any) => {
            // console.log('item', index, item);
            const { metadata, spec, status } = item;
            return (
              <div key={`podItem ${index}`} className='pod'>
                <div className='podInfo'>
                  <p>
                    <b>Pod Name:</b> {metadata.name}
                  </p>
                  <p>
                    <b>App:</b>{' '}
                    <span style={{ textTransform: 'capitalize' }}>
                      {metadata.labels.app}
                    </span>
                  </p>
                  <PodModal metadata={metadata} spec={spec} status={status}>
                    {/* More Info{' '} */}
                  </PodModal>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div
      className='podContainer'
      style={{
        background: '#121212',
        display: 'flex',
        width: '100%',
        zIndex: '-1',
      }}
    ></div>
  );
};
export default PodStructure;

// if (items) {
//   return (
//     <div
//       className='podContainer'
//       style={{
//         background: '#121212',
//         display: 'flex',
//         width: '100%',
//         zIndex: '-1',
//       }}
//     >
//       {items.length &&
//         items.map((item: any, index: any) => {
//           const { metadata, spec, status } = item;
//           return (
//             <div key={`podItem ${index}`} className='pod'>
//               <div className='podInfo'>
//                 <p>
//                   <b>Pod Name:</b> {metadata.name}
//                 </p>
//                 <p>
//                   <b>App:</b>{' '}
//                   <span style={{ textTransform: 'capitalize' }}>
//                     {metadata.labels.app}
//                   </span>
//                 </p>
//                 <PodModal metadata={metadata} spec={spec} status={status}>
//                   {/* More Info{' '} */}
//                 </PodModal>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// return (
//   <div
//     className='podContainer'
//     style={{
//       background: '#121212',
//       display: 'flex',
//       width: '100%',
//       zIndex: '-1',
//     }}
//   ></div>
// );
