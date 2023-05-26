![Logos of various fediverse platforms arranged in a circle, with little envelopes being sent between them.](public/images/images/fedi-920x240.png)
# JoinTheFediverse.net

Learn about the fediverse and find your new community.
## Development

This projects uses node 18.13.0.

```sh
npm install
npm start dev
```

## Translation

The current translation workflow is described below. If you don't have a GitHub account, or prefer not to use it, feel free to follow steps 1 through 3 and send the translated files [via email](https://stefanbohacek.com/contact/).

Otherwise, you can fork this repo, make the necessary changes, and open a pull request.

1. Navigate to the `translations` folder.
2. Add a new language section inside the `info.json` file.

```js
    {
        "label": "Native name of the language",
        "label_en": "English name of the language, used for sorting",
        "lang_dir": "the direction of the languaue, LTR or RTL",
        "code": "the ISO 639-1 language code, see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",
        "available": true, // Should the language be visible in the language picker? true or false
        "translators": [ // List of people who contributed to the translation
            {
                "name": "Person A",
                "url": "https://example.social/@person_a"
            },
            {
                "name": "Person B",
                "url": "https://example.social/@person_b"
            }
        ]
    },
```
3. Update the JSON files inside the `data` folder for each page and selected site sections.
4. Run `npm run translate` to generate translation files inside `locales`.
