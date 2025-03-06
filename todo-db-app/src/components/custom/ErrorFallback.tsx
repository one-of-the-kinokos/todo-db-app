import { Flex } from "@chakra-ui/react";
import { MyText } from "./MyText";

function ErrorFallback() {
  return (
    <>
      <Flex
        width={"100vw"}
        height={"auto"}
        minHeight={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        bgColor={"purple.400"}
      >
        <MyText>Oops!! We've detected an unexpected error!!</MyText>
      </Flex>
    </>
  );
}

export { ErrorFallback };
