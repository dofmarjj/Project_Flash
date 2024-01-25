const TOKEN = "6656855327:AAFhnGJrj15MHvMomtQY3lytte1A2mjEyls";
const CHAT_ID = "-1001992581148";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById("success");

document.getElementById("tg-1").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка </b>\n`;
  message += `<b>Телефон</b> ${this.phone.value}\n`;
  message += `<b>Email</b> ${this.email.value}\n`;
  message += `<b>Email</b> ${this.name.value}\n`;
  message += `<b>Email</b> ${this.mess.value}\n`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })

    .then((res) => {
      this.phone.value = "";
      this.email.value = "";
      this.name.value = "";
      this.mess.value = "";
      success.innerHTML = "Отправлено";
      success.style.display = "block";
    });
});
