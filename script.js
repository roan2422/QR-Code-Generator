const submitButton = document.getElementById(`submitButton`).addEventListener(`click`, submit);
function submit() {
    const input = document.getElementById("input");

    if (input.value.trim().length != 0) {
        document.getElementById("qr").src =
            `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input.value)}`;
    } else {
        alert(`No input`);
    }
}
