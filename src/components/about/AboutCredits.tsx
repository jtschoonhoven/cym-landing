import React from 'react';
import { Typography, Unstable_Grid2 as Grid, styled } from '@mui/material';
import H2 from '../typography/H2';
import '@fontsource/old-standard-tt';

const Bold = styled(Typography)({ textTransform: 'uppercase', display: 'inline', fontWeight: 700 });
const Italic = styled(Typography)({ fontFamily: 'Old Standard TT, serif', fontStyle: 'italic', display: 'inline' });
const BoldItalic = styled(Italic)({ fontWeight: 700 });

const AboutCredits: React.FC = () => {
  return (
    <>
      <H2 sx={{ marginBottom: 0 }}>Credits</H2>
      <Grid container spacing={3} marginTop={1}>
        <Grid xs={12} textAlign="right">
          <BoldItalic>Directed by Jonathan Schoonhoven & Ellie DiBerardino</BoldItalic>
          <br />
          <BoldItalic>Written by Jonathan Schoonhoven</BoldItalic>
          <br />
          <BoldItalic>Technical Direction & Fabrication by Alex Howard</BoldItalic>
          <br />
          <BoldItalic>A production by Say Nothing and Leave</BoldItalic>
        </Grid>
        <Grid md={6} sm={12}>
          <Bold>Audio & Music: </Bold>
          <Italic>Ellie DiBerardino</Italic>
          <br />
          <Bold>Videos: </Bold>
          <Italic>Bryan Bigler, Ellie DiBerardino</Italic>
          <br />
          <Bold>Visual Design: </Bold>
          <Italic>Jonathan Schoonhoven, Netta Schwarz</Italic>
          <br />
          <Bold>Marketing: </Bold>
          <Italic>S. Caldwell</Italic>
          <br />
          <Bold>Set Design: </Bold>
          <Italic>Andrew Somerville, Alyssa Larson</Italic>
          <br />
          <Bold>Booth Design & Build: </Bold>
          <Italic>Jonathan Schoonhoven, Carson Auld</Italic>
          <br />
          <Bold>Diagnosis Tool: </Bold>
          <Italic>Ellie DiBerardino, Alex Howard</Italic>
          <br />
          <Bold>Asst. Technical Director: </Bold>
          <Italic>Dave Kaplan</Italic>
        </Grid>
        <Grid md={6} sm={12}>
          <Bold>Dr. Masc: </Bold>
          <Italic>L.M. Bogad</Italic>
          <br />
          <Bold>Rogue Technician: </Bold>
          <Italic>Lily Lamboy</Italic>
          <br />
          <Bold>Production Support: </Bold>
          <Italic>Elise Liu</Italic>
          <br />
          <Bold>Voices: </Bold>
          <Italic>S. Caldwell, Jonathan Schoonhoven, Lou DiBerardino, Dan Gerbang, Ellie DiBerardino</Italic>
          <br />
          <Bold>Technicians: </Bold>
          <Italic>
            Alyssa Larson, Jae Starfox, Ryan Wolff, Dave Kaplan, Elise Liu, Lindsay Berkowitz, Dan Gerbang, Bryan
            Bigler, Evin Wolverton, Hannah Schoonhoven, S. Caldwell
          </Italic>
          <br />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutCredits;
