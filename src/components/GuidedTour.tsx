import React, { useEffect, useState } from 'react';
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride';
import { useLocation } from 'react-router-dom';

const GuidedTour: React.FC = () => {
  const [run, setRun] = useState(false);
  const location = useLocation();

  const steps: Step[] = [
    {
      target: 'body',
      content: 'Welcome to हेरिटेज सफर! Let us guide you through our website.',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.nav-links',
      content: 'Navigate through different sections of our website here.',
      placement: 'bottom',
    },
    {
      target: '.search-section',
      content: 'Search for monuments, tours, and experiences.',
      placement: 'bottom',
    },
    {
      target: '.booking-section',
      content: 'Book tours, hotels, and transportation here.',
      placement: 'top',
    },
    {
      target: '.footer-section',
      content: 'Find additional information and contact details here.',
      placement: 'top',
    },
  ];

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenGuidedTour');
    if (!hasSeenTour && location.pathname === '/') {
      setTimeout(() => setRun(true), 3000);
    }
  }, [location]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false);
      localStorage.setItem('hasSeenGuidedTour', 'true');
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      styles={{
        options: {
          primaryColor: '#C14533',
          textColor: '#4A5568',
          backgroundColor: '#FFFFFF',
          overlayColor: 'rgba(0, 0, 0, 0.5)',
          spotlightPadding: 0,
          zIndex: 1000,
        },
        tooltip: {
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        buttonNext: {
          backgroundColor: '#C14533',
          padding: '8px 16px',
          borderRadius: '6px',
          color: 'white',
        },
        buttonBack: {
          color: '#4A5568',
          marginRight: '8px',
        },
        buttonSkip: {
          color: '#4A5568',
        },
      }}
      callback={handleJoyrideCallback}
      floaterProps={{
        disableAnimation: false,
      }}
    />
  );
};

export default GuidedTour;