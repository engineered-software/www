import { w as writable } from './exports-BX5H4HJi.js';
import { ad as noop } from './index2-BDI6ceGZ.js';

function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    url: new URL("https://example.com")
  });
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
let app;
function invalidateAll() {
  {
    throw new Error("Cannot call invalidateAll() on the server");
  }
}
function pushState(url, state) {
  {
    throw new Error("Cannot call pushState(...) on the server");
  }
}
async function applyAction(result) {
  {
    throw new Error("Cannot call applyAction(...) on the server");
  }
}

export { applyAction as a, app as b, invalidateAll as i, pushState as p, stores as s };
//# sourceMappingURL=client-D-af4Dn1.js.map
