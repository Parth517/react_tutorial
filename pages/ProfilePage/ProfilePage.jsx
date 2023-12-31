import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../src/components/Profile/ProfileHeader"
import ProfileTabs from '../../src/components/Profile/ProfileTabs'
import ProfilePosts from '../../src/components/Profile/ProfilePosts'

const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
        <Flex 
            py={10}
            px={4}
            pl={{base:4,md:10}}
            w={"full"}
            mx={"auto"}
            flexDirection={"column"}
        >
        <ProfileHeader />
        </Flex>
        <Flex
          px={{base:2,sm:4}}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.100"}
          direction={"column"}
        >
            <ProfileTabs />
            <ProfilePosts />
        </Flex>
    </Container>
  )
}

export default ProfilePage
