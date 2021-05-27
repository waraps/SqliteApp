import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import { Divider } from 'react-native-paper'

// DB Query
import { db } from '../../Database/db-connection'
import { productsQueries } from '../../Database/queries'

// Component
import RenderItem from '../../Components/RenderItem'

const renderItem = ({ item }) => <RenderItem key={item.user_id} item={item}/>
const itemSeparator = () => <Divider />

const ShowProductsScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user',
            [],
            (tx, results) => {
              let temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              setProducts(temp);
            }
          );
        });
      }, [isFocused]);

    const listProducts = async () => {
        try {
            await productsQueries.getProducts()
            // console.log(list)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.user_id}
          ItemSeparatorComponent={itemSeparator}
        />
    )
}

export default ShowProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
