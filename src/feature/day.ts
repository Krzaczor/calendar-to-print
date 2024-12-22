export type Day = number | null;

interface RenderDay {
    day: Day;
}

export const renderDay = ({ day }: RenderDay) => {
    return `<div class="day">${day !== null ? day + 1 : ""}</div>`;
};
