import React, { useEffect, useState } from "react";

const GetUserByParameter = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState("");
  const [error, setError] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    if (!userID) return;

    if (userID < 1 || userID > 10) {
      setError("User not found");
      setUser(null);
      return;
    }

    const getApi = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${url}/${userID}`);
        const data = await response.json();

        setUser(data);
        setError("");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Lỗi khi load dữ liệu lên màn hình!");
        setUser(null);
      }
    };

    getApi();
  }, [userID]);

  return (
    <div>
      <input
        style={{ border: "1px solid black" }}
        type="number"
        placeholder="Enter userID (1-10)"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />

      {loading && (
        <p style={{ color: "blue", fontWeight: "bold" }}>Loading...</p>
      )}

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default GetUserByParameter;
