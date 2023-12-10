import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
      <AvatarGroup 
        size={{base:"xl" ,md:"2xl"}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name='Parth Deshpande' src="/profilepic.png" alt="Parth Deshpande"/>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} direction={{base:"column", sm:"row"}}
          justifyContent={{base:"center",sm:"flwx-start"}} 
          alignment={"center"}
          >
            <Text fontSize={{base:'sm',md:'lg'}}>
              Parth Deshpande
            </Text>

            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:'xs',md:'sm'}}>
                  Edit Profile  
              </Button>
            </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{base:2,sm:4}}>
        <Text fontSize={{base:"xs",m:"s"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>10</Text>
            Posts
          </Text>
          <Text fontSize={{base:"xs",m:"s"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>149</Text>
            Followers
          </Text>
          <Text fontSize={{base:"xs",m:"s"}}>
            <Text as="span" fontWeight={"bold"} mr={1}>180</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>Parth Deshpande</Text>
        </Flex>
        <Flex>
          <Text fontSize={"sm"}>Eu sunt id consectetur exercitation exercitati</Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader
