const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

export const dateParser = date => {
    const dateArray = date.split('T')[0].split('-')
    let [ year, month, day ] = dateArray
    month = months[parseInt(month)]

    return [[month, day].join(' '), year].join(', ')
}

export const shortDateParser = date => {
    const dateArray = date.split("T")[0].split("-");
    let [ year, month ] = dateArray.slice(0,2)
    month = months[parseInt(month)];
    year = "'" + year.slice(2)

    return [month, year].join(' ')
}