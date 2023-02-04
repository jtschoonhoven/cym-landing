import { Box, Container, Dialog, Slide, useTheme } from '@mui/material';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import EmailSignup from '../email-signup/EmailSignup';
import Subtitle1 from '../typography/Subtitle1';
import HeroTitle from '../hero/HeroTitle';
import wheelIcon from '../../assets/images/wheel-icon.png';

/**
 * A MUI transition component.
 * https://mui.com/material-ui/react-dialog/#full-screen-dialogs
 */
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * A landing page specific to the No Sleep show.
 * Displays a full-screen modal if "nosleep" is in the URL path.
 */
const NoSleepLanding: React.FC = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(window.location.pathname.includes('nosleep'));

  const onClose = () => {
    setIsOpen(false);
    window.location.pathname = '/';
  };

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xl"
        open={isOpen}
        onClose={onClose}
        TransitionComponent={Transition}
        PaperProps={{ sx: { height: '100%', backgroundColor: theme.palette.grey[900] } }}
      >
        <Container
          maxWidth="xs"
          sx={{
            height: '100%',
            marginTop: 5,
            // backgroundImage: `url("${wheelIcon}")`,
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'right',
            // backgroundSize: 'contain',
          }}
        >
          <Box
            style={
              {
                // backgroundImage: `url("${wheelIcon}")`,
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'right',
                // backgroundSize: 'contain',
              }
            }
          ></Box>
          <HeroTitle />
          <EmailSignup
            title={
              <>
                <Subtitle1 sx={{ marginBottom: 2 }}>Subscribe to be notified when tickets go on sale!</Subtitle1>
              </>
            }
          />
        </Container>
      </Dialog>
    </>
  );
};

export default NoSleepLanding;
