import { privateAxios } from "./Helper";
import { myAxios } from "./Helper";

//load single post of given id

export const loadMythologyStory = () => {
    return myAxios.get("/story/1").then((reponse) => reponse.data);
};

export const loadCharacters = () => {
    return myAxios.get("/story/5").then((reponse) => reponse.data);
};

export const loadFestivals = () => {
    return myAxios.get("/story/6").then((reponse) => reponse.data);
};

export const loadTemples = () => {
    return myAxios.get("/story/8").then((reponse) => reponse.data);
};