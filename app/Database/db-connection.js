import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'products.db' })

const DbInit = () => {
    db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_product'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_product', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name VARCHAR(20), product_stock INT(10))',
                []
              );
            }
          }
        );
      });
}

export {db, DbInit} 