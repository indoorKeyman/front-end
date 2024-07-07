import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import butter_cut from "../image/butter_border_cut.png"


const images = [
  {
    imgPath: butter_cut
  },
  {
    imgPath: butter_cut
  },
  {
    imgPath: butter_cut
  },
  {
    imgPath: butter_cut
  },
];

function DetailCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const ColorButton2 = styled(Button)(({ theme }) => ({
    marginRight: "10px",
    width: "80px",
    height: "40px",
    backgroundColor: "#f5f5f5",
    color: "#060705",
    '&:hover': {
      backgroundColor: "#E0E0E0",

    },
  }));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (

    <Box
      sx={{
        width: '600px',
        margin: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={step.label} sx={{
            borderRadius: '10px',
            borderBottom: "solid  6px #060705",
            borderRight: "solid  6px #060705",
            borderLeft: "solid  2px #060705",
            borderTop: "solid  2px #060705",
          }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  width: 1,
                  overflow: 'hidden',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </Box>
        ))}
      </SwipeableViews>
      <Box sx={{ width: '500px', margin: '10px' }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <ColorButton2
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </ColorButton2>
          }
          backButton={
            <ColorButton2 size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </ColorButton2>
          }
        />
      </Box>
    </Box>
  );
}

export default DetailCarousel;