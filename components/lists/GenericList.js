import GenericCard from "../listItems/GenericCard";
import { FlatList } from "native-base";


const GenericList = (props) => {
    const { data } = props;
 return (
<FlatList
            data={data}
            renderItem={({ item }) => (
                <GenericCard id={item.id}
                title={item.original_title}
                image={item.poster_path}
                popularity={item.popularity}
                release={item.release_date}
                
                />
            )} 
            keyExtractor={item => item.id}/>
  )
};

export default GenericList;
