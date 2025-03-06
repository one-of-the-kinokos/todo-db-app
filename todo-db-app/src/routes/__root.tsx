import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Provider } from "@/components/ui/provider";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/custom/ErrorFallback";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Provider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </Provider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
