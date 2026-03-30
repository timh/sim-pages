/* tslint:disable */
/* eslint-disable */

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly main: (a: number, b: number) => number;
    readonly wasm_bindgen__closure__destroy__hf4b4eef028da74aa: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h546a012293a8d2af: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__hc5f2bce32e050ae0: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__hc88b1da78e9decb3: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__hce8615ec407fee8b: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__hebc1a591ff60b5a5: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h9e9e6773c03a2e06: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h7bfb04643f7ac75d: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hf6b83790e83b945e: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__had725f5ca96b17d9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h7c11c2ef608e21a4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1a679fcfbd03af16: (a: number, b: number) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h127529ea68f7d725: (a: number, b: number) => number;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
