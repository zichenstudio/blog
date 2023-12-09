(function () {
    const content = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    let result = "";
    for (let i = 1; i < content.length; i++) {
        result += `<a href="#${content[i].id}" onclick="smoothScroll(event)">
            ${content[i].tagName
                ?.replace("H1", "# ")
                ?.replace("H2", "## ")
                ?.replace("H3", "### ")
                ?.replace("H4", "#### ")
                ?.replace("H5", "##### ")
                ?.replace("H6", "###### ")}
            ${content[i].innerText}
            <br>`;
    }
    document.getElementById("content").innerHTML = result;
}())
