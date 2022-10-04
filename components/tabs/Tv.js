import { Text, View, Center, Box, Select, CheckIcon } from "native-base";
import React, { useState, useEffect } from "react";
import DropDownTV from "../layout/DropDownTV";
import GenericListTV from "../lists/GenericListTV";
// import { getMoviesData } from "../../services/api";
import axios from "axios";
import { API_KEY } from "../../services/api_config";

const Tv = () => {
    const [sortTV, setSortTV] = React.useState("popular");
    const [dataTV, setDataTV] = useState([]);

    const handleSortTVChange = (value) => {
        setSortTV(value);

    }

    useEffect(function fetchData() {
       
        fetch(`https://api.themoviedb.org/3/tv/${sortTV}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setDataTV(data.results);
        });
       
        // axios.get(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}`)
        //     .then(res => {
        //         setData(res.data.results);
        //     }).catch(err => {console.log(err)})
    }, [sortTV]);

    return (
        <View >
            <DropDownTV sortTV={sortTV} handleSortTVChange={handleSortTVChange} />
            <GenericListTV dataTV={dataTV}  />

        </View>
    )
}


export default Tv;

