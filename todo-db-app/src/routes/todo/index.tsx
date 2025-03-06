import { ErrorFallback } from "@/components/custom/ErrorFallback";
import { MyText } from "@/components/custom/MyText";
import { useTodoPageViewModel } from "@/hooks/viewModels";
import { Button, Color, Flex, Input, Spacer } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Route = createFileRoute("/todo/")({
  component: RouteComponent,
});

function RouteComponent() {
  const newTaskInputRef = useRef<HTMLInputElement | null>(null);

  const todoPageViewModel = useTodoPageViewModel({
    newTaskInputRef: newTaskInputRef,
  });

  return (
    <>
      <Flex
        width={"100vw"}
        height={"auto"}
        minHeight={"100vh"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"purple.400"}
      >
        {/* アプリのタイトル */}
        <MyText fontSize={"5xl"} fontWeight={"bold"}>
          Todo-DB
        </MyText>
        <Spacer minH={"20px"} maxH={"20px"} />
        <Flex width={"80%"}>
          {/* 予定の入力欄 */}
          <Input
            ref={newTaskInputRef}
            roundedRight={"none"}
            width={"90%"}
            color={"white"}
            outlineColor={"purple.100"}
            borderColor={"purple.100"}
            placeholder={"Input your task."}
            _placeholder={{ color: "whiteAlpha.700" }}
            _focus={{
              outlineColor: "blackAlpha.50",
              borderColor: "purple.600",
            }}
          ></Input>
          {/* 予定の追加ボタン */}
          <Button
            width={"10%"}
            bgColor={"white"}
            roundedLeft={"none"}
            onClick={() => {
              todoPageViewModel.methods.createTaskButtonHandler();
            }}
          >
            <MyText color={"purple.400"}>ADD</MyText>
          </Button>
        </Flex>
        <Spacer minH={"50px"} maxH={"50px"} />
        {/* 表の項目名 */}
        <Flex width={"80%"} borderBottomWidth={"1px"} borderColor={"white"}>
          <Flex width={"10%"} justifyContent={"center"} alignItems={"center"}>
            <MyText>{`${"ID"}`}</MyText>
          </Flex>
          <Flex width={"70%"} justifyContent={"center"} alignItems={"center"}>
            <MyText>{`${"TASK"}`}</MyText>
          </Flex>
          <Spacer />
        </Flex>
        {/* Todoリストの描画 */}
        {todoPageViewModel.states.tasksList.map((element) => {
          return (
            <Flex key={element.id} width={"80%"} marginY={"10px"}>
              <Flex
                width={"10%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MyText>{`${element.id}`}</MyText>
              </Flex>
              <Flex
                width={"70%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MyText>{`${element.value}`}</MyText>
              </Flex>
              {/* 予定の削除ボタン */}
              <Button
                width={"20%"}
                bgColor={"purple.400"}
                onClick={() => {
                  todoPageViewModel.methods.deleteTaskButtonHandler(element.id);
                }}
              >
                <MyText textDecor={"underline"}>DELETE</MyText>
              </Button>
            </Flex>
          );
        })}
        <Flex
          width={"80%"}
          marginBottom={"20px"}
          borderBottomWidth={"1px"}
          borderColor={"white"}
        ></Flex>
      </Flex>
    </>
  );
}
