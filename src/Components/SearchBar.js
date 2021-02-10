import React, { useState, useEffect } from "react";
import DATASET from "./dataSet";
import { useHistory, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

function SearchBar() {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const location = useLocation();
  let locationStr = location.search;

  locationStr = locationStr.replace("?", "");

  useEffect(() => {
    setQuery(locationStr);
  }, [locationStr]);

  const FormBlock = styled.div`
    margin-top: 100px;
  `;
  const Form = styled.form`
    display: flex;
    justify-content: center;
  `;
  const Input = styled.input`
    font-size: 18px;
    width: 50%;
    padding: 5px;
    align-self: center;
    border: none;
    border-bottom: 1px solid;
    outline: none;
  `;
  const ResultBlock = styled.div`
    display: flex;
    font-size: calc(16px + 0.6vw);
    padding: 50px;
  `;
  const ResultUl = styled.ul`
    margin: 0 auto 0 auto;
  `;
  const ResultList = styled.li`
    list-style: none;
  `;
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    history.push({
      pathname: "/",
      search: `${e.target.value}`,
    });
  }
  return (
    <div>
      <FormBlock>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search"
            autoFocus="on"
          />
        </Form>
      </FormBlock>
      <ResultBlock>
        <ResultUl>
          {query
            ? DATASET.filter((item) => {
                if (item.toLowerCase().includes(query.toLowerCase())) {
                  return item;
                }
                return false;
              }).map((item, index) => {
                return <ResultList key={index}>{item}</ResultList>;
              })
            : "Please Insert a Keyword"}
        </ResultUl>
      </ResultBlock>
    </div>
  );
}
export default SearchBar;