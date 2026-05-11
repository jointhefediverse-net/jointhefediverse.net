import onReady from "./modules/onReady.js";

onReady(() => {
  const qrCodeEl = document.getElementById("qrcode");
  const qrInviteInputEl = document.getElementById("qr-invite");
  const qrDomainEl = document.getElementById("qr-domain");
  const locale = qrInviteInputEl.dataset.locale;
  const defaultUrl = "https://jointhefediverse.net/?lang=" + locale;
  const defaultDomain = "JoinTheFediverse.net";

  const qrCode = new QRCode(qrCodeEl, {
    text: defaultUrl,
    width: 256,
    height: 256,
  });

  const qrCodeIMG = qrCodeEl.querySelector("img");

  if (qrCodeIMG) {
    qrCodeIMG.alt = qrCodeEl.dataset.alt;
  }

  function isValidInviteURL(url) {
    try {
      const { protocol, hostname } = new URL(url);
      return (
        protocol === "https:" && hostname === "invite.jointhefediverse.net"
      );
    } catch {
      return false;
    }
  }

  qrInviteInputEl.addEventListener("input", function () {
    const val = this.value.trim();
    const isValidInvite = isValidInviteURL(val);

    if (!val) {
      this.classList.remove("is-invalid");
      qrCode.makeCode(defaultUrl);
      qrDomainEl.textContent = defaultDomain;
    } else if (isValidInvite) {
      this.classList.remove("is-invalid");
      qrCode.makeCode(val);
      qrDomainEl.textContent = "invite.jointhefediverse.net";
    } else {
      this.classList.add("is-invalid");
      qrCode.makeCode(defaultUrl);
      qrDomainEl.textContent = defaultDomain;
    }

    const img = qrCodeEl.querySelector("img");

    if (img) {
      img.alt = qrCodeEl.dataset.alt;
    }
  });
});
