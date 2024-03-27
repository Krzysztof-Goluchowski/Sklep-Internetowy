import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "#fd5f26",
                    textAlign: "center",
                    marginTop: "10px",
                    marginBottom: "110px",
                    fontFamily: "Lucida Calligraphy"
                }}
            >
                “The body achieves what the mind believes”
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Our Story
                        </FooterLink>
                        <FooterLink href="#">
                            Team
                        </FooterLink>
                        <FooterLink href="#">
                            Achievements
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Personal Training
                        </FooterLink>
                        <FooterLink href="#">
                            Group Classes
                        </FooterLink>
                        <FooterLink href="#">
                            Nutritional Guidance
                        </FooterLink>
                        <FooterLink href="#">
                            Health Assessments
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Cracow
                        </FooterLink>
                        <FooterLink href="#">
                            Warsaw
                        </FooterLink>
                        <FooterLink href="#">
                            Gdansk
                        </FooterLink>
                        <FooterLink href="#">
                            Mechowo
                        </FooterLink>
                        <FooterLink href="#">
                            Szczyrzyc
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;