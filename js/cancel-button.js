for (let btn of document.getElementsByTagName("a")) {
    btn.addEventListener("click", function(e) {
        if (btn.getAttribute("href") == "#")
            e.preventDefault();
    });
}