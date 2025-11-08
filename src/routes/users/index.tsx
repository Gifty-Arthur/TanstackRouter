import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchUsers } from "../../api/users";
import type { User } from "../../api/users";

export const Route = createFileRoute("/users/")({
  validateSearch: (search) => {
    return {
      page: search.page || 2,
    };
  },
  component: RouteComponent,
  loaderDeps: ({ search: { page } }) => [page],
  loader: async ({ deps: page }) => fetchUsers(page),
});

function RouteComponent() {
  const users = Route.useLoaderData();
  console.log("the data is", users);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-2">User Listing</h2>
      <p className="text-gray-800">This is Users Page</p>
      <ul>
        {users.map((u: User) => (
          <li key={u.id} className="mb-2">
            <Link
              className="text-blue-500 hover:text-blue-700"
              to="/users/$userId"
              params={{ userId: u.id.toString() }}
            >
              {u.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
