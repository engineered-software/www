import { G as push, a5 as escape_html, J as pop, a6 as getContext } from './index2-BDI6ceGZ.js';
import { s as stores } from './client-D-af4Dn1.js';
import './exports-BX5H4HJi.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-Dis6B9fE.js.map
