import {heroes} from "../Data/heros";

export const GetHeroesByPublisher = (publisher: string) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher} incorrect"`)
    }
    return heroes.filter(hero => hero.publisher === publisher);
}