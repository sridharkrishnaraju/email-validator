# Email Validator

Check whether one or many email addresses are validly formatted — paste a list, get a pass/fail for each. A free, zero-dependency Web Component you can drop into any site.

```html
<script src="email-validator.js"></script>
<email-validator></email-validator>
```

## What it does

Email validation checks an address's format against a pragmatic RFC-5322-inspired pattern: a local part, an `@`, and a domain with at least one dot. It catches typos and malformed addresses cheaply, before you attempt delivery.

## When you'd use it

Cleaning a mailing list, validating a signup form, or sanity-checking addresses pasted from a spreadsheet.

See the [Usage & API guide](usage.md) for framework examples, or the [guide](guide.md) for tips.

## About

This tool is maintained by [SGBP — Singapore Build Partners](https://sgbp.tech), a Singapore
studio building fast, accessible websites for SMEs. It is part of a set of free developer tools.
