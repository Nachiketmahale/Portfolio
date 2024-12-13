import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi There!
    </SectionTitle>
    <SectionText>
     I am Nachiket Mahale,I'm a Full Stack Developer from Mumbai.I'm passionate about contributing to open-source projects and helping the developer community.
    </SectionText>
    <Button onClick={(e)=>{
      e.preventDefault();
      window.location.href='/files/resume.pdf';
    }}>My Resume</Button>
  </LeftSection>
 </Section> 
);

export default Hero;