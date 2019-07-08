import { html } from '/web_modules/lit-html/lit-html.js';
import render from '../render.js';
import { directDebit as input } from '../inputs/index.js';

export default function directDebit(name, { selectedPaymentTerm }, skip) {
    if (selectedPaymentTerm !== 'monthly-card') {
        skip();
        return;
    }

    return render(html`
        ${input()}
        <div class="section__actions">
            <button type="button" class="button button--right button--primary" id="submit-btn-${name}">Find Cover</button>
        </div>
    `);
}
