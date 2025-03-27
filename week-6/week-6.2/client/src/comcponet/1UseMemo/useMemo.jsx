import React, { useState, useEffect, useMemo, useCallback } from "react";

// Memoized UserList to prevent unnecessary re-renders
const UserList = React.memo(({ users }) => {
  console.log("UserList Rendered");
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
});

// Memoized SearchInput to prevent App from re-rendering on input change
const SearchInput = React.memo(({ search, onSearchChange }) => {
  console.log("SearchInput Rendered");
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={onSearchChange} // Using useCallback
    />
  );
});

function App() {
  const [users, setUsers] = useState([]); // State for fetched users
  const [search, setSearch] = useState(""); // State for search input

  // Fetch user data once when the component mounts
  useEffect(() => {
    console.log("Fetching Users...");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Memoized function to filter users based on search input
  const filteredUsers = useMemo(() => {
    console.log("Filtering Users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // Memoized search handler
  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <SearchInput search={search} onSearchChange={handleSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
