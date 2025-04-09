function updateBirthday() {
    window.setTimeout(updateBirthday, 1000); // 每秒调用一次 updateBirthday 函数

    const birthDate = new Date("04/10/2005 00:00:00"); // 设置出生日期
    const today = new Date();
    const timeOld = today.getTime() - birthDate.getTime(); // 获取当前时间和出生时间的差值（毫秒）

    const secondsInDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
    const totalDaysOld = timeOld / secondsInDay; // 总天数
    const daysOld = Math.floor(totalDaysOld); // 完整的天数

    const totalHoursOld = (totalDaysOld - daysOld) * 24; // 完整天数之后的小时数
    const hoursOld = Math.floor(totalHoursOld); // 完整小时数

    const totalMinutesOld = (totalHoursOld - hoursOld) * 60; // 完整小时数之后的分钟数
    const minutesOld = Math.floor(totalMinutesOld); // 完整分钟数

    const totalSecondsOld = (totalMinutesOld - minutesOld) * 60; // 完整分钟数之后的秒数
    const secondsOld = Math.floor(totalSecondsOld); // 完整秒数

    // 更新页面中显示的时间
    const spanDt = document.getElementById("span_dt_dt");
    spanDt.innerHTML = `${daysOld}天 ${hoursOld}小时 ${minutesOld}分 ${secondsOld}秒`;
}

updateBirthday(); // 调用函数，开始倒计时
