const btnOpen = document.querySelector(".btn-open-keranjang");
const btnOpenPulsa = document.querySelector(".btn-open-p-pulsa");
const btnOpenGame = document.querySelector(".btn-open-p-game");
const btnOpenWallet = document.querySelector(".btn-open-p-e-wallet");
const btnOpenSembako = document.querySelector(".btn-open-p-sembako");
const btnOpenSnack = document.querySelector(".btn-open-p-snack");
const btnOpenElektronik = document.querySelector(".btn-open-p-elektronik");
const btnOpenClaim = document.querySelector(".btn-open-claim");
const btnClose = document.querySelector(".btn-close-keranjang");
const btnTutup = document.querySelector(".tutup");
const btnTutupGame = document.querySelector(".tutup-game");
const btnTutupWallet = document.querySelector(".tutup-e-wallet");
const btnTutupSembako = document.querySelector(".tutup-sembako");
const btnTutupSnack = document.querySelector(".tutup-snack");
const btnTutupElektronik = document.querySelector(".tutup-elektronik");
const btnTutupClaim = document.querySelector(".tutup-claim");
const LihatKeranjang = document.querySelector(".btn-lihat-p-keranjang");
const GameLihatKeranjang = document.querySelector(".btn-lihat-g-keranjang");
const WalletLihatKeranjang = document.querySelector(".btn-lihat-e-keranjang");
const SembakoLihatKeranjang = document.querySelector(".btn-lihat-s-keranjang");
const SnackLihatKeranjang = document.querySelector(".btn-lihat-s1-keranjang");
const ElektronikLihatKeranjang = document.querySelector(".btn-lihat-e1-keranjang");
const btnClosePulsa = document.querySelector(".btn-close-pulsa");
const btnCloseGame = document.querySelector(".btn-close-game");
const btnCloseSembako = document.querySelector(".btn-close-sembako");
const btnCloseWallet = document.querySelector(".btn-close-e-wallet");
const btnCloseSnack = document.querySelector(".btn-close-snack");
const btnCloseElektronik = document.querySelector(".btn-close-elektronik");
const btnCloseClaim = document.querySelector(".btn-close-claim");
const btnLanjut = document.querySelector(".btn-lanjut-belanja");
const keranjang = document.querySelector(".keranjang");
const ProdukGame = document.querySelector(".produk-game");
const ProdukPulsa = document.querySelector(".produk-pulsa");
const ProdukWallet = document.querySelector(".produk-e-wallet");
const ProdukSembako = document.querySelector(".produk-sembako");
const ProdukSnack = document.querySelector(".produk-snack");
const ProdukElektronik = document.querySelector(".produk-elektronik");
const Claim = document.querySelector(".claim");

// buka keranjang
btnOpen.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukPulsa.classList.add("opacity-0", "pointer-events-none");
});

// tutup keranjang
btnClose.addEventListener("click", () => {
  keranjang.classList.add("opacity-0", "pointer-events-none");
});

// tutup keranjang (Lanjut Belanja)
btnLanjut.addEventListener("click", () => {
  keranjang.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Pulsa
btnOpenPulsa.addEventListener("click", () => {
  ProdukPulsa.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Pulsa
btnClosePulsa.addEventListener("click", () => {
  ProdukPulsa.classList.add("opacity-0", "pointer-events-none");
});

// lihat Keranjang Pulsa
LihatKeranjang.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukPulsa.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Pulsa
btnTutup.addEventListener("click", () => {
  ProdukPulsa.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Game
btnOpenGame.addEventListener("click", () => {
  ProdukGame.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Game
btnCloseGame.addEventListener("click", () => {
  ProdukGame.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Game
btnTutupGame.addEventListener("click", () => {
  ProdukGame.classList.add("opacity-0", "pointer-events-none");
});

// Lihat Keranjang Game
GameLihatKeranjang.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukGame.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Wallet
btnOpenWallet.addEventListener("click", () => {
  ProdukWallet.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Wallet
btnCloseWallet.addEventListener("click", () => {
  ProdukWallet.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Wallet
btnTutupWallet.addEventListener("click", () => {
  ProdukWallet.classList.add("opacity-0", "pointer-events-none");
});

// Lihat Keranjang Wallet
WalletLihatKeranjang.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukWallet.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Sembako
btnOpenSembako.addEventListener("click", () => {
  ProdukSembako.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Sembako
btnCloseSembako.addEventListener("click", () => {
  ProdukSembako.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Sembako
btnTutupSembako.addEventListener("click", () => {
  ProdukSembako.classList.add("opacity-0", "pointer-events-none");
});

// Lihat Keranjang Sembako
SembakoLihatKeranjang.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukSembako.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Snack
btnOpenSnack.addEventListener("click", () => {
  ProdukSnack.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Snack
btnCloseSnack.addEventListener("click", () => {
  ProdukSnack.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Snack
btnTutupSnack.addEventListener("click", () => {
  ProdukSnack.classList.add("opacity-0", "pointer-events-none");
});

// Lihat Keranjang Snack
SnackLihatKeranjang.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukSnack.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Elektronik
btnOpenElektronik.addEventListener("click", () => {
  ProdukElektronik.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Elektronik
btnCloseElektronik.addEventListener("click", () => {
  ProdukElektronik.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Elektronik
btnTutupElektronik.addEventListener("click", () => {
  ProdukElektronik.classList.add("opacity-0", "pointer-events-none");
});

// Lihat Keranjang Elektronik
ElektronikLihatKeranjang.addEventListener("click", () => {
  keranjang.classList.remove("opacity-0", "pointer-events-none");
  ProdukElektronik.classList.add("opacity-0", "pointer-events-none");
});

// Open Produk Claim
btnOpenClaim.addEventListener("click", () => {
  Claim.classList.remove("opacity-0", "pointer-events-none");
});

// Close Produk Claim
btnCloseClaim.addEventListener("click", () => {
  Claim.classList.add("opacity-0", "pointer-events-none");
});

// Tutup Produk Claim
btnTutupClaim.addEventListener("click", () => {
  Claim.classList.add("opacity-0", "pointer-events-none");
});
