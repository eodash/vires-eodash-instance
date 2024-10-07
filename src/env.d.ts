/// <reference types="vite/client" />

// declare module "*.vue" {
//     import type { DefineComponent } from "vue";
//     const component: DefineComponent<object, object, unknown>;
//     export default component;
// }

declare module "stac-js/src/http.js" {
    const toAbsolute: (...args: string[]) => string;
    export { toAbsolute };
}
