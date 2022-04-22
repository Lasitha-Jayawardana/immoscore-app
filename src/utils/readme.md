.
└── src
└── /utils
├── /constants
│   └── countries.constants.js
└── /helpers
├── validation.helpers.js
├── currency.helpers.js
└── array.helpers.js

Again, the utils folder can contain anything you want that you think makes sense to keep on a global level. If you don't prefer the "multi-tier" filenames, you could just call it validation.js, but the way I see it, being explicit does not take anything away from the project, and makes it easier to navigate filenames when searching in your IDE.


├── utils
│   ├── hooks
│   │   ├── useChat.js
│   │   ├── useOutsideAlerter.js
│   │   ├── useToast.js
│   ├── providers
│   │   ├── HomeContextProvider.js
│   │   ├── ToastContextProvider.js
│   ├── colors.js
│   ├── constants.js
│   ├── index.js

Here, we have a bunch of utilities like: custom hooks, context providers, constants and helper functions. Feel free to add more stuff here.
