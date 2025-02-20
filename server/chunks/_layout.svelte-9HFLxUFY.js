import { G as push, J as pop } from './index2-BDI6ceGZ.js';
import { g as getTranslationFunctions } from './index3-3fT-JMUq.js';
import './constants-Bz9XXnp8.js';

function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  let { supabase } = data;
  getTranslationFunctions();
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-9HFLxUFY.js.map
