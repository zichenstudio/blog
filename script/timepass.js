const ARTICALTIME = document.getElementsByTagName("time")[0].innerText;
const FORMATTIME = `${ARTICALTIME.substring(0, 4)}/${ARTICALTIME.substring(5, 7)}/${ARTICALTIME.substring(8, 10)}`;
let timePass = parseInt((new Date() - new Date(FORMATTIME)) / 86400000);
document.getElementById("time-pass").innerHTML = `<strong>本文距离现在已有${timePass}天，内容与事实可能已经发生变化，文章描述为当时情况。</strong>
`
