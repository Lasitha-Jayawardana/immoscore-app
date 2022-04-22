The advantage of keeping everything domain-focused instead of putting all your pages together in components/pages is that it makes it really easy to look at the structure of the application and know how many top level views there are, and know where everything that's only used by that view is. If there are nested routes, you can always add a nested views folder within the main route.

.
└── /src
└── /views
├── /Authors
│   ├── /AuthorsPage
│   │   ├── AuthorsPage.js
│   │   └── AuthorsPage.test.js
│   └── /AuthorBlurb
│       ├── /AuthorBlurb.js
│       └── /AuthorBlurb.test.js
├── /Books
│   ├── /BooksPage
│   │   ├── BooksPage.js
│   │   └── BooksPage.test.js
│   └── /BookForm
│       ├── /BookForm.js
│       └── /BookForm.test.js
└── /Login
├── LoginPage
│   ├── LoginPage.styles.js
│   ├── LoginPage.js
│   └── LoginPage.test.js
└── LoginForm
├── LoginForm.js
└── LoginForm.test.js

    Keeping everything within folders might seem annoying if you've never set up your project that way - you can always keep it more flat, or move tests to its own directory that mimics the rest of the app.


├── pages
│   ├── Home
│   │   ├── components
│   │   │   ├── TVLBar.js
│   │   │   └── Welcome.js
│   │   └── index.js
│   ├── Login.js
│   └── Profile.js
