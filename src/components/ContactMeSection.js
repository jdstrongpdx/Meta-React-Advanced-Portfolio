import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const url = "www.example.com";

  // watch for responses and display message when present
  useEffect(() => {
    if(response) {
      onOpen(response.type, response.message)
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: "John Doe",
      email: "johnDoe@gmail.com",
      type: "hireMe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
          "dolore magna aliqua."
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string().required("Required").min(25, "Must be at least 25 characters"),
    }),
    onSubmit: async (values) => {
      // useSubmit hook implementation
      await submit(url, values);
      // clear form if successful
      if (response.type === 'success') {
          formik.resetForm();
        }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" as="form" onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                  id="firstName"
                  isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel>Name</FormLabel>
                <Input {...formik.getFieldProps('firstName')} />
                {formik.errors.firstName && formik.touched.firstName ? (
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                  id="email"
                  isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel>Email</FormLabel>
                <Input {...formik.getFieldProps('email')} />
                {formik.errors.email && formik.touched.email ? (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                    id="type"
                    name="type"
                    {...formik.getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                  id="comment"
                  isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                {formik.errors.comment && formik.touched.comment ? (
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={formik.isSubmitting}>
                Submit
              </Button>
            </VStack>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
