import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaLinkedin, FaGithub } from 'react-icons/fa';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
      <Box
        id='contato'
        bg={useColorModeValue('blue.900', 'gray.900')}
        color={useColorModeValue('whiteAlpha.900', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© Construído por Gabriel Benjamin - 2022 - Todos os direitos Reservados</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} onclick={()=> window.open('https://github.com/gbenjaminsc', '_blank')}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Linkedin'} onclick={()=> window.open("https://www.linkedin.com/in/gbenjamin-1/", '_blank')}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }