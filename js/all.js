(function clock() {
    // 取出時針分針秒針
    const hourHand = document.querySelector('.hourHand');
    const minHand = document.querySelector('.miniuteHand');
    const secHand = document.querySelector('.secondHand');
    // 取得目前時間
    
    const getTime = () => {
        let date = new Date();
        const nowTime = {};
        nowTime.hour = date.getHours();
        nowTime.min = date.getMinutes();
        nowTime.sec = date.getSeconds();
        // 秒針 1 秒走 6 度
        secHand.setAttribute('style', 'transform: translateX(-50%) rotate(' + (nowTime.sec * 6) + 'deg)!important;');
        // 分針 1 分走 6 度
        minHand.setAttribute('style', 'transform: translateX(-50%) rotate(' + (nowTime.min * 6) + 'deg)!important;');
        // 時針 1 分走 0.5 度
        hourHand.setAttribute('style', 'transform: translateX(-50%) rotate(' + ((nowTime.hour * 30) + (nowTime.min * 0.5)) + 'deg)!important;');
    }
    // 每秒取得時間
    getTime();
    setInterval(() => getTime(), 1000);
}())