export default (locale) => {
  const videoAttrMapping = {
    // ar: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    // bg: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    ca: {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "ca",
    },
    "cz-cs": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "cs",
    },
    // "da-dk" : {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "da",
    // },
    "de-de": {
      // video_server: "videos.elenarossini.com",
      // video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_server: "digitalcourage.video",
      video_id: "thFf16Yt9y8AMFz1k8P6v1",
      video_subtitles: "de",
    },
    "en-us": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "en",
    },
    "eo": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "eo",
    },
    "es-es": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "es",
    },
    // eu: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    // fa: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    fi: {
      // video_server: "videos.elenarossini.com",
      // video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_server: "peertube.wtf",
      video_id: "dD9r3Nfn2jCfB9sUov2pRT",
      video_subtitles: "fi",
    },
    fr: {
      video_server: "videos.elenarossini.com",
      video_id: "hxzy97B63KJBtVC6jU5Cf4",
      video_subtitles: "fr",
    },
    // gl: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    // id: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    it: {
      video_server: "videos.elenarossini.com",
      video_id: "petiQESS6xH5B68Pysqfug",
      video_subtitles: "it",
    },
    // "ko-kr" : {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "ko",
    // },
    nl: {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "nl",
    },
    pl: {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "pl",
    },
    "pt-br": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "pt",
    },
    // ru: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    // sk: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    sv: {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "sv",
    },
    "zh-hans": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "XXXX",
    },
    "zh-hant": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "zh",
    },
    "zh-tw": {
      video_server: "videos.elenarossini.com",
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "XXXX",
    },
  };

  return videoAttrMapping[
    videoAttrMapping.hasOwnProperty(locale) ? locale : "en-us"
  ];
};
