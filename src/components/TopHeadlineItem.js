// @flow
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

type TopHeadlineItemProps = {
  item: {
    title: string,
    urlToImage: string,
    publishedAt: string,
  },
  onPress: () => void,
};

const TopHeadlineItem = ({ item, onPress }: TopHeadlineItemProps) => (
  <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(item)}>
    <View style={styles.container}>
      <View style={styles.titleAndImage}>
        <Image source={{ uri: item?.urlToImage }} style={styles.image} />
        <Text style={styles.title}>{item?.title}</Text>
      </View>
      <Text style={styles.date}>{moment(item?.publishedAt).format('LL')}</Text>
    </View>
  </TouchableOpacity>
);

export default TopHeadlineItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    minHeight: 110,
  },
  titleAndImage: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    flex: 1,
    paddingLeft: 14,
  },
  image: {
    width: 80,
    resizeMode: 'contain',
  },
  date: {
    fontSize: 11,
    opacity: 0.6,
  },
});
