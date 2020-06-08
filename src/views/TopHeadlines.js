import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NEWS_API_KEY } from '../../config';
import TopHeadlineItem from '../components/TopHeadlineItem';
import useAppContext from '../hooks/useAppContext';

const newsApi = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

export default function TopHeadlines() {
  const [data, setData] = useState([]);
  const { setSelectedArticle } = useAppContext();
  const { navigate } = useNavigation();

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const res = await fetch(newsApi);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeadlines();
  }, []);

  const goToDetailView = (article) => {
    setSelectedArticle(article);
    navigate('Headline Detail');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.articles}
        renderItem={({ item }) => (
          <TopHeadlineItem item={item} onPress={goToDetailView} />
        )}
        keyExtractor={(index, key) => key.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 34,
    paddingTop: 20,
  },
});
