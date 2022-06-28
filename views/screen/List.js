import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [onLoadImage, setLoadImage] = useState(false);

  const Item = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={onLoadImage ?
        { uri: item.avatar }
        : require('../../images/default.jpg')}
        onError={() => imageLoading()} />
      <Text style={styles.description}>{item.name}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const imageLoading = () => {
    setLoadImage(true);
  }

  const getList = async () => {
    try {
      const response = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator size={50} /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    height: 50,
    width: 50
  },
  itemContainer: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  description: {
    fontSize: 25,
    color: "black",
    padding: 10
  },
})

export default List;