import {useEffect, useState} from 'react'

import './App.css'
import {
  Button,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  HStack,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td
} from "@chakra-ui/react"
import useStore from "./store/zustand";


function Data() {
    const items = useStore((state) => state.items);
    // global state setItems
    const revenue = useStore((state) => state.revenue);


    return(
        <>
           
            <HStack w="100%" h="100%">
                <Container boxShadow="dark-lg" padding="40px">
                    <Text fontSize='6xl' textAlign="center">DATA</Text>
                    <FormControl>
                        <Stack spacing="20px">
                            <FormLabel>Revenue</FormLabel>
                            <Input type="text" value={revenue} readOnly/>
                            <TableContainer>
                            <Table>
                                <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Title</Th>
                                    <Th>Price</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                {items.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.title}</Td>
                                    <Td>{item.price}</Td>
                                    </Tr>
                                )
                                })}
                                </Tbody>
                            </Table>
                            </TableContainer>
                        </Stack>
                    </FormControl>
                </Container>  
            </HStack>
        </>
    )
}

export default Data;