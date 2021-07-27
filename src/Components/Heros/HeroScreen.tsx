import {Redirect, useParams} from "react-router-dom";
import {HeroScreenParams} from "../../Interfaces/ParamsInterfaces";
import {GetHeroById} from "../../Selectors/getHeroById";
import {HeroItem} from "./Components/HeroItem";
import {useMemo} from "react";

export const HeroScreen = () => {
    const {id} = useParams<HeroScreenParams>();
    const hero = useMemo(() => GetHeroById(id), [id]);

    if (hero) {
        return <HeroItem hero={hero} showMore={false}/>
    } else {
        return <Redirect to="/"/>
    }
}