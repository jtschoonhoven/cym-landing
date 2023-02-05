import { Box, Button, FormControl, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { HTMLAttributes } from 'react';

interface Props {
  title?: React.ReactElement;
  color?: HTMLAttributes<HTMLInputElement>['color'];
}

/**
 * An embedded Mailchimp email signup form.
 */
const EmailSignup: React.FC<Props> = ({ title, color }) => {
  color = color || 'black';
  return (
    <div id="mc_embed_signup">
      <Box
        component="form"
        action="https://show.us13.list-manage.com/subscribe/post?u=dcef62d2baadac35b443af1c9&amp;id=44ba8a8363&amp;f_id=0088e1e2f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        style={{ margin: 0, padding: 0 }}
        noValidate
      >
        <Box id="mc_embed_signup_scroll">
          {title ? <>{title}</> : <h2 color={color}>Subscribe for email updates</h2>}
          <Grid container flexDirection="row" spacing={0}>
            <Grid xs={12}>
              <FormControl style={{ padding: 0 }}>
                <OutlinedInput
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="email@domain.com"
                  aria-describedby="mce-EMAIL-HELPERTEXT"
                  sx={{ color, padding: 0 }}
                  endAdornment={
                    <InputAdornment position="end" style={{ width: '200px' }}>
                      <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        style={{ marginLeft: 0 }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                  inputProps={{ color }}
                  required
                />
              </FormControl>
            </Grid>
            <Grid>
              <div id="mce-responses">
                <div id="mce-error-response" style={{ display: 'none' }}></div>
                <div id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_dcef62d2baadac35b443af1c9_44ba8a8363" tabIndex={-1} value="" />
              </div>
            </Grid>
            <Grid xs={12}>
              <FormHelperText id="mce-EMAIL-HELPERTEXT"></FormHelperText>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default EmailSignup;
