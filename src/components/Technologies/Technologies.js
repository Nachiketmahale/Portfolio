import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";
import { Skills } from './Skills'
// console.log(Skills);
const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
    I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.
    </SectionText>
    <List style={{listStyle:"none",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px",marginBottom:"4rem"}}>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          {/* <picture>
            <Skills.Component size="3rem" />
          </picture> */}
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;