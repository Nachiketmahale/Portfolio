import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer} from './FooterStyles';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>
        Chat
      </LinkTitle>
      <SocialIcons href="https://wa.me/917558518951" style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"10px"}}>
            {/* <AiFillGithub size="3rem" /> */}
            <AiOutlineWhatsApp size="3rem" />
             +91 7558518951
      </SocialIcons>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>
        Email
      </LinkTitle>
      <SocialIcons href="mailto:tonachiketmahale@gmail.com" style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"10px",width:"300px"}}>
            {/* <AiFillGithub size="3rem" /> */}
            <AiOutlineMail size="3rem" />
            tonachiketmahale@gmail.com
             {/* tonachiketmahale@gmail.com */}
      </SocialIcons>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; 2024 
            <Link href="https://www.vipuljha.com">
            Nachiket Mahale
            </Link>
            All rights reserved.
            </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Nachiketmahale">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/nachiket-mahale-568a0022a/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://x.com/nachiket_mahale">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
