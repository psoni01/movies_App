import { useRoute } from "@react-navigation/native";
import { VStack, Text, View, Box, Image, HStack, Divider } from "native-base";
import { useEffect, useState } from "react";
import axios from "axios";

import { API_KEY } from "../../services/api_config";

const DetailsScreen = (props) => {
    const route = useRoute();
    const { id, type } = route.params;
    const [title, setTitle] = useState("");

    const [poster, setPoster] = useState();
    const [overview, setOverview] = useState("");
    const [popularity, setPopularity] = useState("");

    const [release, setRelease] = useState("");
    useEffect(() => {
        async function fetchData() {

            const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`);
            console.log(response.data);
            setTitle(response.data.original_title);
            setPoster(response.data.poster_path);
            setOverview(response.data.overview);
            setPopularity(response.data.popularity);
            setRelease(response.data.release_date);
        };
        fetchData();

    }, []);


    return (
        <View>
            <Box><VStack>

                <Text >{title}</Text>
              {poster ?  <Image alt="Poster" key={poster} source={{ uri: `https://image.tmdb.org/t/p/w500/${poster}` }} size='xl' />
                : <></>} 
                <Text>{overview}</Text>
                <HStack>
                    <Text >Popularity: {popularity}</Text>
                    <Divider orientation="vertical" my={2} />
                    <Text >Release Date: {release}</Text>
                </HStack>


            </VStack></Box>
        </View>
    )
};

export default DetailsScreen;