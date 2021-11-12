import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { withStyles } from "@mui/styles";
import { data } from "../../MockData/MockData";
import MaterialTable from "material-table";
import "./ShoppingList.css";
import DeliverOperation from "./DeliverOperation";

const styles = (theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing?.unit * 3,
    overflowX: "hide",
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
});
function ShoppingList(props) {
  const [prodList, setProdList] = React.useState(data.products);
  const { classes } = props;
  React.useMemo(() => {
    const newArr = prodList.map((val) => ({
      ...val,
      quantity: val && val.gift ? 1 : 0,
      subtotal: Number(val.price) * 1,
    }));
    setProdList(newArr);
  }, []);
  const handleQuanity = (id, format) => {
    let changedVal = prodList.map((val) => {
      let quantity = val.quantity;
      if (val.id === id) {
        format === "inc" ? quantity++ : quantity - 1 >= 0 && quantity--;
      }
      val.quantity >= 0 &&
        (val.subtotal = Number(val.price) * Number(quantity + 1));
      return { ...val, quantity };
    });
    setProdList(changedVal);
  };
  let subTot = 0;
  prodList.forEach((val) => {
    subTot += Number(val?.subtotal);
  });
  return (
    <TableContainer id="shopping-list" component={Paper}>
      <MaterialTable
        title="Simple Action Preview"
        className={classes.root}
        style={{ maxWidth: "90vw", overflow: "auto" }}
        columns={[
          {
            title: "Product",
            field: "name",
            render: (val) => {
              return (
                <div>
                  <p className="prod-img">
                    <img
                      src={
                        require(`../../static/images/${val.imageUrl}`).default
                      }
                      alt={val.name}
                    />
                  </p>
                  <div>
                    {val?.gift && (
                      <span className="gift-view">
                        GIFT
                        <br />
                      </span>
                    )}
                    {val?.tagline && (
                      <span className="cashback-view">
                        {val?.tagline}
                        <br />
                      </span>
                    )}
                    {val.name}
                    <br />
                    {val?.desc}
                  </div>
                </div>
              );
            },
          },
          { title: "Price", field: "price", render: (row) => row.price + " $" },
          {
            title: "Quantity",
            field: "quantity",
            render: (row) =>
              row && row.gift ? (
                1
              ) : (
                <div style={{ display: "inline" }}>
                  <span onClick={() => handleQuanity(row.id, "dec")}>
                    <img
                      src={
                        row.quantity === 0
                          ? require("../../static/icon/minus.png").default
                          : require("../../static/icon/minus-active.png")
                              .default
                      }
                      alt="minus"
                    />
                  </span>
                  <span style={{ border: "1px solid #777", padding: 10 }}>
                    {row?.quantity}
                  </span>
                  <span onClick={() => handleQuanity(row.id, "inc")}>
                    <img
                      src={require("../../static/icon/plus.png").default}
                      alt="plus"
                    />{" "}
                  </span>
                </div>
              ),
          },
          {
            title: "Subtotal",
            field: "subtotal",
            render: (row) => <div>{row?.subtotal + "  $"}</div>,
          },
        ]}
        data={prodList}
        options={{
          showTitle: false,
          paging: false,
          search: false,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowDelete: (oldData) =>
            new Promise(async (resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...prodList];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setProdList([...dataDelete]);
                resolve();
              }, 1000);
            }),
        }}
      />
      <DeliverOperation data={data} subTot={subTot} prodList={prodList} />
    </TableContainer>
  );
}
export default withStyles(styles)(ShoppingList);
