const Cookies = {
  setCookie: (cookieName, cookieValue, maxAgeDays) => {
    maxAgeDays = maxAgeDays || 365;
    document.cookie = `${cookieName}=${cookieValue}; maxAge=${
      maxAgeDays || 24 * 60 * 60 * 1000
    };path=/`;
  },
  getCookie: (cookieName) => {
    let name = cookieName + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  checkCookie: () => {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  },
};

export default Cookies;
