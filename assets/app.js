const agbVersion = "1.0.2";

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
    console.log(`Cookie gesetzt: ${name}=${value}`);
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
        if (cookie.indexOf(nameEQ) === 0) {
            const value = cookie.substring(nameEQ.length);
            console.log(`Cookie gefunden: ${name}=${value}`);
            return value;
        }
    }
    console.log(`Cookie nicht gefunden: ${name}`);
    return null;
}

function checkAGB() {
    const cookie = getCookie("agbAccepted");
    if (cookie !== agbVersion) {
        console.log("AGB noch nicht akzeptiert. Zeige AGB-Bildschirm an.");
        document.querySelector('.web.screen').classList.remove('active');
        document.querySelector('.accep.screen').classList.add('active');
    } else {
        console.log("AGB bereits akzeptiert. Zeige Webseite an.");
    }
}

document.getElementById('acceptButton').addEventListener('click', function() {
    console.log("AGB akzeptiert. Setze Cookie...");
    setCookie("agbAccepted", agbVersion);
    document.querySelector('.accep.screen').classList.remove('active');
    document.querySelector('.web.screen').classList.add('active');
});

document.getElementById('viewAGBButton').addEventListener('click', function() {
    const agbURL = `/files/agbs/?version=${agbVersion}`;
    console.log(`Öffne AGBs unter: ${agbURL}`);
    window.open(agbURL, '_blank');
});

window.onload = checkAGB;