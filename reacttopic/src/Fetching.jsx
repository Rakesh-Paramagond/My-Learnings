
const Fetching = function () {
  const data = [
    { id: 1, phone: 7685894994, city: "Jamkahndi" },
    { id: 2, phone: 67899577935, city: "alagur" },
  ];

  return (
    <div>
      <h1>Data Fetching </h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>{user.city}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Fetching };
