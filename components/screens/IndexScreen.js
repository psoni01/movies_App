import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Movies from '../tabs/Movies';
import Search from '../tabs/Search';
import Tv from '../tabs/Tv';





const renderScene = SceneMap({
  first: Movies,
  second: Search,
  third: Tv
});

 const IndexScreen = () =>  {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Movies' },
    { key: 'second', title: 'Search Results' },
    { key: 'third', title: 'TV Shows' },
  ]);

  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default IndexScreen;