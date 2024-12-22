const langs: Record<string, Record<string, string>> = {
    pl: {
        // Polska
        styczeń: "styczeń",
        luty: "luty",
        marzec: "marzec",
        kwiecień: "kwiecień",
        maj: "maj",
        czerwiec: "czerwiec",
        lipiec: "lipiec",
        sierpień: "sierpień",
        wrzesień: "wrzesień",
        październik: "październik",
        listopad: "listopad",
        grudzień: "grudzień",

        "Pobierz pdf": "Pobierz PDF",
        Drukuj: "Drukuj",
        Pokaż: "Pokaż",
    },
    de: {
        // niemcy
        styczeń: "januar",
        luty: "februar",
        marzec: "märz",
        kwiecień: "april",
        maj: "mai",
        czerwiec: "juni",
        lipiec: "juli",
        sierpień: "august",
        wrzesień: "september",
        październik: "oktober",
        listopad: "november",
        grudzień: "dezember",

        "Pobierz pdf": "PDF Herunterladen",
        Drukuj: "Drucke",
        Pokaż: "Zeig",
    },
    cs: {
        // Czechy
        styczeń: "leden",
        luty: "únor",
        marzec: "březen",
        kwiecień: "duben",
        maj: "květen",
        czerwiec: "červen",
        lipiec: "červenec",
        sierpień: "srpen",
        wrzesień: "září",
        październik: "říjen",
        listopad: "listopad",
        grudzień: "prosinec",

        "Pobierz pdf": "Stáhnout PDF",
        Drukuj: "Tisknout",
        Pokaż: "Zobrazit",
    },
    sk: {
        // Słowacja
        styczeń: "január",
        luty: "február",
        marzec: "marec",
        kwiecień: "apríl",
        maj: "máj",
        czerwiec: "jún",
        lipiec: "júl",
        sierpień: "august",
        wrzesień: "september",
        październik: "október",
        listopad: "november",
        grudzień: "december",

        "Pobierz pdf": "Stiahnuť PDF",
        Drukuj: "Vytlačiť",
        Pokaż: "Zobraziť",
    },
};

export const translate = (word: string) => {
    const lang = navigator.language.slice(0, 2);
    return langs[lang][word] || langs["pl"][word];
};
