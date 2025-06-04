import React from 'react';
import { ChakraProvider, Container, Heading, VStack } from '@chakra-ui/react';
import TodoList from './components/TodoList';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md" py={10}>
        <VStack spacing={8}>
          <Heading as="h1" size="xl" color="purple.500">
            나의 할 일 목록
          </Heading>
          <TodoList />
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App; 