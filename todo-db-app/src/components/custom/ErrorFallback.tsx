import { Flex } from "@chakra-ui/react";
import { MyText } from "./MyText";

function ErrorFallback() {
  return (
    <>
      <MyText>Oops!! We've detected an unexpected error!!</MyText>
    </>
  );
}

export { ErrorFallback };
