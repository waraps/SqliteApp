import { db } from './db-connection'

export const productsQueries = {
    async insertProduct(name, stock) {
      try {
        await db.transaction(function (tx) {
            tx.executeSql(
              'INSERT INTO table_user (product_name, product_stock) VALUES (?,?)',
              [name, stock],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  alert('Product Registered Successfully')
                } else alert('Registration Failed');
              }
            );
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getProducts() {
      try {
        await db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_product',
            [],
            (tx, results) => {
                console.log('5')
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i){
                // temp.push(results.rows.item(i));
              }
              console.log(temp);
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
}