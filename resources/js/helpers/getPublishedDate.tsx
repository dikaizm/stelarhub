export default function getPublishedDate(date: string): string {
    const newDate = new Date(date);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
}