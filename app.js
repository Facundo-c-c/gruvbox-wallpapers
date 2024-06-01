function loadPage(section, page) {
    let buttons = document.getElementById(section).getElementsByTagName("button");
    let currSel;
    for (let i in buttons) {
        if (buttons[i].classList?.contains("sel-btn")) {
            if (page - 1 == i) return;
            else {
                currSel = buttons[i];
                break;
            }
        }
    }

    fetch(section + "_page" + page + ".html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(section + "-content").innerHTML = data;
            if (currSel) {
                currSel.classList.remove("sel-btn");
            }
            document.getElementById(section).getElementsByTagName("button")[page - 1].classList.add("sel-btn");
        });
}
