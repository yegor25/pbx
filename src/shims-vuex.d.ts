// Этот файл принудительно объясняет TypeScript, где искать типы Vuex 4
declare module "vuex" {
  export * from "vuex/types/index.d.ts";
  export { createStore, Store, useStore } from "vuex/types/index.d.ts";
}
