import { Table, TableBody, TableContainer } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { product } from "../trend/data";
import { theme } from "../../../sharedComponents/theme";
import { Logo, PostBox, ProductButton, ProductCard } from "./css/product";
import { TableData } from "../member/css/member";
import { CardSub, TrendTitle } from "../footer/css/footer";
import { FormDiv } from "../../auth/css/auth";

const Product = () => {
  const [data, setData] = useState(product);

  return (
    <ProductCard>
      <FormDiv>
        <div>
          <TrendTitle>Latest Products</TrendTitle>
          <CardSub component={"small"} variant="body2">
            More than 400 new products
          </CardSub>
        </div>
        <div>
          <ProductButton onClick={() => setData(product)}>Month</ProductButton>
          <ProductButton
            onClick={() =>
              setData(
                product.filter((index) => index.id !== 3 && index.id !== 5)
              )
            }
          >
            Week
          </ProductButton>
          <ProductButton
            onClick={() => setData(product.filter((index) => index.id !== 1))}
          >
            Day
          </ProductButton>
        </div>
      </FormDiv>
      <TableContainer sx={{ marginTop: 2, maxHeight: 370 }}>
        <Table>
          <TableBody>
            {data.map((value, index) => {
              return (
                <tr key={index}>
                  <TableData sx={{ width: "25px" }}>
                    <Logo>{value.logo}</Logo>
                  </TableData>

                  <TableData>
                    <PostBox>
                      {value.name}
                      <CardSub variant="body2">{value.post}</CardSub>
                    </PostBox>
                  </TableData>

                  <TableData
                    sx={{ color: theme.palette.secondary.contrastText }}
                  >
                    {value.language}
                  </TableData>
                  <TableData>
                    <button
                      style={{
                        color: `${value.info}`,
                        fontWeight: "bold",
                        backgroundColor: `${value.background}`,
                        border: "none",
                        padding: "3px",
                        fontSize: 12,
                        minWidth: 70,
                      }}
                    >
                      {value.status}
                    </button>
                  </TableData>
                  <TableData>
                    <BsFillArrowRightSquareFill
                      color={grey[300]}
                      size={20}
                      style={{ verticalAlign: "middle" }}
                    />
                  </TableData>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ProductCard>
  );
};

export default Product;
