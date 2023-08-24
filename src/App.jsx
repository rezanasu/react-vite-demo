import {useState, useEffect} from "react"

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
  Td,
  Center
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import useStore from "./store/zustand";




const productDatabase = [
  {
    id: 1,
    title: "Product A",
    price: 150000
  },
  {
    id: 2,
    title: "Product B",
    price: 200000
  },
  {
    id: 3,
    title: "Product C",
    price: 300000
  },
  {
    id: 4,
    title: "Product D",
    price: 450000
  },
  {
    id: 5,
    title: "Product E",
    price: 500000
  }
]

// Function Component
function App() {
  // States
  // useState => mirip seperti variable. 
  const [title, setTitle] = useState("")
  // global state items
  
  const items = useStore((state) => state.items);
  // global state setItems
  const setItems = useStore((state) => state.setItems)
  const revenue = useStore((state) => state.revenue);
  const setRevenue = useStore((state) => state.setRevenue)

  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const navigate = useNavigate();

  // Menjalankan codingan saat render pertama
  useEffect(() => {
    setItems(productDatabase)
    // setPrice(productDatabase[0].price)
  }, [])

  const handleChangeProduct = (e) => { 
    const currentID = e.target.value

    const foundItem = items.find((el) => el.id === +currentID);

    setTitle(foundItem.title);
    setPrice(foundItem.price);
  }

  const handleSubmit = (e) => {
    // Revenue
    setRevenue(price * quantity);
  }

  const handleNavigation = () => {
    navigate("/data")
  }

  return (
    <>
      <HStack w="100%" h="100%">
        <Container boxShadow="dark-lg" padding="40px">
          <Text fontSize='6xl' textAlign="center">SHOP</Text>
          {/* FormControl ==> Wrapper untuk forms */}
          <FormControl>
            <Stack spacing="20px">
              <FormLabel>Title</FormLabel>
              <Select onChange={handleChangeProduct}>
                <option disabled>Select Option</option>
                {items.map((item, index) => {
                  return <option key={index} value={item.id}>{item.title}</option>
                })}
              </Select>
              <FormLabel>Quantity</FormLabel>
              <Input type="text" onChange={(e) => setQuantity(e.target.value)}/>
              <FormLabel>Price</FormLabel>
              <Input type="text" value={price} readOnly/>
              <FormLabel>Total Price</FormLabel>
              <Input type="text" value={price * quantity} readOnly/>
              <Button colorScheme="teal" onClick={handleSubmit}>SUBMIT</Button>
            </Stack>
          </FormControl>
        </Container>   
      </HStack>
      <Center>
        <Button colorScheme="teal" onClick={handleNavigation}>TO DATA</Button>
      </Center>

    </>
  )
}

export default App
