import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // step 5 bonus implementation - refs to track scroll position
  const headerRef = useRef();
  const scrollPosition = useRef(0);

  // determine scroll and if header should be visible or not
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = scrollPosition.current > currentScrollPos;

    headerRef.current.style.transform = visible
        ? 'translateY(0)'
        : 'translateY(-200px)';

    scrollPosition.current = currentScrollPos;
  };

  // useEffect to mount/unmount scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.url}>
                    <FontAwesomeIcon
                        icon={item.icon}
                        size={"2x"}
                    />
                </a>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                  href="/#projects"
                  onClick={handleClick('projects')}
              >
                Projects
              </a>
              <a
                  href="/#contact-me"
                  onClick={handleClick('contactme')}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
