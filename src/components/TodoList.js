import React, { useState } from 'react';
import { VStack, HStack, Input, Button, Text, IconButton, Box } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <VStack w="100%" spacing={4}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <HStack>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="할 일을 입력하세요"
            size="lg"
          />
          <Button
            colorScheme="purple"
            px={8}
            type="submit"
            size="lg"
          >
            추가
          </Button>
        </HStack>
      </form>

      <VStack w="100%" spacing={2} align="stretch">
        {todos.map(todo => (
          <Box
            key={todo.id}
            p={4}
            bg="white"
            borderRadius="lg"
            boxShadow="sm"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack spacing={4}>
              <IconButton
                icon={<CheckIcon />}
                colorScheme={todo.completed ? "green" : "gray"}
                onClick={() => toggleTodo(todo.id)}
                aria-label="완료"
              />
              <Text
                textDecoration={todo.completed ? "line-through" : "none"}
                color={todo.completed ? "gray.500" : "black"}
              >
                {todo.text}
              </Text>
            </HStack>
            <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              onClick={() => deleteTodo(todo.id)}
              aria-label="삭제"
            />
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

export default TodoList; 