import { Z as sanitize_props, S as spread_props, Y as slot } from './index2-BDI6ceGZ.js';
import { I as Icon } from './Icon-GMgxP5jJ.js';

function Check_check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 7 17l-5-5" }],
    ["path", { "d": "m22 10-7.5 7.5L13 16" }]
  ];
  Icon($$payload, spread_props([
    { name: "check-check" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}

export { Check_check as C };
//# sourceMappingURL=check-check-XXy3fk0I.js.map
