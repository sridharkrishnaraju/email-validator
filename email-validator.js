/**
 * <email-validator> — validate one or many email addresses in the browser. Zero dependencies.
 * Built & maintained by SGBP — Singapore Build Partners (https://sgbp.tech). MIT.
 */
class EmailValidator extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: "open" }); }
  connectedCallback() { this.render(); }
  // Pragmatic, RFC-5322-inspired check (covers real-world addresses without over-rejecting).
  _valid(e) { return /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/.test(e); }
  _check() {
    const $ = (s) => this.shadowRoot.querySelector(s);
    const raw = $("#in").value.trim(); const out = $("#out");
    if (!raw) { out.innerHTML = ""; return; }
    const list = raw.split(/[\n,;]+/).map((s) => s.trim()).filter(Boolean);
    let ok = 0;
    const rows = list.map((e) => {
      const v = this._valid(e); if (v) ok++;
      return `<div class="r"><span class="b ${v ? "pass" : "fail"}">${v ? "VALID" : "INVALID"}</span><span class="e">${this._esc(e)}</span></div>`;
    }).join("");
    out.innerHTML = `<div class="sum">${ok} of ${list.length} valid</div><div class="rows">${rows}</div>`;
  }
  _esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        *,*::before,*::after{box-sizing:border-box}
        :host{display:block;width:100%;max-width:560px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
        .card{border:1px solid #e2e2e2;border-radius:12px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.06);padding:16px}
        label{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:600;color:#555;margin-bottom:6px}
        .mini{font:inherit;font-size:11px;font-weight:700;color:#EB0028;background:none;border:0;cursor:pointer}
        textarea{width:100%;min-height:96px;padding:10px;border:1px solid #ccc;border-radius:8px;font-family:ui-monospace,Menlo,monospace;font-size:14px;resize:vertical}
        .sum{font-size:13px;font-weight:700;color:#444;margin:14px 0 8px}
        .rows{display:flex;flex-direction:column;gap:5px}
        .r{display:flex;gap:8px;align-items:center;font-size:13px}
        .e{font-family:ui-monospace,monospace;color:#333;word-break:break-all}
        .b{font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;flex:0 0 auto}
        .pass{background:#e6f4ea;color:#137333}.fail{background:#fce8e6;color:#c5221f}
      </style>
      <div class="card">
        <label>Email address(es) — one per line, or comma-separated <button class="mini" id="clear">Clear</button></label>
        <textarea id="in" placeholder="name@example.com&#10;another@company.sg" spellcheck="false"></textarea>
        <div id="out"></div>
      </div>`;
    const $ = (s) => this.shadowRoot.querySelector(s);
    $("#in").addEventListener("input", () => this._check());
    $("#clear").addEventListener("click", () => { $("#in").value = ""; $("#out").innerHTML = ""; $("#in").focus(); });
  }
}
if (!customElements.get("email-validator")) customElements.define("email-validator", EmailValidator);
