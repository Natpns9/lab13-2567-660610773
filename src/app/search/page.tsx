"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState("");

  //A hook that helps navigating each route programmatically
  const router = useRouter();

  const searchInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const searchInputOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") searchBtnOnClick();
  };

  const searchBtnOnClick = () => {
    console.log(searchInput.replaceAll(" ","%20"));
    router.push("/search/" + searchInput);
  };

  return (
    <div>
      <p className="fw-bold fs-4 text-center">Search Movie</p>
      <div className="d-flex gap-2">
        <input
          className="form-control"
          placeholder="Search movie..."
          onChange={searchInputOnChange}
          onKeyUp={searchInputOnKeyUp}
          value={searchInput}
        />
        <button className="btn btn-primary" onClick={searchBtnOnClick}>
          Search
        </button>
      </div>
    </div>
  );
}