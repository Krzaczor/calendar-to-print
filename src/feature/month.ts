import { translate } from "../lang";
import { Day, renderDay } from "./day";

interface RenderMonth {
    year: number;
    month: number;
}

export const renderMonth = ({ year, month }: RenderMonth) => {
    const monthName = getNameMonth(year, month);
    const countDays = getCountDays(year, month);
    const countEmptyDays = getIndexDay(year, month);

    const days: Day[] = [...Array(countEmptyDays)].map(() => null);
    days.push(...[...Array(countDays)].map((_, day) => day));

    return `
        <div class="month-wrapper">
            <h2 class="month-name">${monthName}</h2>
            <div class="month">
                ${days.map((day) => renderDay({ day })).join("")}
            </div>
        </div>
    `;
};

const getNameMonth = (year: number, month: number) => {
    const nameMonth = new Date(year, month, 1).toLocaleString("pl", { month: "long" });
    return translate(nameMonth);
};

const getCountDays = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

const getIndexDay = (year: number, month: number) => {
    const indexDayOfWeek = new Date(year, month, 1).getDay() % 7;
    return indexDayOfWeek === 0 ? 6 : indexDayOfWeek - 1;
};
