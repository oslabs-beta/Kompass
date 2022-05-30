// import React, { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PodModal from './PodModal';

const PodStructure = (props: any): JSX.Element => {
  // console.log('pod Struc', props.podInfo);
  let idx: string | undefined;
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e: any) => {
    // console.log('e-id', e.target.id);
    idx = e.target.id;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //   <Modal
  //   open={open}
  //   onClose={handleClose}
  //   aria-labelledby="modal-modal-title"
  //   aria-describedby="modal-modal-description"
  // >

  const { items } = props.podInfo;

  console.log('items', items);

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
          // console.log(item);
          const { metadata, spec, status } = item;
          return (
            <div key={`podItem ${index}`} className='pod'>
              <div className='podInfo'>
                <p>Pod Name: {metadata.name}</p>
                <p>
                  App:{' '}
                  <span style={{ textTransform: 'capitalize' }}>
                    {metadata.labels.app}
                  </span>
                </p>
                {/* onClick => <ModalComponent metadata={metadata} spec={spec} status={status}  */}
                <PodModal metadata={metadata} spec={spec} status={status}>
                  More Info{' '}
                </PodModal>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default PodStructure;

// {idx && (
//   <Modal
//     open={open}
//     onClose={handleClose}
//     aria-labelledby='modal-modal-title'
//     aria-describedby='modal-modal-description'
//   >
//     <PodModal items={items} idx={idx} />
//   </Modal>
// )}
