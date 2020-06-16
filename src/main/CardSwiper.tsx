import React, { ReactElement } from 'react';
import Card from '../components/card/Card';
import { FlatList, View, ImageSourcePropType, StyleSheet, Alert } from 'react-native';
import EmptyComponent from '../components/emptyComponent/EmptyComponent';

export interface Data {
  key: string
  img: ImageSourcePropType | number
}

interface Props {
  data: Data[];
}

const CardSwiper = ({ data }: Props): ReactElement => {

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        data={data}
        renderItem={({ item }) => <Card img={item.img} />}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={<EmptyComponent />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    flex: 1
  },
  listContainer: {
    flex: 0.8,
  },
  toolbarContainer: {
    flex: 0.2,
  }
})

export default CardSwiper;
