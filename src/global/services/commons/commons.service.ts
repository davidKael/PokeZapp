import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor() { }

  GetIcon(iconName : string){

    if(iconName == "bug") return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/180px-Pok%C3%A9mon_Bug_Type_Icon.svg.png";
    if(iconName == "dark") return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/180px-Pok%C3%A9mon_Dark_Type_Icon.svg.png";
    if(iconName == "dragon") return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/180px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png"
    if(iconName == "electric") return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/180px-Pok%C3%A9mon_Electric_Type_Icon.svg.png"
    if(iconName == "fairy") return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/180px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
    if(iconName == "fighting") return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/180px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png"
    if(iconName == "fire") return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/180px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
    if(iconName == "flying") return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/180px-Pok%C3%A9mon_Flying_Type_Icon.svg.png"
    if(iconName == "ghost") return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/180px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png"
    if(iconName == "grass") return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/180px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"
    if(iconName == "ground") return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/180px-Pok%C3%A9mon_Ground_Type_Icon.svg.png"
    if(iconName == "ice") return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/180px-Pok%C3%A9mon_Ice_Type_Icon.svg.png"
    if(iconName == "normal") return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/180px-Pok%C3%A9mon_Normal_Type_Icon.svg.png"
    if(iconName == "poison") return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/180px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
    if(iconName == "psychic") return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/180px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png"
    if(iconName == "rock") return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/180px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
    if(iconName == "steel") return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/180px-Pok%C3%A9mon_Steel_Type_Icon.svg.png"
    if(iconName == "water") return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/180px-Pok%C3%A9mon_Water_Type_Icon.svg.png"

    else return "";
  } 
}