import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const imgUrl = "https://i.pravatar.cc/150?img=7"
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar src="https://i.pravatar.cc/150?img=7" name="Pete Avatar" size="xl"  />
      <Heading size="xs">{greeting}</Heading>
      <Heading size="xl">{bio1}</Heading>
      <Heading size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
