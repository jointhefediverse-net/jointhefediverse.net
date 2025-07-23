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
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "ca",
    },
    "cz-cs": {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "cs",
    },
    // "da-dk" : {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "da",
    // },
    "de-de": {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "de",
    },
    "en-us": {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "en",
    },
    // eo: {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "XXXX",
    // },
    "es-es": {
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
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "fi",
    },
    fr: {
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
      video_id: "petiQESS6xH5B68Pysqfug",
      video_subtitles: "it",
    },
    // "ko-kr" : {
    //   video_id: "64VuNCccZNrP4u9MfgbhkN",
    //   video_subtitles: "ko",
    // },
    nl: {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "nl",
    },
    pl: {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "pl",
    },
    "pt-br": {
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
    "sv" : {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "sv",
    },
    "zh-hans": {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "XXXX",
    },
    "zh-hant": {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "zh",
    },
    "zh-tw": {
      video_id: "64VuNCccZNrP4u9MfgbhkN",
      video_subtitles: "XXXX",
    },
  };

  return videoAttrMapping[
    videoAttrMapping.hasOwnProperty(locale) ? locale : "en-us"
  ];
};
