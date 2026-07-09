import { Type } from "./Data.js";
export class VerbFunction {
    constructor() { }
    static get Instance() {
        if (!VerbFunction._instance) {
            VerbFunction._instance = new VerbFunction();
        }
        return VerbFunction._instance;
    }
    getStem(found) {
        return found.slice(0, -2);
    }
    presentTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    combination = Item + "o";
                    break;
                case "tú":
                    if (type === Type.Ar) {
                        combination = Item + "as";
                    }
                    else {
                        combination = Item + "es";
                    }
                    break;
                case "él":
                    if (type === Type.Ar) {
                        combination = Item + "a";
                    }
                    else {
                        combination = Item + "e";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar) {
                        combination = Item + "amos";
                    }
                    else if (type === Type.Er) {
                        combination = Item + "emos";
                    }
                    else {
                        combination = Item + "imos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar) {
                        combination = Item + "áis";
                    }
                    else if (type === Type.Er) {
                        combination = Item + "éis";
                    }
                    else {
                        combination = Item + "ís";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar) {
                        combination = Item + "an";
                    }
                    else {
                        combination = Item + "en";
                    }
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    subjunctiveTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    if (type === Type.Ar) {
                        combination = Item + "e";
                    }
                    else {
                        combination = Item + "a";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar) {
                        combination = Item + "es";
                    }
                    else {
                        combination = Item + "as";
                    }
                    break;
                case "él":
                    if (type === Type.Ar) {
                        combination = Item + "e";
                    }
                    else {
                        combination = Item + "a";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar) {
                        combination = Item + "emos";
                    }
                    else {
                        combination = Item + "amos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar) {
                        combination = Item + "éis";
                    }
                    else {
                        combination = Item + "áis";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar) {
                        combination = Item + "en";
                    }
                    else {
                        combination = Item + "an";
                    }
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    pretéritoTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    if (type === Type.Ar) {
                        combination = Item + "é";
                    }
                    else {
                        combination = Item + "í";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar) {
                        combination = Item + "aste";
                    }
                    else {
                        combination = Item + "iste";
                    }
                    break;
                case "él":
                    if (type === Type.Ar) {
                        combination = Item + "ó";
                    }
                    else {
                        combination = Item + "ió";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar) {
                        combination = Item + "amos";
                    }
                    else {
                        combination = Item + "imos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar) {
                        combination = Item + "asteis";
                    }
                    else {
                        combination = Item + "isteis";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar) {
                        combination = Item + "aron";
                    }
                    else {
                        combination = Item + "ieron";
                    }
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    imperfectTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    if (type === Type.Ar) {
                        combination = Item + "aba";
                    }
                    else {
                        combination = Item + "ía";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar) {
                        combination = Item + "abas";
                    }
                    else {
                        combination = Item + "ías";
                    }
                    break;
                case "él":
                    if (type === Type.Ar) {
                        combination = Item + "aba";
                    }
                    else {
                        combination = Item + "ía";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar) {
                        combination = Item + "ábamos";
                    }
                    else {
                        combination = Item + "íamos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar) {
                        combination = Item + "abais";
                    }
                    else {
                        combination = Item + "íais";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar) {
                        combination = Item + "aban";
                    }
                    else {
                        combination = Item + "ían";
                    }
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    futureTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    combination = Item + "é";
                    break;
                case "tú":
                    combination = Item + "ás";
                    break;
                case "él":
                    combination = Item + "á";
                    break;
                case "nosotros":
                    combination = Item + "emos";
                    break;
                case "vosotros":
                    combination = Item + "éis";
                    break;
                case "ellos":
                    combination = Item + "án";
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    conditionalTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    combination = Item + "ía";
                    break;
                case "tú":
                    combination = Item + "ías";
                    break;
                case "él":
                    combination = Item + "ía";
                    break;
                case "nosotros":
                    combination = Item + "íamos";
                    break;
                case "vosotros":
                    combination = Item + "íais";
                    break;
                case "ellos":
                    combination = Item + "ían";
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    impSubRaTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    if (type === Type.Ar) {
                        combination = Item + "ara";
                    }
                    else {
                        combination = Item + "iera";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar) {
                        combination = Item + "aras";
                    }
                    else {
                        combination = Item + "ieras";
                    }
                    break;
                case "él":
                    if (type === Type.Ar) {
                        combination = Item + "ara";
                    }
                    else {
                        combination = Item + "iera";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar) {
                        combination = Item + "áramos";
                    }
                    else {
                        combination = Item + "iéramos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar) {
                        combination = Item + "arais";
                    }
                    else {
                        combination = Item + "ierais";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar) {
                        combination = Item + "aran";
                    }
                    else {
                        combination = Item + "ieran";
                    }
                    break;
            }
            result.push(combination);
        }
        return result;
    }
    impSubSeTense(found, Item, type) {
        let result = [];
        for (let i = 0; i < found.personal.length; i++) {
            let combination = "";
            switch (found.personal[i]) {
                case "yo":
                    if (type === Type.Ar) {
                        combination = Item + "ase";
                    }
                    else {
                        combination = Item + "iese";
                    }
                    break;
                case "tú":
                    if (type === Type.Ar) {
                        combination = Item + "ases";
                    }
                    else {
                        combination = Item + "ieses";
                    }
                    break;
                case "él":
                    if (type === Type.Ar) {
                        combination = Item + "ase";
                    }
                    else {
                        combination = Item + "iese";
                    }
                    break;
                case "nosotros":
                    if (type === Type.Ar) {
                        combination = Item + "ásemos";
                    }
                    else {
                        combination = Item + "iésemos";
                    }
                    break;
                case "vosotros":
                    if (type === Type.Ar) {
                        combination = Item + "aseis";
                    }
                    else {
                        combination = Item + "ieseis";
                    }
                    break;
                case "ellos":
                    if (type === Type.Ar) {
                        combination = Item + "asen";
                    }
                    else {
                        combination = Item + "iesen";
                    }
                    break;
            }
            result.push(combination);
        }
        return result;
    }
}
