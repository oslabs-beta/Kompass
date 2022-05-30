import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
/*
podInfo:
Creation Timestamp: metadata.creationTimestamp // => "2022-05-17T19:10:09.000Z"
App: metadata.labels.app
Name: metadata.name
Namespace: metadata.namespace

BUTTON for more Info
  // MODAL
  SPEC
  nodeName: spec.nodeName
  restartPolicy: spec.restartPolicy
  schedule: spec.schedulerName

  STATUS
  hostIP: status.hostIP
  phase: status.phase
  podIP: status.podIP
  start Time: status.startTime

  STATUS-CONDITIONS ARRAY
  if (type) then type
  status:status
  IF (message) then message
  if (reason) then reason
  lastTransitionTime: lastTransitionTime
*/

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PodModal = (props: any): JSX.Element => {
  // console.log('pod Struc', props.podData);
  console.log('items', props.items);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { spec, status, metadata } = props;
  const { conditions } = status;

  const allConditions: any = [];

  conditions.forEach((condition: any) => {
    allConditions.push(
      <div>
        {condition.type && (
          <Typography id='modal-modal-description' sx={{ mt: 1 }}>
            Type: {condition.type}
          </Typography>
        )}
        <Typography id='modal-modal-description' sx={{ mt: 0 }}>
          Status: {condition.status}
        </Typography>
        {condition.message && (
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Message: {condition.message}
          </Typography>
        )}
        {condition.reason && (
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Reason: {condition.reason}
          </Typography>
        )}
        <Typography id='modal-modal-description' sx={{ mt: 0 }}>
          Last Transition Time: {condition.lastTransitionTime}
        </Typography>
      </div>
    );
  });

  return (
    <>
      <Button variant='contained' size='small' onClick={handleOpen}>
        More Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <u>Pod: {metadata.name}</u>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Host IP: {status.hostIP}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Pod IP: {status.podIP}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Phase: {status.phase}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Created: {metadata.creationTimestamp}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Start Time: {status.startTime}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Namespace: {metadata.namespace}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Scheduled by: {spec.schedulerName}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Restart Policy: {spec.restartPolicy}
          </Typography>

          <br></br>
          <br></br>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            Condition:{' '}
          </Typography>
          {allConditions}
        </Box>
      </Modal>
    </>
  );
};
export default PodModal;

{
  /* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby='modal-modal-title'
  aria-describedby='modal-modal-description'
>
  <PodModal items={items} idx={idx} />
</Modal>; */
}
