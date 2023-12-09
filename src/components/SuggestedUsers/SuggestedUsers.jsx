import {Link, Text, Flex, VStack, Box } from "@chakra-ui/react";
import  SuggestedHeader from '../SuggestedUsers/SuggestedHeader';
import SuggestedUser from "./SuggestedUser";
const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
              Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.100"} cursor={"pointer"}>
            See All
          </Text>
        </Flex>
        <SuggestedUser name='Jon Doe' followers={1000} avatar='1.png'/>
        <SuggestedUser name='Jane Doe' followers={1500} avatar='2.png'/>
        <SuggestedUser name='Test test' followers={100} avatar='3.png'/>

        <Box
          fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © Built By {" "}
            <Link href= 'https://github.com/Parth517' target='_blank' color= 'blue.500' fontSize={14}>
              Parth Deshpande
            </Link>
          </Box>
    </VStack>
  )
}

export default SuggestedUsers
