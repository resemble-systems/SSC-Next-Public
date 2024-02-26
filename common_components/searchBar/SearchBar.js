import React from "react";
import { Input, Space } from "antd";
import { useHistory } from "react-router-dom";
import styles from "./searchBar.module.sass";
import { useRouter } from "next/router";

const SearchBar = ({ styleApply, search }) => {
  const { Search } = Input;
  const router = useRouter();

  // console.log("searchBar");

  const onSearch = (value) => {
    if (value && value.length > 0) {
      router.push(
        search === "events"
          ? `/search?type=events&value=${value}`
          : search === "news"
          ? `/search?type=news&value=${value}`
          : ""
      );
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder={`search ${search}`}
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};

export default SearchBar;
