import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useAppContext from '../hooks/useAppContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeArea } from 'react-native-safe-area-context';

export default function HeadlineDetail() {
  const { selectedArticle } = useAppContext();
  const { bottom } = useSafeArea();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <Image
        source={{ uri: selectedArticle?.urlToImage }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{selectedArticle?.title}</Text>
          <Text style={styles.description}>{selectedArticle?.description}</Text>
          <Text style={styles.author}>{selectedArticle?.author}</Text>
        </View>

        <TouchableOpacity style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>READ MORE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 30,
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '30%',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  author: {
    fontSize: 12,
    opacity: 0.6,
    paddingTop: 5,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    paddingTop: 20,
    fontWeight: '500',
  },
  btnContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: '12%',
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#147EFB',
    borderRadius: 4,
  },
  btnText: {
    fontWeight: '800',
    color: '#fff',
  },
});
