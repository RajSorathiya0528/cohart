const updateTime = () => {
    const dateElement = document.getElementsByClassName("date")
    const timeElement = document.getElementsByClassName("time")

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2,"0");
    const AmPm = now.getHours() >= 12 ? "PM" : "AM";

    if(timeElement.length > 0){
        timeElement[0].innerHTML = `${hours}:${minutes}:${second} ${AmPm}`
    }

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    if (dateElement.length > 0) {
        dateElement[0].innerHTML = now.toLocaleDateString(undefined, options);
    }
}

setInterval(updateTime,1000)
updateTime();