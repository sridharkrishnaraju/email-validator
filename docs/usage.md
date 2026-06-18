# Usage & API

It is a standard custom element, so it works with no wrapper in plain HTML, React, Vue, Svelte and Astro.

## Plain HTML

```html
<script src="email-validator.js"></script>
<email-validator></email-validator>
```

## React

```jsx
import "@sgbp/email-validator";
export default function Page() { return <email-validator />; }
```

## Vue

```vue
<script setup>
import "@sgbp/email-validator";
</script>

<template>
  <email-validator />
</template>
```

---

Prefer to just use it without installing anything? The
[live Email Validator](https://sgbp.tech/tools/email-validator) is hosted and ready to go.
