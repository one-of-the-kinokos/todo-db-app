import { Button, Flex } from "@chakra-ui/react";
import { MyText } from "./MyText";

/**
 * propsとして、予定のIDと内容、削除ボタンが押されたときに呼び出される関数を与える必要がある。
 * @param props
 * @returns
 */
function Row(props: { id: number; value: string; deleteFucntion: () => void }) {
  return (
    <>
      <Flex width={"100%"} marginY={"10px"}>
        {/* IDの表示 */}
        <Flex width={"10%"} justifyContent={"center"} alignItems={"center"}>
          <MyText>{`${props.id}`}</MyText>
        </Flex>
        {/* 予定の表示 */}
        <Flex width={"70%"} justifyContent={"center"} alignItems={"center"}>
          <MyText>{`${props.value}`}</MyText>
        </Flex>
        {/* 予定の削除ボタン */}
        <Button
          width={"20%"}
          bgColor={"purple.400"}
          onClick={() => {
            props.deleteFucntion;
          }}
        >
          <MyText textDecor={"underline"}>DELETE</MyText>
        </Button>
      </Flex>
    </>
  );
}

export { Row };
