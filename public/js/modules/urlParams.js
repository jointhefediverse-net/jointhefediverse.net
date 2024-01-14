const getUrlParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(param);

    return value;
};

const setUrlParam = (param, value) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(param, value);
    window.location.search = urlParams;
};

export { getUrlParam, setUrlParam };
