let notification = document.getElementsByClassName("notification")[0];

let show = true,
    delay, timer, timer2;

    for (let sidebar of document.getElementsByClassName("btn_discord")) {
        sidebar.addEventListener("click", function(e) {
                e.preventDefault();
    
                if (!show) {
                    notification.classList.add("hide");
                    clearInterval(delay);
                    clearInterval(timer);
                    clearInterval(timer2);
    
                    delay = setInterval(() => {
                        notification.classList.toggle("hide");
                        timer = setInterval(() => {
                            notification.classList.toggle("hide");
                            clearInterval(timer);
                            timer2 = setInterval(() => {
                                show = true;
                                clearInterval(timer2);
                            }, 1000);
                        }, 2500)
                        clearInterval(delay);
                    }, 1);
    
                } else {
                    show = false;
                    notification.style.opacity = 1;
                    notification.classList.toggle("hide");
                    timer = setInterval(() => {
                        notification.classList.toggle("hide");
                        clearInterval(timer);
                        timer2 = setInterval(() => {
                            show = true;
                            clearInterval(timer2);
                        }, 1000);
                    }, 2500)
                }
        });
    }