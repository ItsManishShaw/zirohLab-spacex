import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import "./customPagination.css";

const customPagination = props => {
  const {
    handlePageChange,
    handlePerRowsChange,
    page,
    setPage,
    pageInfo,
    Rows,
    setRows,
  } = props;
  function TablePaginationActions() {
    const handleFirstPageButtonClick = () => {
      handlePageChange(0);
      setPage(0);
    };
    const handleBackButtonClick = () => {
      handlePageChange(page - 1);
      setPage(page => page && page - 1);
    };

    const handleNextButtonClick = () => {
      handlePageChange(parseInt(page) + 1);
      setPage(page => page + 1);
    };

    const handleLastPageButtonClick = () => {
      handlePageChange(pageInfo.totalPages - 1);
      setPage(pageInfo.totalPages - 1);
    };
    return (
      <div className="customPaginationContainer">
        <div className="customPaginationRowsPrPage">
          <p className="customPaginationPara">Rows Per page: </p>
          <select
            className="selectPagination"
            onChange={e => {
              setRows(e.target.value);
                handlePerRowsChange(e.target.value, page + 1);
            }}
          >
            <option
              selected={Rows == "10" ? "selected" : false}
              value="10"
              className="selectOptionPagination"
            >
              10
            </option>
            <option
              selected={Rows == "20" ? "selected" : false}
              value="20"
              className="selectOptionPagination"
            >
              20
            </option>
            <option
              selected={Rows == "50" ? "selected" : false}
              value="50"
              className="selectOptionPagination"
            >
              50
            </option>
            <option
              selected={Rows == "100" ? "selected" : false}
              value="100"
              className="selectOptionPagination"
            >
              100
            </option>
            <option
              selected={Rows == "200" ? "selected" : false}
              value="200"
              className="selectOptionPagination"
            >
              200
            </option>
            <option
              selected={Rows == "500" ? "selected" : false}
              value="500"
              className="selectOptionPagination"
            >
              500
            </option>
            <option
              selected={Rows == "1000" ? "selected" : false}
              value="1000"
              className="selectOptionPagination"
            >
              1000
            </option>
          </select>
          <p className="customPaginationPara">
            {parseInt(pageInfo.number) * parseInt(pageInfo.size)} -
            {parseInt(pageInfo.number) * parseInt(pageInfo.size) +
              parseInt(pageInfo.size) <
            parseInt(pageInfo.totalElements)
              ? parseInt(pageInfo.number) * parseInt(pageInfo.size) +
                parseInt(pageInfo.size)
              : parseInt(pageInfo.totalElements)}{" "}
            of {pageInfo.totalElements}
          </p>
        </div>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={parseInt(pageInfo.totalPages) - 1 == page}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={parseInt(pageInfo.totalPages) - 1 == page}
          aria-label="last page"
        >
          <LastPageIcon />
        </IconButton>
      </div>
    );
  }

  return (
    <div>
      <TablePaginationActions />
    </div>
  );
};

export default React.memo(customPagination);
