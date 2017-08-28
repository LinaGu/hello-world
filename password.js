// Matyti/paslepti slaptazodzius
function togglePassword(el) {
    var checked = el.checked;
    if (checked) {
        document.getElementById("pakartSlp").type = 'text';
        document.getElementById("naujSlp").type = 'text';
        document.getElementById("esamSlp").type = 'text';
        document.getElementById("toggleText").textContent = "Paslėpti slaptažodžius";
    } else {
        document.getElementById("pakartSlp").type = 'password';
        document.getElementById("naujSlp").type = 'password';
        document.getElementById("esamSlp").type = 'password';
        document.getElementById("toggleText").textContent = "Rodyti slaptažodžius";
    }
}

// Mygtukas
function onFormSubmit() {
    var n = document.getElementById("naujSlp").value;
    var p = document.getElementById("pakartSlp").value;
    var e = document.getElementById("esamSlp").value;

    if (n == e) {
        var su = document.getElementById("su")
        su.style.display = "initial";
        return false;
    } else if (n !== p) {
        var ne = document.getElementById("ne");
        ne.style.display = "initial";
        ne.style.backgroundColor = "red";
        return false;
    } else if (n == p && n !== e) {
        var ok = document.getElementById("keicia");
        ok.style.display = "initial";
        ok.style.backgroundColor = "green";
        ok.style.padding = "3em 4em 3em 4em";
        document.getElementById("forma").style.display = "none";
        return true;
    }
}