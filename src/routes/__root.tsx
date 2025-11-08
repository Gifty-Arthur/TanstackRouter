import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <div className="container mx-auto max-w-xl">
      <Navbar />
      <hr className="border-gray-300" />
      <Outlet />
    </div>
  );
}
