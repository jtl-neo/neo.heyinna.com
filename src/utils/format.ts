export const formatPeriod = (period: string): string => {
    if (period.includes('now') || period.includes('至今')) {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const currentMonthStr = `${year}.${month}`;

        return period.replace(/(now|至今)/g, currentMonthStr);
    }
    return period;
};
