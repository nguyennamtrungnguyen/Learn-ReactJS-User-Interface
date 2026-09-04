import React, { useEffect, useState } from "react";

const SearchPostByFilter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterPost] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getApi = async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();

        setPosts(data);
        setFilterPost(data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Lỗi khi load dữ liệu lên màn hình!");
      }
    };

    getApi();
  }, []);

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase()),
    );

    setFilterPost(filtered);
  };

  return (
    <div>
      <p htmlFor="post">Input Title Post (least one character)</p>

      <input
        id="post"
        style={{ border: "1px solid black" }}
        type="text"
        placeholder="Enter title post"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {loading && (
        <p style={{ color: "blue", fontWeight: "bold" }}>Loading...</p>
      )}

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {search.length >= 1 &&
        filterPost.map((post) => (
          <div key={post.id}>
            <p style={{ color: "red" }}>{post.title}</p>
            <p style={{ color: "gray" }}>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchPostByFilter;
