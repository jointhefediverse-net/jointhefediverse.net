import assert from "node:assert/strict";
import test from "node:test";

const logo = {
  alt: "Gmail logo",
  dataset: {
    email: "gmail",
    emailAlt: "Gmail logo",
    social: "facebook",
    socialAlt: "Facebook logo",
    fediverse: "mastodon",
    fediverseAlt: "Mastodon logo",
  },
  src: "images/logos/email/gmail.svg",
};

globalThis.document = {
  getElementsByClassName: () => [logo],
  querySelector: () => null,
  querySelectorAll: () => [],
};

const { default: animate } = await import("../public/js/modules/animation.js");

test("animate updates logo alt text with the displayed platform", () => {
  animate(2);
  assert.equal(logo.alt, "Facebook logo");

  animate(3);
  assert.equal(logo.alt, "Mastodon logo");

  animate(1);
  assert.equal(logo.alt, "Gmail logo");
});
