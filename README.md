# JoinTheFediverse.net

Learn about the fediverse and find your new community.
## Development

This projects uses node 18.13.0.

```sh
npm install
npm start dev
```

## Translation

1. Add or update JSON files with translation strings inside `translations`.

note: please note the two variables *site_lang_locale* and *site_lang_dir in translations/main.json.

For the site language, please specify the 2-letter code under *site_lang_locale* and throughout your translations. The code is referenced in [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
for example Slovak is 'sk'.

For the text direction,  some languages are right to left such as Hebrew or Arabic, and the majority are right to left. To maintain uniformity across all the translations,
please put LTR, which means Left to Right, or RTL, which means Right to Left, in *site_lang_dir* 

2. Run `npm run translate` to generate translation files inside `locales`.
