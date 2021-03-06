import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Box, Typography } from "@material-ui/core";
import BidRow from "./BidRow/BidRow";
import classes from "./bidlist.module.scss";
const columns = [
  { id: "driver", label: "Driver", minWidth: 120, align: "center" },
  { id: "vehicle", label: "Vehicle", minWidth: 120, align: "center" },
  {
    id: "distance",
    label: "Distance",
    minWidth: 100,
    // align: "right",
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    // align: "right",
    format: (value) => value.toFixed(2),
    // format: (value) => value.toLocaleString("en-US"),
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 150,
    align: "center",
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const BidList = () => {
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={classes.root}>
      <Box mb={2}>
        <Typography variant="h4">Bids</Typography>
      </Box>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ border: "1px solid red" }}>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, height: "20px" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * 4, page * 4 + 4).map((row, index) => {
              return <BidRow column={row} index={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={4}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[]}
      />
    </Paper>
  );
};

export default BidList;
