import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

// DB Query
import { productsQueries } from '../../Database/queries'

const AddProductScreen = () => {
    const [product, setProduct] = React.useState('');
    const [stock, setStock] = React.useState('');

    const addProduct = async () => {
        try {
            if(product === '' || stock === '') {
                alert('Empty')
                return
            }
            await productsQueries.insertProduct(product, stock)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20}}>Add Product</Text>
            <TextInput 
                label="Product"
                value={product}
                onChangeText={setProduct}
            />
            <TextInput 
                label="Stock"
                value={stock}
                onChangeText={setStock}
                keyboardType='number-pad'
            />
            <Button 
                icon="plus-circle" 
                mode="contained" 
                onPress={addProduct}
            >
              Add
            </Button>
        </View>
    )
}

export default AddProductScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
        height: 400,
        justifyContent: 'space-around'
    }
})
