import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">Growing Green in the City</h1>
      <p className="text-gray-800 mb-3">This a place of Growing </p>
      <ul>
        <li>Start with easy-to-grow herbs like basil.</li>
        <li>Start with easy-to-grow herbs like basil.</li>

        <li>Start with easy-to-grow herbs like basil.</li>

        <li>Start with easy-to-grow herbs like basil.</li>

        <li>Start with easy-to-grow herbs like basil.</li>

        <li>Start with easy-to-grow herbs like basil.</li>
      </ul>
    </div>
  );
}
