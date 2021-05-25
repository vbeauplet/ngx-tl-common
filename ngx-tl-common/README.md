# Get Started

## Install Package

Install library within your angular project

    npm install ngx-tl-common

## Add style

Reference global ngx-tl-common styles from your application angular.json

    "styles": [
      "src/styles.css",
      "./node_modules/ngx-tl-common/lib/style/tl-common-styles.scss"
    ],

If you do not want to set-up the dynamic theme service or create your custom static theme, you shall reference a default static theme from the style array in angular.json:

    "styles": [
      "src/styles.css",
      "./node_modules/ngx-tl-common/lib/style/tl-common-styles.scss",
      "./node_modules/ngx-tl-common/lib/style/themes/tl-common-light-theme.scss"
    ],

## Import into root application module

In app.module.ts:

    import { NgxTlCommonModule } from 'ngx-tl-common';
    ...
      imports: [
        BrowserModule,
        AppRoutingModule,
        NgxTlCommonModule
      ],

And that is all, you are ready to go

# Discover

Discover more on ngx-tl-common from the decicated sample applcation: [Ngx-tl-common Help Center](https://ngx-tl-common.web.app)