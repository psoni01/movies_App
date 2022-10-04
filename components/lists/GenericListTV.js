import GenericCardTV from "../listItems/GenericCardTV";
import { FlatList } from "native-base";


const GenericListTV = (props) => {
    const { dataTV } = props;
 return (
<FlatList
            data={dataTV}
            renderItem={({ item }) => (
                <GenericCardTV id={item.id}
                title={item.original_name}
                image={item.poster_path}
                popularity={item.popularity}
                release={item.release_date}
                
                />
            )} />
  )
};

export default GenericListTV;
