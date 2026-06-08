# WEB103 Project 1 - *BookShelf*

Submitted by: **Faisal Rasheed Khan**

About this web app: **BookShelf is a list-based web app that displays a curated collection of must-read books. Users can browse books displayed as cards on the home page and click on any book to view its detailed information including title, author, genre, year, rating, and description.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3000/books/dune/1` and `localhost:3000/books/sapiens/6`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Books are displayed in a responsive grid layout that adapts to different screen sizes
- [x] Each book card displays a hover animation effect
- [x] Detail pages include genre tags, publication year, and star ratings
- [x] Custom warm color theme applied on top of Picocss

## Video Walkthrough

**Note: please be sure to show the unique URL for each detailed view in the walkthrough**

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/9XCMacc.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ... Add GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
Challenges:
- Setting up ES module syntax (`import`/`export`) instead of CommonJS (`require`) was a key challenge since the project used `"type": "module"` in package.json
- Structuring the project with a separate `server/` folder outside the Vite client folder required careful path management using `fileURLToPath` and `import.meta.url` to replicate `__dirname` in ES module scope
- Designing the URL structure as `/books/:id/:bookId` (e.g. `localhost:3000/books/dune/1`) ensures each book has a truly unique and descriptive endpoint

## License

Copyright [2026] [Faisal Rasheed Khan]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in
compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions and limitations under the License.
