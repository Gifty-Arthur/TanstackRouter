export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const fetchUser = async (userId: string) => {
  console.log(`Fetching user with id ${userId}...`);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: User = await res.json();
  return data;
};

export const fetchUsers = async (pageNumber: object) => {
  console.log("Fetching users...");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?page=${pageNumber}`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: User[] = await res.json();
  return data;
};
