import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  maxHeight: 500,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  color: 'whitesmoke',
  overflowY: 'auto',
};

const PodModal = (props: any): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { spec, status, metadata } = props;
  const { conditions } = status;

  const allConditions: any = [];

  conditions.forEach((condition: any, index: number) => {
    allConditions.push(
      <div key={index}>
        {condition.type && (
          <Typography id='modal-modal-description' sx={{ mt: 1 }}>
            <b>Type:</b> {condition.type}
          </Typography>
        )}
        <Typography id='modal-modal-description' sx={{ mt: 0 }}>
          <b>Status:</b> {condition.status}
        </Typography>
        {condition.message && (
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Message:</b> {condition.message}
          </Typography>
        )}
        {condition.reason && (
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Reason:</b> {condition.reason}
          </Typography>
        )}
        <Typography id='modal-modal-description' sx={{ mt: 0 }}>
          <b>Last Transition Time:</b> {condition.lastTransitionTime}
        </Typography>
      </div>
    );
  });

  return (
    <>
      <Button
        variant='contained'
        size='small'
        onClick={handleOpen}
        className='podBtn'
      >
        More Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className='modal'>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <u>
              <b>Pod:</b> {metadata.name}
            </u>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Host IP:</b> {status.hostIP}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Pod IP:</b> {status.podIP}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Phase:</b> {status.phase}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Created:</b> {metadata.creationTimestamp}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Start Time:</b> {status.startTime}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Namespace:</b> {metadata.namespace}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Scheduled by:</b> {spec.schedulerName}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>Restart Policy:</b> {spec.restartPolicy}
          </Typography>

          <br></br>
          <br></br>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            <b>CONDITION:</b>{' '}
          </Typography>
          {allConditions}
        </Box>
      </Modal>
    </>
  );
};
export default PodModal;
