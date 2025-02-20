import { G as push, a7 as copy_payload, a8 as assign_payload, J as pop, a1 as spread_attributes, a0 as attr, a2 as clsx, T as store_get, X as bind_props, S as spread_props, aa as store_mutate, V as unsubscribe_stores, Z as sanitize_props, Y as slot, _ as rest_props } from './index2-BDI6ceGZ.js';
import { g as getTranslationFunctions } from './index3-3fT-JMUq.js';
import { g as getStores } from './stores-BlRUJoP4.js';
import { p as pushState } from './client-D-af4Dn1.js';
import { c as cn, B as Button, I as Icon } from './Icon-GMgxP5jJ.js';
import { F as Form_field, C as Control, a as Form_label, I as Input } from './input-f6lprDJV.js';
import './schema-CVY2n87S.js';
import { b as superForm, c as zodClient } from './superValidate-KMnltoiV.js';
import './index-DHSpIlkf.js';
import { f as formSchema } from './auth-CAVaF795.js';

function Form_button($$payload, $$props) {
  let { ref = null, $$slots, $$events, ...restProps } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Button($$payload2, spread_props([
      { type: "submit" },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
}
function Loader_circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M21 12a9 9 0 1 1-6.219-8.56" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "loader-circle" },
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
function Google($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$payload.out += `<svg${spread_attributes(
    {
      role: "img",
      viewBox: "0 0 24 24",
      ...$$restProps
    },
    void 0,
    void 0,
    3
  )}><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>`;
}
function User_auth_form($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    class: className,
    data,
    action,
    $$slots,
    $$events,
    ...props
  } = $$props;
  getStores();
  data.allowedEmails.split(",");
  const form = superForm(data.form, {
    validators: zodClient(formSchema),
    onResult: ({ result }) => {
      if (result.type === "success" && result.data.needsSubscription) {
        const currentPath = window.location.pathname;
        pushState(currentPath, {
          subscriberEmail: store_get($$store_subs ??= {}, "$formData", formData).email
        });
        return;
      }
    }
  });
  const { form: formData, enhance, submitting } = form;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div${spread_attributes({
      class: clsx(cn("grid gap-6", className)),
      ...props
    })}><form${attr("action", paraglide_sveltekit_translate_attribute_pass_translateAttribute(action, void 0))} method="POST"><div class="grid gap-4"><div class="grid gap-1"><!---->`;
    Form_field($$payload2, {
      form,
      name: "email",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        {
          let children = function($$payload4, { props: props2 }) {
            $$payload4.out += `<!---->`;
            Form_label($$payload4, {
              class: "sr-only",
              for: "email",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Username`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, spread_props([
              props2,
              {
                id: "email",
                type: "email",
                autocorrect: "off",
                autocomplete: "email",
                autocapitalize: "none",
                disabled: store_get($$store_subs ??= {}, "$submitting", submitting),
                placeholder: "name@example.com",
                get value() {
                  return store_get($$store_subs ??= {}, "$formData", formData).email;
                },
                set value($$value) {
                  store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).email = $$value);
                  $$settled = false;
                }
              }
            ]));
            $$payload4.out += `<!---->`;
          };
          Control($$payload3, { children });
        }
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div> <!---->`;
    Form_button($$payload2, {
      disabled: store_get($$store_subs ??= {}, "$submitting", submitting),
      onclick: () => store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).authType = "email"),
      children: ($$payload3) => {
        if (store_get($$store_subs ??= {}, "$submitting", submitting)) {
          $$payload3.out += "<!--[-->";
          Loader_circle($$payload3, { class: "mr-2 h-4 w-4 animate-spin" });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> Sign In with Email`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="grid gap-6"><div class="relative mt-2"><div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div> <div class="relative flex justify-center text-xs uppercase"><span class="bg-background text-muted-foreground px-2">Or continue with</span></div></div> <!---->`;
    Form_field($$payload2, {
      form,
      name: "authType",
      class: "hidden",
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Control($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<input${spread_attributes({
              ...props,
              type: "hidden",
              name: "authType",
              value: store_get($$store_subs ??= {}, "$formData", formData).authType
            })}>`;
          }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <!---->`;
    Form_button($$payload2, {
      variant: "outline",
      disabled: store_get($$store_subs ??= {}, "$submitting", submitting),
      onclick: () => store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).authType = "google"),
      children: ($$payload3) => {
        if (store_get($$store_subs ??= {}, "$submitting", submitting)) {
          $$payload3.out += "<!--[-->";
          Loader_circle($$payload3, { class: "mr-2 h-4 w-4 animate-spin" });
        } else {
          $$payload3.out += "<!--[!-->";
          Google($$payload3, { class: "mr-2 h-4 w-4" });
        }
        $$payload3.out += `<!--]--> Google`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div></form></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { User_auth_form as U };
//# sourceMappingURL=user-auth-form-CasdBPIG.js.map
