import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../recoil/SearchState";

const SearchUser = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [input, setInput] = useState("");

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch((prev) => ({ ...prev, keyword: input }));
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  // gọi API khi keyword thay đổi
  useEffect(() => {
    if (!search.keyword) return;

    const fetchData = async () => {
      setSearch((prev) => ({ ...prev, loading: true }));

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${search.keyword}`,
      );
      const data = await res.json();

      setSearch((prev) => ({
        ...prev,
        results: data,
        loading: false,
      }));
    };

    fetchData();
  }, [search.keyword]);
  return (
    <div>
      <h2>Search User</h2>

      <input
        type="text"
        placeholder="Nhập tên..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {search.loading && <p>Loading...</p>}

      {search.results.map((u) => (
        <div key={u.id}>
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
};

export default SearchUser;
