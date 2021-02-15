import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://drive.google.com/uc?id=1RY3sPTE1etykrkzl2w_A1jBxAHOpv5wZ',
  },
  {
    imgPath:
      'https://drive.google.com/uc?id=1eyLlctVD_swV9_f8jwruEsQsTgutSLTa',
  },
  {
    imgPath:
      'https://drive.google.com/uc?id=163xi0nPr6WcbKEal6s_BAORDkS7Kb3cL',
  },
  {
    imgPath:
      'https://drive.google.com/uc?id=1YuczwK-uJyv6ofCtXfqGLKucZ0Z26VEO',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    flexGrow: 1,
    maxHeight: 500,
  },
  img: {
    height: 500,
    display: 'block',
    maxWidth: 1400,
    overflow: 'hidden',
    width: '100%',
    float: 'center'
  },
  steperr: {
    background: '#ffffff',
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        color="primary"
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                <div class="contenedor">
              <img className={classes.img} src={step.imgPath} alt={step.label}/>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
         className={classes.steperr}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
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
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;