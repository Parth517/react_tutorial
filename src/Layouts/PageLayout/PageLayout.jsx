/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react"
import Sidebar from '../../components/sidebar/sidebar'
import { useLocation } from "react-router-dom"
const PageLayout = ({children}) => {
    const {pathname}=useLocation()
  return (
    <Flex>
        {/*sidebar on left and content on right */}
        {pathname !=='/auth'?(
        <Box w={{base:"70px",md:"240px"}}>
            <Sidebar />Sidebar
        </Box>
        ):null}
        <Box flex={1} w={{base:"calc(100%-70px",md:"calc(100%-70px"}}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout
