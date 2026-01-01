const scriptURL = "https://script.google.com/macros/s/AKfycbz7yN3Gi64Go9p0rQxdBAqwAIIqrwduJj1qQdtqPGjthv24mjRC7yJ95zvPsthgDxlx/exec";

const form = document.forms["submit-to-google-sheet"];

const btnKirim = form.querySelector("button[type='submit']");
const btnLoading = form.querySelector(".loading");
const alertSaya = document.querySelector(".alert");
const closeAlert = document.querySelector(".close-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // tampilkan loading, sembunyikan kirim
  btnKirim.classList.add("hidden");
  btnLoading.classList.remove("hidden");
  alertSaya.classList.add("hidden");

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      // tampilkan alert
      alertSaya.classList.remove("hidden");

      // reset form
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
    })
    .finally(() => {
      // kembalikan tombol
      btnLoading.classList.add("hidden");
      btnKirim.classList.remove("hidden");
    });
});

// tombol close alert
closeAlert.addEventListener("click", () => {
  alertSaya.classList.add("hidden");
});
