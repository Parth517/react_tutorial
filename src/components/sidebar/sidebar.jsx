import { Avatar, Box, Flex,Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { CreatePostLogo, InstagramLogo,InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants"

import { AiFillHome } from "react-icons/ai" 
import { SlLogout } from "react-icons/sl";


const Sidebar = () => {
  const SidebarItems=[
    {
    icon:<AiFillHome size={25}/>,
    text:"Home",
    link:"/",
    },
    {
      icon:<SearchLogo />,
      text:"Search",
    },
    {
      icon:<NotificationsLogo/>,
      text:"Notifications",
    },
    {
      icon:<CreatePostLogo />,
      text:"Create",
    },{
      icon:<Avatar sime={"sm"} name="Parth Deshpande" src='/profilepic.png'/>,
      text:"Profile",
      link:"/asaprogrammer"
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px Solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{base:2,md:4}}>
    <Flex direction={"column"} gap={10} w="full" height={"full"}>
      <Link to={"/"}as={RouterLink} pl={2} display={{base:"none",md:"block"}}>
        <InstagramLogo />
      </Link>
      <Link to={"/"}as={RouterLink} pl={2} display={{base:"block",md:"none"}}
        borderRadius={6} cursor={"pointer"} _hover={{
          bg:"whiteAlpha.200",
        }}
        w={10}
      >
        <InstagramMobileLogo />
      </Link>
      <Flex>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {SidebarItems.map((item,index)=>(
            <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:"block",md:"none"}}
            >
                <Link
                display={"flex"}
                to={item.link}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{bg:"whiteAlpha.400"}}
                borderRadius={6}
                p={2}
                w={{base:10,md:"full"}}
                justifyContent={{base:"center",md:"flex-start"}}
                >
                  {item.icon}
                  <Box display={{base:"none",md:"Block"}}>
                    {item.text}
                  </Box>
                </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
      <Tooltip
            hasArrow
            label={"Logout"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{base:"block",md:"none"}}
            >
                <Link
                display={"flex"}
                to={"/auth"}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{bg:"whiteAlpha.400"}}
                borderRadius={6}
                p={2}
                w={{base:10,md:"full"}}
                mt={"auto"}
                justifyContent={{base:"center",md:"flex-start"}}
                >
                  <SlLogout size={25}/>
                  <Box display={{base:"none",md:"Block"}}>
                    Logout
                  </Box>
                </Link>
            </Tooltip>
    </Flex>
    </Box>
  )
}

export default Sidebar
