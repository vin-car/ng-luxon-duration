# ng-luxon-duration

Pipes for use and format Luxon `Duration` in Angular (2+)

---

Installation
------------

Node.js

`npm install ng-luxon-duration`

Usage
-----

Import `LuxonDurationModule` into your app's modules:

``` typescript
import { LuxonDurationModule } from 'ng-luxon-duration';

@NgModule({
  imports: [
    LuxonDurationModule
  ]
})
```

This makes all the `ng-luxon-duration` pipes available for use in your app components.

Available pipes
---------------

### `aldFromISO` pipe

Create a Duration from an ISO 8601 duration string. Accepts same optional `opts` parameter as [`Duration.fromISO`](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html#static-method-fromISO).

Example:

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{myISODuration | aldFromISO | aldToFormat:'hh:mm:ss' }}
  `
})
```

### `aldFromMillis` pipe

Create a Duration from a number of milliseconds. Accepts same optional `opts` parameter as [`Duration.fromMillis`](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html#static-method-fromMillis).

Example:

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{millis | aldFromMillis | aldToFormat:'hh:mm:ss' }}
  `
})
```
### `aldFromObject` pipe

Create a Duration from a Javascript object with keys like 'years' and 'hours'. See [`Duration.fromObject`](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html#static-method-fromObject) for more details about the keys and the accepted options.

Example:

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{myDurationObject | aldFromObject | aldToFormat:'hh:mm:ss' }}
  `
})
```

### `aldToFormat` pipe

Returns a string representation of this Duration formatted according to the specified format string.  Accepts same optional `opts` parameter as [`Duration.fromISO`](https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html#instance-method-toFormat).

Example:

``` typescript
@Component({
  selector: 'app',
  template: `
    Last updated: {{myISODuration | aldFromISO | aldToFormat:'hh:mm:ss' }}
  `
})
```

---

## License

Released under the terms of the [MIT License](LICENSE).