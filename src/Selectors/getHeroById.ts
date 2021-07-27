import {heroes} from "../Data/heros";

export const GetHeroById = (id: string) => {
    return heroes.find(hero => hero.id === id);
}