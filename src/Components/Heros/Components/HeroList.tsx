import {GetHeroesByPublisher} from "../../../Selectors/getHeroesByPublisher";
import {FC} from "react";
import {HeroListProps} from "../../../Interfaces/PropsInterfaces";
import {Hero} from "../../../Interfaces/ModelsInterfaces";
import * as PropTypes from 'prop-types'
import {HeroItem} from "./HeroItem";

export const HeroList: FC<HeroListProps> = ({publisher}) => {

    const heroes: Hero[] = GetHeroesByPublisher(publisher);

    return <>
        {
            heroes.map((hero: Hero) => (
                <HeroItem key={hero.id} hero={hero}/>
            ))
        }
    </>
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
};