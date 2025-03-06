import { MyText } from "@/components/custom/MyText";
import { Flex, Spacer } from "@chakra-ui/react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
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
        <MyText fontSize={"5xl"} fontWeight={"bold"}>
          Todo-DB
        </MyText>
        <Spacer minH={"20px"} maxH={"20px"} />
        <Link to={"/todo"}>
          <MyText fontSize={"xl"} textDecoration={"underline"}>
            ― START ―
          </MyText>
        </Link>
      </Flex>
    </>
  );
}
