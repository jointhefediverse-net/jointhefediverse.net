![Logos of various fediverse platforms arranged in a circle, with little envelopes being sent between them.](public/images/images/fedi-920x240.png)
# JoinTheFediverse.net

Learn about the fediverse and find your new community.
## Development

This projects uses node 18.13.0.

```sh
#install dependencies
npm install

# start development server
npm start dev
```

Note that there is an [open ticket](https://github.com/jointhefediverse-net/jointhefediverse.net/issues/13) to migrate the styles to SCSS, which will also require adding a build step.

## Translation

If you'd like to help translate the site to another language, please [reach out](https://stefanbohacek.com/contact/) first so that we can open a new translation ticket to keep track of any ongoing work.

You can see a list of translation tickets [here](https://github.com/jointhefediverse-net/jointhefediverse.net/issues?q=is%3Aopen+is%3Aissue+author%3A%40me+sort%3Aupdated-desc+label%3Atranslation).

The current translation workflow is described below. If you don't have a GitHub account, or prefer not to use it, feel free to follow steps 1 through 3 and send the translated files [via email](https://stefanbohacek.com/contact/).

Otherwise, you can [fork this repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), make the necessary changes, and open a pull request.

Step 4 does not require installing project dependencies, but you will need [node](https://nodejs.org/en/download) installed.

1. Navigate to the `translations` folder.
2. Add a new language section inside the `info.json` file. If you need help with this step, please reach out!

```js
    {
        "label": "Native name of the language",
        "label_en": "English name of the language",
        "label_lat": "latinized native name of the language, used for sorting",
        "lang_dir": "the direction of the languaue, LTR (left-to-right) or RTL (right-to-left)",
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

Please note that `label_lat` should be a latinized (or transliterated) version of the English name of the language. This is needed for a more natural alphabetical sorting in the language picker menu. For example, for Spanish:

```json
"label": "Español",
"label_en": "Spanish",
"label_lat": "espanol",
```

3. Update the JSON files inside the `data` folder for each page and selected site sections.
4. Run `npm run translate` to generate translation files inside `locales`.

Keep in mind that the goal is to [communicate the same ideas to an audience in a different culture](https://localizejs.com/articles/what-is-the-difference-between-translation-and-localization/). For example, in this sentence:

> You're probably using Gmail. Or perhaps Outlook. Or Yahoo Mail.

Consider listing services that are popular in your particular country.

> Pravdepodobne používaš Gmail. Alebo Zoznam.sk. Možno Centrum.sk.
