import { Avatar,Text, Flex, Link } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom';
const SuggestedHeader = () => {
  return (
   <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name="Parth" size={"lg"} src="./profilepic.png"/>
                <Text fontSize={12} fontWeight={"bold"}>
                    Parth
                </Text>
        </Flex>
        <Link
            as={RouterLink}
            to={"/auth"}
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.500"}
            cursor={"pointer"}
            style={{textDecoration:"none"}}
            _hover={{color:"red.600"}}
            >Logout
        </Link>
   </Flex>
  );
};

export default SuggestedHeader
