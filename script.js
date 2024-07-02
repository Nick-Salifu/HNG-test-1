function displayDateTime() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getUTCDay()];

    const dayOfMonth = now.getUTCDate();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getUTCMonth()];

    const year = now.getUTCFullYear();

    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${dayOfWeek}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}:${seconds}`;

    document.getElementById('dateTimeDisplay').textContent = formattedDateTime;
}

setInterval(displayDateTime, 1000);

displayDateTime();
