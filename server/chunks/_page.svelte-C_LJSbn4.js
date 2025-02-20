import { G as push, $ as ensure_array_like, a5 as escape_html, J as pop } from './index2-BDI6ceGZ.js';
import './client-D-af4Dn1.js';
import './exports-BX5H4HJi.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let { notes, supabase, user } = data;
  const each_array = ensure_array_like(notes);
  $$payload.out += `<h1>Private page for user: ${escape_html(user?.email)}</h1> <h2>Notes</h2> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let note = each_array[$$index];
    $$payload.out += `<li>${escape_html(note.note)}</li>`;
  }
  $$payload.out += `<!--]--></ul> <form><label>Add a note <input name="note" type="text"></label></form>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C_LJSbn4.js.map
