import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Usefiltercontext } from "../context/Filtercontext";
import styled from "styled-components";
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  .sort-list--grid {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .sort-btn {
      border: none;
      padding: 0.8rem 1rem;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection {
    .select {
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
      cursor: pointer;

      option {
        cursor: pointer;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .sort-list--grid,
    .product-data {
      display: none;
    }
  }
`;
export default function Sort() {
  const { grid_view, setGridView, setListView, filter_product, sortvalue } =
    Usefiltercontext();
  return (
    <Wrapper className="sort-section">
      {/* for 1st column */}
      <div className="sort-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        <p>{`${filter_product.length} Product Available`}</p>
      </div>
      <div className="sort-selection">
        <select
          name="sort"
          id="sort"
          className="select"
          onChange={(e) => sortvalue(e)}
        >
          <option>select range</option>
          <option value="lowest">price (lowest)</option>
          <option value="a-z">price (a-z)</option>
          <option value="z-a">price (z-a)</option>
          <option value="highest">price (highest)</option>
        </select>
      </div>
    </Wrapper>
  );
}
