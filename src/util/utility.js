export const diffSeconds = (date1, date2) => {
    const diff = (date2.getTime() - date1.getTime()) / 1000;
    return Math.abs(Math.round(diff));
};

export const secondsToHours = seconds => {
    let minutes = parseInt(seconds / 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${minutes}:${seconds}`;
};