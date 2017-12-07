### 0.6.1

* Remove some cruft from the SDK

### 0.6.0

* Expose additional methods for logging

### 0.5.5

##### Changes

* Fix a case where MutationObserver was overwritten by user-land code.

### 0.5.4

##### Changes

* Make sure LogRocket doesn't fail to load in NodeJS environment
* Improve timekeeping in browsers with incorrect clocks

### 0.5.3

##### Changes

* Add sessionURL to types.
* Fixed reduxMiddleware type
* Fixed Typescript module definition

### 0.5.2

##### Changes

* Fix `instanceof` checks on `XMLHttpRequest`.
* Added TypeScript definition file.

### 0.5.1

##### Changes

* Switch to an unminified bundle to fix builds for old Webpack versions.

### 0.5.0

##### Features

* Add `LogRocket.track()` for custom analytics events: https://docs.logrocket.com/v1.0/reference#track

### 0.4.3

##### Bugfixes

* Correctly truncate network data for large XHR requests.

### 0.4.2

##### Bugfixes

* Correctly forward XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED, XMLHttpRequest.HEADERS_RECEIVED, XMLHttpRequest.LOADING, and XMLHttpRequest.DONE.

### 0.4.1

##### Changes

* console and network shims are on installed if `LogRocket.init()` is called, instead of when
`LogRocket` is imported. This should make it easier to only install LogRocket in a staging/prod
environment.
* `whatwg-fetch` is no longer included automatically. Make sure to import `whatwg-fetch` before calling `LogRocket.init()`.
* Decreased gzipped bundle size from ~22kb to ~8kb!
