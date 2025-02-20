import { G as push, a0 as attr, J as pop } from './index2-BDI6ceGZ.js';
import { g as getTranslationFunctions } from './index3-3fT-JMUq.js';
import './constants-Bz9XXnp8.js';

function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  let { supabase } = data;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<header><nav><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))}>Home</a></nav> <button>Logout</button></header> <main>`;
  children($$payload);
  $$payload.out += `<!----></main>`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CLigRue5.js.map
