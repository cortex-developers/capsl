import React, { useState, useEffect } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import capsl from './capsl.mp4';  // Your letter-sized image

const AutoOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Automatically open modal
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="auto-open-modal"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 2,
          position: 'relative',
          maxWidth: '40vw',
          maxHeight: '100vh',
          textAlign: 'center',
          overflowY: 'auto',
          '@media (max-width: 600px)': {
            maxWidth: '90vw',  // Adjust modal size for mobile devices
            maxHeight: '90vh',
          },
        }}
      >
        {/* Close Icon Button at the top-right */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: -4,
            right: -4,
            color: 'black',  // Set icon color to white
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image */}
        <video 
  src={capsl}
  alt="Event"
  style={{ 
    width: '100%', 
    height: 'auto', 
    marginBottom: '20px', 
    maxHeight: '70vh',  // Ensure the video doesn't overflow on mobile
    objectFit: 'contain', // Maintain aspect ratio
  }} 
  autoPlay
  loop   // Optional: makes the video loop
  muted
  playsInline // Useful for mobile devices
/>

        {/* Close Button */}

      </Box>
    </Modal>
  );
};

export default AutoOpenModal;
