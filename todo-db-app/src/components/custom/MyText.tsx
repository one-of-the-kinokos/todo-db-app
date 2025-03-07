import { Text } from "@chakra-ui/react";
import { ComponentProps, ComponentType } from "react";

// Chakra UIのTextコンポーネントのPropsを引き継いだ型を、MyTextコンポーネントのPropsの型として定義
export type MyTextPropsType = ComponentProps<typeof Text>;

function MyText(props: MyTextPropsType) {
  return (
    <>
      {/* colorの指定があればそれに従い、なければwhiteをデフォルトで指定する */}
      <Text color={props.color ? props.color : "white"} {...props} />
    </>
  );
}

export { MyText };
