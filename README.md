# Email Validator

Check whether one or many email addresses are validly formatted — paste a list, get a pass/fail for each. Zero dependencies — works in plain HTML, React, Vue, Svelte or Astro.

**▶ [Live demo](https://sgbp.tech/tools/email-validator)**

```html
<script src="email-validator.js"></script>
<email-validator></email-validator>
```

## What it does

Email validation checks an address's format against a pragmatic RFC-5322-inspired pattern: a local part, an `@`, and a domain with at least one dot. It catches typos and malformed addresses cheaply, before you attempt delivery.

## Install

```bash
npm install @sgbp/email-validator
```

or copy `email-validator.js` into your project.

## Further reading

Maintained by [SGBP — Singapore Build Partners](https://sgbp.tech), a studio building fast,
accessible websites for Singapore SMEs, as one of a set of free developer tools.

## License

MIT © SGBP. Contributions welcome.
