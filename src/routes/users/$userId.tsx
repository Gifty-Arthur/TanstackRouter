import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchUser } from "../../api/users";

export const Route = createFileRoute("/users/$userId")({
  loader: async ({ params: { userId } }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return fetchUser(userId);
  },
  component: RouteComponent,
  pendingComponent: () => <div className="p-10">Loading user details...</div>,
  errorComponent: ({ error }) => (
    <div className="p-10 text-red-500">
      Error fetching data: {error.message}
    </div>
  ),
});

function RouteComponent() {
  const user = Route.useLoaderData();

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2">User Details</h2>
      <div className="bg-gray-100 p-6 rounded-lg mt-4">
        <h3 className="text-2xl font-semibold mb-2">{user.name}</h3>
        <p className="text-gray-600 mb-1">
          <strong>Username:</strong> @{user.username}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Website:</strong> {user.website}
        </p>
        <p className="text-gray-600 mb-3">
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-gray-700">
            <strong>Company:</strong> {user.company.name}
          </p>
          <p className="text-gray-500 text-sm italic mt-1">
            "{user.company.catchPhrase}"
          </p>
        </div>
        <Link
          to="/users"
          search={{ page: 2 }}
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          &larr; Back to User Listing
        </Link>
      </div>
    </div>
  );
}
