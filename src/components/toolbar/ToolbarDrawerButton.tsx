import { Button, ButtonProps, Link, useTheme } from '@mui/material';
import React from 'react';
import Bold from '../typography/Bold';
import Colored from '../typography/Colored';

interface Props extends ButtonProps {
  text: string;
  href?: string;
}

/**
 * A button styled for the pop-out drawer menu.
 */
const ToolbarDrawerButton: React.FC<Props> = ({ text, href, children }) => {
  const {
    palette: { grey },
  } = useTheme();

  return (
    <>
      <Colored sx={{ width: '100%' }}>
        <Link sx={{ textDecoration: 'none' }} href={href}>
          <Button variant="text" sx={{ width: '100%', color: grey[900] }}>
            <Bold>
              {text}
              {children}
            </Bold>
          </Button>
        </Link>
      </Colored>
    </>
  );
};

export default ToolbarDrawerButton;
