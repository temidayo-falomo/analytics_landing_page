import React from "react";
import { useState } from "react";
import { cardData, links } from "../../data";
import {
  FooterContainer,
  FooterNav,
  PricingCard,
  PricingCards,
  StyledFooter,
  TopFooter,
} from "./Footer.styled";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="parent">
      <StyledFooter>
        <FooterContainer>
          <TopFooter>
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Iusto facilis aliquid
              tempore eligendi ipsum, laudantium debitis iure animi dolore
              adipisci, quasi placeat ducimus ex aliquam
            </p>
          </TopFooter>

          <PricingCards>
            {cardData.map((item) => {
              const { id, priceLevel, users, price, time, buttonText } = item;
              return (
                <PricingCard
                  key={id}
                  backColor={id % 2 === 0 && "#FFFFFF"}
                  color={id % 2 === 0 && "#172755"}
                  opacity={id % 2 === 0 && "1"}
                  border={id % 1 === 0 && "1px white solid"}
                  buttonColor={id % 2 === 0 && "#EF2A82"}
                  buttonColorHover={id % 2 === 0 && "#e63b88"}
                >
                  <h3>{priceLevel}</h3>
                  <p>{users}</p>
                  <div className="underline"></div>
                  <div className="price-time">
                    <h2>{price}</h2>
                    <p>{time}</p>
                  </div>
                  <button>{buttonText}</button>
                </PricingCard>
              );
            })}
          </PricingCards>

          <FooterNav>
            <section>
              <div>
                <img src="./Assets/Subtract.svg" alt="" />
                <img src="./Assets/ANALYTICS.svg" alt="" />
              </div>
              <div className="links">
                {links.map((item) => {
                  const { id, text } = item;
                  return <p key={id}>{text}</p>;
                })}
              </div>
              <div className="icons">
                <img src="./Assets/social buttons.png" alt="" />
              </div>
            </section>
          </FooterNav>
        </FooterContainer>
        <img
          src="./Assets/Subtract Footer.svg"
          alt=""
          className="giant-subtract"
        />
      </StyledFooter>
    </div>
  );
}

export default Footer;
