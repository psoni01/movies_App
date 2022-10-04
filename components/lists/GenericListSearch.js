
import { FlatList } from "native-base";
import GenericCard from "../listItems/GenericCard";
import GenericCardTV from "../listItems/GenericCardTV";


const GenericListSearch = (props) => {
    const { data, sentType } = props;

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (

                sentType == 'multi' ?
                    (item.media_type == 'movie' ? <GenericCard id={item.id}
                        title={item.original_title}
                        image={item.poster_path}
                        popularity={item.popularity}
                        release={item.release_date} /> :
                        <GenericCardTV id={item.id}
                            title={item.original_name}
                            image={item.poster_path}
                            popularity={item.popularity}
                            release={item.release_date} />
                    )
                    : (sentType == 'movie' ? <GenericCard id={item.id}
                        title={item.original_title}
                        image={item.poster_path}
                        popularity={item.popularity}
                        release={item.release_date} /> : <GenericCardTV id={item.id}
                            title={item.original_name}
                            image={item.poster_path}
                            popularity={item.popularity}
                            release={item.release_date} />)

            )}
            keyExtractor={item => item.id} />
    )
};

export default GenericListSearch;
