import { renderMonth } from "./month";

const calendarElement = document.querySelector<HTMLDivElement>("#calendar");

interface RenderYear {
    year: number;
}

export const renderYear = ({ year }: RenderYear) => {
    if (!calendarElement) return;

    const fullYear = [...Array(12)].map((_, month) => renderMonth({ year, month }));
    calendarElement.innerHTML = fullYear.join("");
};
