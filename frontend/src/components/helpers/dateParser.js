const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export const dateParser = date => {
    const dateArray = date.split('T')[0].split('-')
    let [year, month, day] = dateArray
    month = months[parseInt(month)]

    return [[month, day].join(' '), year].join(', ')
}