import { G as push, a7 as copy_payload, a8 as assign_payload, J as pop } from './index2-BDI6ceGZ.js';
import { S as Subscribe_dialog } from './subscribe-dialog-CKIVcxse.js';
import './index3-3fT-JMUq.js';
import './constants-Bz9XXnp8.js';
import './Icon-GMgxP5jJ.js';
import './_commonjsHelpers-B85MJLTf.js';
import './dialog-overlay-Cwp3Sdsg.js';
import './index-server-B9vFxl5H.js';
import './events-Dpdf-Hjr.js';
import './input-f6lprDJV.js';
import './exports-BX5H4HJi.js';
import './schema-CVY2n87S.js';
import './superValidate-KMnltoiV.js';
import './index-DHSpIlkf.js';
import './stores-BlRUJoP4.js';
import './client-D-af4Dn1.js';
import './stringify-Djm7PJzE.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let dialogValue = true;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Subscribe_dialog($$payload2, {
      data: data.form,
      get value() {
        return dialogValue;
      },
      set value($$value) {
        dialogValue = $$value;
        $$settled = false;
      }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C8HWHIlX.js.map
