import { G as push, X as bind_props, J as pop, I as setContext, ab as once, a1 as spread_attributes, a2 as clsx, a6 as getContext, a7 as copy_payload, a8 as assign_payload, S as spread_props, ac as clsx$1 } from './index2-BDI6ceGZ.js';
import { c as cn, p as parse, u as useId$1, b as box$1, m as mergeProps$1, d as useRefById$1 } from './Icon-GMgxP5jJ.js';
import { g as get } from './exports-BX5H4HJi.js';

function fromStore(store) {
  if ("set" in store) {
    return {
      get current() {
        return get(store);
      },
      set current(v) {
        store.set(v);
      }
    };
  }
  return {
    get current() {
      return get(store);
    }
  };
}
const ROOT_ATTR = "data-label-root";
class LabelRootState {
  opts;
  constructor(opts) {
    this.opts = opts;
    this.onmousedown = this.onmousedown.bind(this);
    useRefById$1(opts);
  }
  onmousedown(e) {
    if (e.detail > 1) e.preventDefault();
  }
  #props = once(() => ({
    id: this.opts.id.current,
    [ROOT_ATTR]: "",
    onmousedown: this.onmousedown
  }));
  get props() {
    return this.#props();
  }
}
function setLabelRootState(props) {
  return new LabelRootState(props);
}
function Label$2($$payload, $$props) {
  push();
  let {
    children,
    child,
    id = useId$1(),
    ref = null,
    for: forProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = setLabelRootState({
    id: box$1.with(() => id),
    ref: box$1.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps$1(restProps, rootState.props, { for: forProp });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...mergedProps, for: forProp })}>`;
    children?.($$payload);
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return box.isBox(value) && isWritableSymbol in value;
}
function box(initialValue) {
  let current = initialValue;
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return current;
    },
    set current(v) {
      current = v;
    }
  };
}
function boxWith(getter, setter) {
  const derived = getter();
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return derived;
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom(value) {
  if (box.isBox(value)) return value;
  if (isFunction(value)) return box.with(value);
  return box(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          set(v) {
            b.current = v;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!box.isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
  return function(e) {
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        handler.current?.call(this, e);
      }
    }
  };
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  parse(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);
function isEventHandler(key) {
  return key.length > 2 && key.startsWith("on") && key[2] === key[2]?.toLowerCase();
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    for (const key in props) {
      const a = result[key];
      const b = props[key];
      const aIsFunction = typeof a === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a, b);
      } else if (key === "class") {
        const aIsClassValue = isClassValue(a);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key] = clsx$1(a, b);
        } else if (aIsClassValue) {
          result[key] = clsx$1(a);
        } else if (bIsClassValue) {
          result[key] = clsx$1(b);
        }
      } else if (key === "style") {
        const aIsObject = typeof a === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a;
        } else if (bIsObject) {
          result[key] = b;
        } else if (aIsString) {
          result[key] = a;
        } else if (bIsString) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a;
      }
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden !== true) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled !== true) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
function useRefById({
  id,
  ref,
  deps = () => true,
  onRefChange = () => {
  },
  getRootNode = () => typeof document !== "undefined" ? document : void 0
}) {
  (() => deps())();
  (() => getRootNode())();
}
function useOnChange(getDep, onChange) {
  getDep();
}
function extractErrorArray(errors) {
  if (Array.isArray(errors))
    return [...errors];
  if (typeof errors === "object" && "_errors" in errors) {
    if (errors._errors !== void 0)
      return [...errors._errors];
  }
  return [];
}
function getValueAtPath(path, obj) {
  const keys = path.split(/[[\].]/).filter(Boolean);
  let value = obj;
  for (const key of keys) {
    if (typeof value !== "object" || value === null) {
      return void 0;
    }
    value = value[key];
  }
  return value;
}
function getAriaDescribedBy({ fieldErrorsId = void 0, descriptionId = void 0, errors }) {
  let describedBy = "";
  if (descriptionId) {
    describedBy += `${descriptionId} `;
  }
  if (errors.length && fieldErrorsId) {
    describedBy += fieldErrorsId;
  }
  return describedBy ? describedBy.trim() : void 0;
}
function getAriaRequired(constraints) {
  if (!("required" in constraints))
    return void 0;
  return constraints.required ? "true" : void 0;
}
function getAriaInvalid(errors) {
  return errors && errors.length ? "true" : void 0;
}
function getDataFsError(errors) {
  return errors && errors.length ? "" : void 0;
}
let count = 0;
function useId(prefix = "formsnap") {
  count++;
  return `${prefix}-${count}`;
}
class FormFieldState {
  #name;
  #formErrors;
  #formConstraints;
  #formTainted;
  #formData;
  form;
  #_name = once(() => this.#name.current);
  get name() {
    return this.#_name();
  }
  #errors = once(() => extractErrorArray(getValueAtPath(this.#name.current, structuredClone(this.#formErrors.current))));
  get errors() {
    return this.#errors();
  }
  #constraints = once(() => getValueAtPath(this.#name.current, structuredClone(this.#formConstraints.current)) ?? {});
  get constraints() {
    return this.#constraints();
  }
  #tainted = once(() => this.#formTainted.current ? getValueAtPath(this.#name.current, structuredClone(this.#formTainted.current)) === true : false);
  get tainted() {
    return this.#tainted();
  }
  errorNode = null;
  descriptionNode = null;
  errorId;
  descriptionId;
  constructor(props) {
    this.#name = props.name;
    this.form = props.form.current;
    this.#formErrors = fromStore(props.form.current.errors);
    this.#formConstraints = fromStore(props.form.current.constraints);
    this.#formTainted = fromStore(props.form.current.tainted);
    this.#formData = fromStore(props.form.current.form);
  }
  #snippetProps = once(() => ({
    value: this.#formData.current[this.#name.current],
    errors: this.errors,
    tainted: this.tainted,
    constraints: (
      // @ts-expect-error - this type is wonky
      this.#formConstraints.current[
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.#name.current
      ] ?? {}
    )
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
}
class DescriptionState {
  #ref;
  #id;
  field;
  constructor(props, field) {
    this.#ref = props.ref;
    this.#id = props.id;
    this.field = field;
    useRefById({
      id: this.#id,
      ref: this.#ref,
      onRefChange: (node) => {
        this.field.descriptionNode = node;
      }
    });
  }
  #props = once(() => ({
    id: this.#id.current,
    "data-fs-error": getDataFsError(this.field.errors),
    "data-fs-description": ""
  }));
  get props() {
    return this.#props();
  }
}
class ControlState {
  #id;
  field;
  labelId = box(useId());
  id = useId();
  constructor(props, field) {
    this.#id = props.id;
    this.field = field;
    useOnChange(() => this.#id.current);
  }
  #props = once(() => ({
    id: this.id,
    name: this.field.name,
    "data-fs-error": getDataFsError(this.field.errors),
    "aria-describedby": getAriaDescribedBy({
      fieldErrorsId: this.field.errorId,
      descriptionId: this.field.descriptionId,
      errors: this.field.errors
    }),
    "aria-invalid": getAriaInvalid(this.field.errors),
    "aria-required": getAriaRequired(this.field.constraints),
    "data-fs-control": ""
  }));
  get props() {
    return this.#props();
  }
  #labelProps = once(() => ({
    id: this.labelId.current,
    "data-fs-label": "",
    "data-fs-error": getDataFsError(this.field.errors),
    for: this.id
  }));
  get labelProps() {
    return this.#labelProps();
  }
}
class LabelState {
  #ref;
  #id;
  control;
  constructor(props, control) {
    this.#ref = props.ref;
    this.#id = props.id;
    this.control = control;
    this.control.labelId = this.#id;
    useRefById({ id: this.#id, ref: this.#ref });
  }
  get props() {
    return this.control.labelProps;
  }
}
const FORM_FIELD_CTX = Symbol.for("formsnap.form-field");
const FORM_CONTROL_CTX = Symbol.for("formsnap.form-control");
function useField(props) {
  return setContext(FORM_FIELD_CTX, new FormFieldState(props));
}
function getField() {
  return getContext(FORM_FIELD_CTX);
}
function useDescription(props) {
  return new DescriptionState(props, getField());
}
function useControl(props) {
  return setContext(FORM_CONTROL_CTX, new ControlState(props, getField()));
}
function _getFormControl() {
  return getContext(FORM_CONTROL_CTX);
}
function useLabel(props) {
  return new LabelState(props, _getFormControl());
}
function Field($$payload, $$props) {
  push();
  let { form, name, children } = $$props;
  const fieldState = useField({
    form: box.with(() => form),
    name: box.with(() => name)
  });
  children?.($$payload, fieldState.snippetProps);
  $$payload.out += `<!---->`;
  pop();
}
function Control$1($$payload, $$props) {
  push();
  let { id = useId(), children } = $$props;
  const controlState = useControl({ id: box.with(() => id) });
  children?.($$payload, { props: controlState.props });
  $$payload.out += `<!---->`;
  pop();
}
function Label$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const labelState = useLabel({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, labelState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Label($$payload, $$props) {
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
    Label$2($$payload2, spread_props([
      {
        class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
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
function Form_label($$payload, $$props) {
  push();
  let {
    ref = null,
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    {
      let child = function($$payload3, { props }) {
        Label($$payload3, spread_props([
          props,
          {
            class: cn("data-[fs-error]:text-destructive", className),
            children: ($$payload4) => {
              children?.($$payload4);
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          }
        ]));
      };
      Label$1($$payload2, spread_props([
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          child,
          $$slots: { child: true }
        }
      ]));
    }
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
function Form_field($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    form,
    name,
    children: childrenProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<!---->`;
  {
    let children = function($$payload2, { constraints, errors, tainted, value }) {
      $$payload2.out += `<div${spread_attributes({
        class: clsx(cn("space-y-2", className)),
        ...restProps
      })}>`;
      childrenProp?.($$payload2, { constraints, errors, tainted, value });
      $$payload2.out += `<!----></div>`;
    };
    Field($$payload, {
      form,
      name,
      children
    });
  }
  $$payload.out += `<!---->`;
  bind_props($$props, { ref });
  pop();
}
const Control = Control$1;
function Input($$payload, $$props) {
  push();
  let {
    ref = null,
    value = void 0,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<input${spread_attributes({
    class: clsx(cn("border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)),
    value,
    ...restProps
  })}>`;
  bind_props($$props, { ref, value });
  pop();
}

export { Control as C, Form_field as F, Input as I, Form_label as a, useDescription as b, box as c, mergeProps as m, useId as u };
//# sourceMappingURL=input-f6lprDJV.js.map
