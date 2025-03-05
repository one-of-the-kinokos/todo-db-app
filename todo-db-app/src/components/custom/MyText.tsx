import { Text } from "@chakra-ui/react";
import { ComponentProps, ComponentType } from "react";

export type MyTextPropsType = ComponentProps<typeof Text>;

function MyText(props: MyTextPropsType) {
  return (
    <>
      <Text color={props.color ? props.color : "white"} {...props} />
    </>
  );
}

export { MyText };
