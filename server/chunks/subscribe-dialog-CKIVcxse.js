import { G as push, a7 as copy_payload, a8 as assign_payload, X as bind_props, J as pop, S as spread_props, a1 as spread_attributes, a0 as attr, aa as store_mutate, T as store_get, V as unsubscribe_stores, a2 as clsx, Z as sanitize_props, Y as slot } from './index2-BDI6ceGZ.js';
import { g as getTranslationFunctions } from './index3-3fT-JMUq.js';
import { b as box, c as cn, u as useId, m as mergeProps, a as buttonVariants, I as Icon } from './Icon-GMgxP5jJ.js';
import { n as noop, u as useDialogRoot, P as Portal, a as useDialogContent, b as Presence_layer, D as Dialog_overlay, F as Focus_scope, s as shouldTrapFocus, E as Escape_layer, c as Dismissible_layer, T as Text_selection_layer, S as Scroll_lock, d as useDialogTitle, e as useDialogDescription, f as useAlertDialogCancel, g as useAlertDialogAction } from './dialog-overlay-Cwp3Sdsg.js';
import { F as Form_field, C as Control, a as Form_label, I as Input, u as useId$1, b as useDescription, c as box$1, m as mergeProps$1 } from './input-f6lprDJV.js';
import { f as formSchema } from './schema-CVY2n87S.js';
import './client-D-af4Dn1.js';
import { b as superForm, c as zodClient } from './superValidate-KMnltoiV.js';
import './index-DHSpIlkf.js';

