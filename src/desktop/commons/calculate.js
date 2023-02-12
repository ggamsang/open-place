export function DateToEng(props) {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date(props);
    return date.getDate()+" "+monthName[date.getMonth()]+" "+date.getFullYear();

}