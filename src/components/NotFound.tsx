import { useNavigate } from "@tanstack/react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-800 mb-3">
        Here we will explore the Following features :-
      </p>
      <ul className="text-gray-600 text-sm">
        <li>File Based routing</li>
        <li>Dynamic Routing</li>
        <li>Nested Routing</li>
        <li>Data Loading</li>
        <li>Search Params</li>
        <li>Path Params</li>
        <li>Code Spliting</li>
        <li>Not Found Errors</li>
      </ul>

      <button onClick={() => navigate({ to: "/" })}>Start Over</button>
    </div>
  );
};

export default NotFound;
