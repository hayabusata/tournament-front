import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper } from '@material-ui/core';

const useStyles = makeStyles ({
    table: {
        minWidth: 650,
    },
    tableCell: {
        borderRight: "1px solid #ccc",
    },
});

const createData = (
    name: string,
    category: string,
    weight: number,
    price: number
  ) => {
    return { name, category, weight, price };
  };

const rows = [
    createData("チョコレート", "お菓子", 100, 120),
    createData("ケーキ", "お菓子", 400, 480),
    createData("りんご", "フルーツ", 500, 360),
    createData("バナナ", "フルーツ", 200, 300),
    createData("みかん", "フルーツ", 250, 180),
  ];

const ReagueTable = (): JSX.Element => {
    const styles = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCell}>商品名</TableCell>
              <TableCell align="right" className={styles.tableCell}>カテゴリー</TableCell>
              <TableCell align="right" className={styles.tableCell}>重量(g)</TableCell>
              <TableCell align="right" className={styles.tableCell}>価格(円)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className={styles.tableCell}>
                  {row.name}
                </TableCell>
                <TableCell align="right" className={styles.tableCell}>{row.category}</TableCell>
                <TableCell align="right" className={styles.tableCell}>{row.weight}</TableCell>
                <TableCell align="right" className={styles.tableCell}>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default ReagueTable;