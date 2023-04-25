import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const isResponseSuccess = (res: AxiosResponse): boolean => Boolean(res.data && res.status < 400);

export class MealService {
    static async listAllMeals() {
        try {
            const url = `${BASE_URL}/search.php`;
            const res = await axios.get(url, { params: { f: 'b' } });
            if (isResponseSuccess(res)) return res.data;
            throw new Error(`Unsuccessful response when fetching meals: ${res}`);
        } catch (error) {
            throw new Error(`Unsuccessful response when fetching meaLS: ${JSON.stringify(error)}`);
        }
    }

    static async listMealDetailsById(mealId: number) {
        try {
            const url = `${BASE_URL}/lookup.php`;
            const res = await axios.get(url, { params: { i: mealId } });
            if (isResponseSuccess(res)) return res.data;
            throw new Error(`Unsuccessful response when fetching meal: ${res}`);
        } catch (error) {
            throw new Error(`Unsuccessful response when fetching meaL: ${JSON.stringify(error)}`);
        }
    }
}
