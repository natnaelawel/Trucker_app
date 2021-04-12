import * as React from "react";
import classes from "./payment_table.module.scss";
import { Box, Button, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import MaterialTableIcons from "./MaterialTableIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paid_btn: {
    width: "100px",
    color: "#20cccc",
    borderRadius: "5px",
    backgroundColor: "#111",
  },
  pending_btn: {
    width: "100px",
    color: "white",
    borderRadius: "5px",
    backgroundColor: "#c00",
    border: "1px solid red",
  },
});

const PaymentTable = () => {
  const classes = useStyles();

  const columns = [
    {
      field: "id",
      title: "ID",
      width: "100%",
      render: ({ id }) => {
        return <Box>{id}</Box>;
      },
    },
    {
      field: "pickUp",
      title: "Pick up",
      width: "100%",
      render: ({ pickUp }) => {
        return <Box>{pickUp}</Box>;
      },
    },
    {
      field: "destination",
      title: "Destination",
      width: "100%",
      render: ({ destination }) => {
        return <Box>{destination}</Box>;
      },
    },
    {
      field: "paymentType",
      title: "Payment Type",
      width: "100%",
      render: ({ paymentType }) => {
        return <Box>{paymentType}</Box>;
      },
    },
    {
      field: "status",
      title: "Status",
      width: "100%",

      render: ({ status }) => {
        return (
          <Button
            className={
              status == "Paid" ? classes.paid_btn : classes.pending_btn
            }
            // onClick={(event) => props.action.onClick(event, props.data)}
            variant="contained"
            style={{ textTransform: "capitalize" }}
            size="small"
          >
            <Typography>{status}</Typography>
          </Button>
        );
      },
    },
    {
      field: "total",
      title: "Total",
      type: "numeric",
      width: "100%",
      render: ({ total }) => {
        return <Box>{total}</Box>;
      },
    },
    {
      field: "driver",
      title: "Driver",
      width: "100%",
      render: ({ driver }) => {
        return <Box>{driver}</Box>;
      },
    },
    {
      field: "orderPlacedDate",
      title: "Order Placed Date",
      width: "100%",
      render: ({ orderPlacedDate }) => {
        return <Box>{orderPlacedDate}</Box>;
      },
    },
    {
      field: "orderCompletedDate",
      title: "Order Completed Date",
      width: 150,
      render: ({ orderCompletedDate }) => {
        return <Box>{orderCompletedDate}</Box>;
      },
    },
  ];
  const rows = [
    {
      id: 1,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "Pending",
      total: 52.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 2,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "Paid",
      total: 43.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 3,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "pending",
      total: 52.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 4,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "pending",
      total: 52.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 5,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "pending",
      total: 52.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 6,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "Paid",
      total: 56.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 7,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "pending",
      total: 22.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 8,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "Paid",
      total: 52.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 9,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "Pending",
      total: 55.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
    {
      id: 10,
      pickUp: "2604 Washington Rd.....0928",
      destination: "2604 Washing.....0928",
      paymentType: "Credit Card / Prepay",
      status: "Paid",
      total: 32.0,
      driver: "Rim Chong-Suk",
      orderPlacedDate: "Nov 21. 2020",
      orderCompletedDate: "Nov 22. 2020",
    },
  ];

  return (
    <MaterialTable
      icons={MaterialTableIcons}
      title={false}
      columns={columns}
      data={rows}
      options={{
        pageSize: 8,
        pageSizeOptions: [8, 16, 32],
        search: false,
        toolbar: false,
        headerStyle: {
          backgroundColor: "#20cccc",
          color: "#FFF",
          maxHeight: "20px",
          padding: "0 16px",
        },
        sorting: true,
      }}
    />
  );
};

export default PaymentTable;
