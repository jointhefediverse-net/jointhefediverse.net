import express from "express";
import fediverseVideoMapping from "../modules/fediverseVideoMapping.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { video_id, video_subtitles } = fediverseVideoMapping(
    res?.currentLocale?.code || "en-us"
  );

  res.render("../views/learn.handlebars", {
    supported_languages: JSON.stringify(res.locals.languages),
    translations: res.translations,
    current_locale: res.currentLocale,
    video_id,
    video_subtitles,
    footer_scripts: process.env.FOOTER_SCRIPTS,
  });
});

export default router;
