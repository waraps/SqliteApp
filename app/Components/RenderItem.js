import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Avatar, Surface, Title, Caption } from 'react-native-paper'

export default function RenderItem({item}) {
    const { product_name, product_stock, user_id } = item
    return (
        <TouchableOpacity>
          <Surface style={styles.surface}>
            <Avatar.Image 
                source={require('../assets/img/sqlite.png')}
                size={60}
            />
            <View style={{ marginLeft: 10 }}>
              <View>
                <Title numberOfLines={1}>
                  {product_name}
                </Title>
                <Caption style={{ marginTop: -5}}>ID: {user_id} </Caption>
                <Caption style={{ color: 'green', marginTop: -10}} >
                  Stock: {product_stock}
                </Caption>
              </View>
            </View>
          </Surface>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