function Alert_dialog($$payload, $$props) {
  push();
  let { open = false, onOpenChange = noop, children } = $$props;
  useDialogRoot({
    variant: box.with(() => "alert-dialog"),
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    })
  });
  children?.($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { open });
  pop();
}
function Dialog_title($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    child,
    children,
    level = 2,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const titleState = useDialogTitle({
    id: box.with(() => id),
    level: box.with(() => level),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, titleState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Alert_dialog_action$1($$payload, $$props) {
  push();
  let {
    children,
    child,
    id = useId(),
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const actionState = useAlertDialogAction({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, actionState.props);
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes({ ...mergedProps }, [{ attribute_name: "formaction" }])
    })}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Alert_dialog_cancel$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    children,
    child,
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const cancelState = useAlertDialogCancel({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, cancelState.props);
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      ...paraglide_sveltekit_translate_attribute_pass_handle_attributes({ ...mergedProps }, [{ attribute_name: "formaction" }])
    })}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Alert_dialog_content$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    children,
    child,
    ref = null,
    forceMount = false,
    interactOutsideBehavior = "ignore",
    onCloseAutoFocus = noop,
    onEscapeKeydown = noop,
    onOpenAutoFocus = noop,
    onInteractOutside = noop,
    preventScroll = true,
    trapFocus = true,
    restoreScrollDelay = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = useDialogContent({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  {
    let presence = function($$payload2) {
      {
        let focusScope = function($$payload3, { props: focusScopeProps }) {
          Escape_layer($$payload3, spread_props([
            mergedProps,
            {
              enabled: contentState.root.opts.open.current,
              onEscapeKeydown: (e) => {
                onEscapeKeydown(e);
                if (e.defaultPrevented) return;
                contentState.root.handleClose();
              },
              children: ($$payload4) => {
                Dismissible_layer($$payload4, spread_props([
                  mergedProps,
                  {
                    enabled: contentState.root.opts.open.current,
                    interactOutsideBehavior,
                    onInteractOutside: (e) => {
                      onInteractOutside(e);
                      if (e.defaultPrevented) return;
                      contentState.root.handleClose();
                    },
                    children: ($$payload5) => {
                      Text_selection_layer($$payload5, spread_props([
                        mergedProps,
                        {
                          enabled: contentState.root.opts.open.current,
                          children: ($$payload6) => {
                            if (child) {
                              $$payload6.out += "<!--[-->";
                              if (contentState.root.opts.open.current) {
                                $$payload6.out += "<!--[-->";
                                Scroll_lock($$payload6, { preventScroll, restoreScrollDelay });
                              } else {
                                $$payload6.out += "<!--[!-->";
                              }
                              $$payload6.out += `<!--]--> `;
                              child($$payload6, {
                                props: mergeProps(mergedProps, focusScopeProps),
                                ...contentState.snippetProps
                              });
                              $$payload6.out += `<!---->`;
                            } else {
                              $$payload6.out += "<!--[!-->";
                              Scroll_lock($$payload6, { preventScroll });
                              $$payload6.out += `<!----> <div${spread_attributes({
                                ...mergeProps(mergedProps, focusScopeProps)
                              })}>`;
                              children?.($$payload6);
                              $$payload6.out += `<!----></div>`;
                            }
                            $$payload6.out += `<!--]-->`;
                          },
                          $$slots: { default: true }
                        }
                      ]));
                    },
                    $$slots: { default: true }
                  }
                ]));
              },
              $$slots: { default: true }
            }
          ]));
        };
        Focus_scope($$payload2, spread_props([
          {
            loop: true,
            trapFocus: shouldTrapFocus({
              forceMount,
              present: contentState.root.opts.open.current,
              trapFocus,
              open: contentState.root.opts.open.current
            })
          },
          mergedProps,
          {
            onCloseAutoFocus: (e) => {
              onCloseAutoFocus(e);
              if (e.defaultPrevented) return;
              contentState.root.triggerNode?.focus();
            },
            onOpenAutoFocus: (e) => {
              onOpenAutoFocus(e);
              if (e.defaultPrevented) return;
              e.preventDefault();
              contentState.root.cancelNode?.focus();
            },
            focusScope,
            $$slots: { focusScope: true }
          }
        ]));
      }
    };
    Presence_layer($$payload, spread_props([
      mergedProps,
      {
        forceMount,
        present: contentState.root.opts.open.current || forceMount,
        presence,
        $$slots: { presence: true }
      }
    ]));
  }
  bind_props($$props, { ref });
  pop();
}
function Dialog_description($$payload, $$props) {
  push();
  let {
    id = useId(),
    children,
    child,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const descriptionState = useDialogDescription({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, descriptionState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Alert_dialog_title($$payload, $$props) {
  push();
  let {
    class: className,
    level = 3,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Dialog_title($$payload2, spread_props([
      {
        class: cn("text-lg font-semibold", className),
        level
      },
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
  pop();
}
function Alert_dialog_action($$payload, $$props) {
  push();
  let {
    class: className,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Alert_dialog_action$1($$payload2, spread_props([
      { class: cn(buttonVariants(), className) },
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
  pop();
}
function Alert_dialog_cancel($$payload, $$props) {
  push();
  let {
    class: className,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Alert_dialog_cancel$1($$payload2, spread_props([
      {
        class: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)
      },
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
  pop();
}
function Alert_dialog_footer($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    class: clsx(cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Alert_dialog_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    class: clsx(cn("flex flex-col space-y-2 text-center sm:text-left", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Alert_dialog_overlay($$payload, $$props) {
  push();
  let {
    class: className,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Dialog_overlay($$payload2, spread_props([
      {
        class: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", className)
      },
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
  pop();
}
function Alert_dialog_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    portalProps,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Portal($$payload2, spread_props([
      portalProps,
      {
        children: ($$payload3) => {
          Alert_dialog_overlay($$payload3, {});
          $$payload3.out += `<!----> <!---->`;
          Alert_dialog_content$1($$payload3, spread_props([
            {
              class: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg", className)
            },
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
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
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
  pop();
}
function Alert_dialog_description($$payload, $$props) {
  push();
  let {
    class: className,
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Dialog_description($$payload2, spread_props([
      {
        class: cn("text-muted-foreground text-sm", className)
      },
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
  pop();
}
const Root = Alert_dialog;
function Description($$payload, $$props) {
  push();
  let {
    id = useId$1(),
    ref = null,
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const descriptionState = useDescription({
    id: box$1.with(() => id),
    ref: box$1.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps$1(restProps, descriptionState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Form_description($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Description($$payload2, spread_props([
      {
        class: cn("text-muted-foreground text-[0.8rem]", className)
      },
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
  pop();
}
function Mail_check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ],
    ["path", { "d": "m16 19 2 2 4-4" }]
  ];
  Icon($$payload, spread_props([
    { name: "mail-check" },
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
function Subscribe_dialog($$payload, $$props) {
  push();
  var $$store_subs;
  let { data, value = void 0 } = $$props;
  const form = superForm(data, {
    validators: zodClient(formSchema),
    dataType: "json"
  });
  const { form: formData, enhance } = form;
  function handleClose() {
    value = false;
  }
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Root($$payload2, {
      get open() {
        return value;
      },
      set open($$value) {
        value = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        Alert_dialog_content($$payload3, {
          class: "sm:max-w-[440px]",
          children: ($$payload4) => {
            $$payload4.out += `<!---->`;
            Alert_dialog_header($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Alert_dialog_title($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Subscribe for Early Access`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Alert_dialog_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->We respect your inbox—no spam, ever. Unsubscribe anytime.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <form method="POST"${attr("action", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/subscribe`, void 0))} class="w-12x/12 space-y-5 px-3"><div class="flex gap-3"><!---->`;
            Form_field($$payload4, {
              form,
              name: "name",
              class: "w-5/12",
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                {
                  let children = function($$payload6, { props }) {
                    $$payload6.out += `<!---->`;
                    Form_label($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->Name`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> `;
                    Input($$payload6, spread_props([
                      props,
                      {
                        get value() {
                          return store_get($$store_subs ??= {}, "$formData", formData).name;
                        },
                        set value($$value) {
                          store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).name = $$value);
                          $$settled = false;
                        }
                      }
                    ]));
                    $$payload6.out += `<!---->`;
                  };
                  Control($$payload5, { children });
                }
                $$payload5.out += `<!----> <!---->`;
                Form_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<i>Optional.</i>`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <!---->`;
            Form_field($$payload4, {
              form,
              name: "email",
              class: "w-full",
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                {
                  let children = function($$payload6, { props }) {
                    $$payload6.out += `<!---->`;
                    Form_label($$payload6, {
                      children: ($$payload7) => {
                        $$payload7.out += `<!---->Email`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload6.out += `<!----> `;
                    Input($$payload6, spread_props([
                      props,
                      {
                        get value() {
                          return store_get($$store_subs ??= {}, "$formData", formData).email;
                        },
                        set value($$value) {
                          store_mutate($$store_subs ??= {}, "$formData", formData, store_get($$store_subs ??= {}, "$formData", formData).email = $$value);
                          $$settled = false;
                        }
                      }
                    ]));
                    $$payload6.out += `<!---->`;
                  };
                  Control($$payload5, { children });
                }
                $$payload5.out += `<!----> <!---->`;
                Form_description($$payload5, {
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Your best email.`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div> <div class="flex justify-end"><!---->`;
            Alert_dialog_footer($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->`;
                Alert_dialog_cancel($$payload5, {
                  onclick: handleClose,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Cancel`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----> <!---->`;
                Alert_dialog_action($$payload5, {
                  children: ($$payload6) => {
                    Mail_check($$payload6, { class: "mt-0.5 h-4 w-auto" });
                    $$payload6.out += `<!----> Subscribe`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></form>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { value });
  pop();
}

export { Subscribe_dialog as S };
//# sourceMappingURL=subscribe-dialog-CKIVcxse.js.map
