import {Heading, Box, Image, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.
    return(
    <div>
         <Box bg="white" borderRadius="xl">
            <Image src={imageSrc} alt={title} borderRadius="xl" />
             <Box px={2} py={2}>
                <Heading size="md"
                         color="black"
                         px={4}
                         py={2}>
                    {title}
                </Heading>
                <Text color="grey"
                      px={4}
                      py={2}>
                    {description}
             </Text>
                <Text color="black"
                      px={4}
                      py={2}>
                    See more <FontAwesomeIcon
                                icon={faArrowRight}
                                size="1x"/>
                </Text>
             </Box>
         </Box>
    </div>
    )
};

export default Card;
