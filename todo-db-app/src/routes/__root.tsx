import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Provider } from "@/components/ui/provider";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/custom/ErrorFallback";
import { Flex } from "@chakra-ui/react";
import { MyText } from "@/components/custom/MyText";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Provider>
        <ErrorBoundary
          fallback={
            <>
              <Flex width={"100vw"} height={"auto"} minHeight={"100vh"}>
                <MyText>Oops!! We've detected an unexpected error!!</MyText>
              </Flex>
            </>
          }
        >
          <Outlet />
        </ErrorBoundary>
      </Provider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
