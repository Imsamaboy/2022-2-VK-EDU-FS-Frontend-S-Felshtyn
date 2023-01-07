import {translate} from "./translate";
import {types} from "./index";

const params1: types.ITranslateParams = {
    text: "Привет, Я Стас",
    toLang: "en",
    fromLang: ""
}

const params2: types.ITranslateParams = {
    text: "Я Сигма",
    toLang: "en",
    fromLang: "ru"
}

const params3: types.ITranslateParams = {
    text: "Жабаскрипт",
    toLang: "",
    fromLang: ""
}

describe('Testing translate.ts', () => {
    test('Translations', () => {
        expect(translate(params1)).toBe("Hi, I'm Stas")
        expect(translate(params2)).toBe("I am Sigma")
        expect(translate(params3)).toBe("Jabasscript")
    })
})