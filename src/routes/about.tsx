import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-2">About Us</h2>
      <p className="text-gray-800">This is About Us</p>
    </div>
  );
}
