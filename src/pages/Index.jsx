import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>More</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={10}>
        <Flex direction={{ base: "column", md: "row" }} maxW="container.xl" mx="auto" px={4} spacing={8}>
          <Box flex="2" mb={{ base: 4, md: 0 }}>
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" borderRadius="md" />
          </Box>
          <Box flex="3" pl={{ md: 8 }}>
            <Heading as="h2" size="xl" mb={4}>Featured Article Headline</Heading>
            <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Latest News Section */}
      <Box py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={6}>Latest News</Heading>
          <VStack spacing={6}>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>News Article 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>News Article 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>News Article 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Market Updates Section */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={6}>Market Updates</Heading>
          <VStack spacing={6}>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Market Update 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Market Update 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Market Update 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Opinion Section */}
      <Box py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={6}>Opinion</Heading>
          <VStack spacing={6}>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Opinion Piece 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Opinion Piece 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="white" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Opinion Piece 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;