declare var LogRocket: LR.LogRocket;

export = LogRocket;

declare module LR {
  interface Options {
    release?: string,
    console?: {
      isEnabled?: boolean | {
        log?: boolean,
        info?: boolean,
        debug?: boolean,
        warn?: boolean,
        error?: boolean
      },
    },
    network?: {
      isEnabled?: boolean,
      requestSanitizer?(request: Object): null | Object,
      responseSanitizer?(response: Object): null | Object,
    },
    dom?: {
      isEnabled?: boolean,
      baseHref?: string
    }
  }

  interface UserTraits {
    [propName: string]: string,
  }

  interface ReduxMiddlewareOptions {
    stateSanitizer?(state: Object): Object,
    actionSanitizer?(action: Object): null | Object,
  }

  interface LogRocket {
    init(appID: string, options?: Options): void;

    // logging functions
    log(...props: any[]): void;
    info(...props: any[]): void;
    warn(...props: any[]): void;
    error(...props: any[]): void;
    debug(...props: any[]): void;

    // getters
    version(): string;

    // other functions
    identify(uid: string, traits?: UserTraits): void;
    reduxMiddleware(options?: ReduxMiddlewareOptions): any;
    track(eventName: string): void;
    getSessionURL(callback: (sessionURL: string) => void): void;
    startNewSession(): void;
    sessionURL: string;
  }
}
