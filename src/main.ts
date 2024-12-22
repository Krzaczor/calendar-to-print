import { renderYear } from "./feature/year";
import { translate } from "./lang";
import "./style.scss";

const printButton = document.querySelector<HTMLButtonElement>("#print");
const downloadPdfButton = document.querySelector<HTMLButtonElement>("#download-pdf");
const yearElement = document.querySelector<HTMLHeadElement>("#year");
const yearInput = document.querySelector<HTMLInputElement>("#year-input");
const calendarForm = document.querySelector<HTMLInputElement>("#form-calendar");
const yearShowButton = document.querySelector<HTMLInputElement>("#year-show");

const init = () => {
    const year = new Date().getFullYear();

    yearInput && (yearInput.value = year.toString());
    yearElement && (yearElement.textContent = year.toString());

    calendarForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!yearInput) {
            return;
        }

        const value = yearInput.value.trim();

        if (value === "" || isNaN(+value)) {
            return;
        }

        renderYear({ year: +value });
        yearElement && (yearElement.textContent = value.toString());
    });

    printButton && (printButton.textContent = translate("Drukuj"));
    downloadPdfButton && (downloadPdfButton.textContent = translate("Pobierz pdf"));
    yearShowButton && (yearShowButton.textContent = translate("Pokaż"));

    printButton?.addEventListener("click", () => {
        print();
    });

    renderYear({ year });
};

init();
