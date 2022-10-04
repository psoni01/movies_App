
import { API_KEY, MOVIE_BASE_URL} from './api_config';




export const getMoviesData = async (sort) => {
    const url = MOVIE_BASE_URL;

    try {
        const params = {
            q: ingredient,
            app_id: APP_ID,
            api_key: API_KEY,
            field: ['uri', 'image', 'label', 'source']
        };

        const recipeAxios = axios.create({
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        });

        const response = await recipeAxios.get(url, { params });
        console.log('RESPONSE', response.data.hits);
        const recipes = response.data.hits;
        return recipes;
    } catch (error) {
        throw error;
    }
};