import { Grid,VStack,Box,Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfiePost from './ProfilePost'
const ProfilePosts = () => {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() =>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  })
  return (
    <Grid templateColumns={{
      sm:"repeat(1,1fr)",
      md:"repeat(3,1fr)"
    }}
    gap={1}
    columnGap={1}
  >
  {isLoading && [0,1,2,3,4,5].map((_,idx)=>(
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Skeleton w={"full"} alignItems={"flex-start"} gap={4}>
              <Box h={"350px"}>Contents Wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
    {!isLoading && (
      <>
        <ProfiePost img='/img1.png'/>
        <ProfiePost img='/img2.png'/>
        <ProfiePost img='/img3.png'/>
        <ProfiePost img='/img4.png'/>
      </>
    )}
    </Grid>
  )
}

export default ProfilePosts
