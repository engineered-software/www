import { G as push, a7 as copy_payload, a8 as assign_payload, J as pop, $ as ensure_array_like, Q as head, a5 as escape_html, a0 as attr, a9 as stringify, T as store_get, V as unsubscribe_stores } from './index2-BDI6ceGZ.js';
import { g as getTranslationFunctions } from './index3-3fT-JMUq.js';
import { g as getStores } from './stores-BlRUJoP4.js';
import { B as Button } from './Icon-GMgxP5jJ.js';
import { S as Subscribe_dialog } from './subscribe-dialog-CKIVcxse.js';
import { f as toggleMode, e as derivedMode } from './mode-D0KphHlc.js';
import { C as Check_check } from './check-check-XXy3fk0I.js';
import './constants-Bz9XXnp8.js';
import './client-D-af4Dn1.js';
import './exports-BX5H4HJi.js';
import './_commonjsHelpers-B85MJLTf.js';
import './dialog-overlay-Cwp3Sdsg.js';
import './index-server-B9vFxl5H.js';
import './events-Dpdf-Hjr.js';
import './input-f6lprDJV.js';
import './schema-CVY2n87S.js';
import './superValidate-KMnltoiV.js';
import './index-DHSpIlkf.js';
import './stringify-Djm7PJzE.js';

function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  const { page } = getStores();
  let showDialog = false;
  let hero_image = "";
  const title = "Engineered Soft";
  const navItems = [
    { label: "About", href: "/" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" }
  ];
  let mouseX = 0;
  let mouseY = 0;
  let opacity = 0;
  let { user } = data;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(navItems);
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>${escape_html(title)}</title>`;
    });
    Subscribe_dialog($$payload2, {
      data: data.form,
      get value() {
        return showDialog;
      },
      set value($$value) {
        showDialog = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="space-y-10"><nav class="bg-background/80 top-0 z-50 w-full flex items-center justify-between backdrop-blur-sm p-5"><div class="w-full flex flex-none h-16 items-center justify-between gap-12 px-44 mt-0.5"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="title flex items-center gap-1 brand text-lg font-semibold" data-page="/" data-direction="forward">`;
    Check_check($$payload2, { class: "w-auto h-4", strokeWidth: "3.5" });
    $$payload2.out += `<!----> ${escape_html(title)}</a> <div class="pl-40 hidden md:block"><ul class="flex flex-grow items-center gap-8"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload2.out += `<li><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(item.href, void 0))}${attr("class", `flex items-center text-md font-medium transition-colors ${stringify(item.label !== "About" ? "" : "hover:text-foreground")} ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === item.href ? "text-foreground" : "text-muted-foreground")}`)}>${escape_html(item.label)}</a></li>`;
    }
    $$payload2.out += `<!--]--></ul></div> <div class="space-x-2 flex flex-none gap-2">`;
    Button($$payload2, {
      onclick: toggleMode,
      variant: "link",
      class: "hover:no-underline opacity-70 hover:opacity-100 transition-all focus:outline-none!important focus:ring-0!important",
      children: ($$payload3) => {
        $$payload3.out += `<span class="text-muted-foreground font-normal">Switch Theme</span> <kbd class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100"><span class="text-xs font-bold">T</span></kbd>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    if (user) {
      $$payload2.out += "<!--[-->";
      Button($$payload2, {
        href: "/sign-out",
        variant: "outline",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Log Out`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        href: "/app",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Dashboard`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
      Button($$payload2, {
        href: "/sign-in",
        variant: "outline",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Log In`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        href: "#",
        onclick: () => {
          showDialog = true;
        },
        children: ($$payload3) => {
          $$payload3.out += `<!---->Sign Up`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    }
    $$payload2.out += `<!--]--></div></div></nav> <section class="w-full flex items-start justify-center overflow-hidden" role="presentation"><div class="container mx-auto px-44 w-screen mt-6" role="presentation"><div class="max-w-3xl"><h1 class="text-4xl font-bold tracking-tight md:text-5xl">Launch faster, build better.</h1> <p class="text-muted-foreground mt-6 text-lg md:text-lg">A complete ecosystem, engineered to bring your ideas to life, <br> empowering you to build, adapt, and launch with unmatched agility.</p></div> <div class="flex justify-center items-center my-8 overflow-visible mt-16" role="presentation"><div class="relative w-full max-w-5xl p-4" role="presentation"><div class="relative" role="presentation">`;
    if (store_get($$store_subs ??= {}, "$mode", derivedMode)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<img${attr("src", hero_image)} alt="Dashboard Overview" class="skewed-trapezoid w-full rounded-2xl relative z-10 opacity-0 animate-fade-in svelte-ioixqw">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="fade-mask absolute inset-0 pointer-events-none rounded-2xl z-30 skewed-trapezoid transition-all duration-700 svelte-ioixqw"${attr("style", ` background: radial-gradient( circle at ${stringify(mouseX)}px ${stringify(mouseY)}px, rgba(${stringify(store_get($$store_subs ??= {}, "$mode", derivedMode) === "dark" ? "131,58,180,1" : "71,0,169,1")}) 0%, rgba(${stringify(store_get($$store_subs ??= {}, "$mode", derivedMode) === "dark" ? "253,29,29,1" : "10,10,130,1")}) 35%, transparent 50% ); transition: opacity 700ms ease-out, background-position 700ms ease-out; mask: linear-gradient(white, white) content-box, linear-gradient(white, white); -webkit-mask: linear-gradient(white, white) content-box, linear-gradient(white, white); mask-composite: exclude; -webkit-mask-composite: destination-out; padding: 1.5px; opacity: ${stringify(opacity)}; `)}></div></div></div></div></div></section></div>`;
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

export { _page as default };
//# sourceMappingURL=_page.svelte-DPABblBD.js.map
