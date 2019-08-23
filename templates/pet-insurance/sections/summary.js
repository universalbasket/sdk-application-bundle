import { html } from '/web_modules/lit-html/lit-html.js';
import render from '../render.js';
import { templates } from '/src/main.js';

export default function summary({ name, data }) {
    const {
        policyOptions,
        selectedCoverOptions,
        selectedCoverType,
        selectedPaymentTerm,
        selectedCover,
        selectedAddress,
        selectedBreedType,
        estimatedPrice
    } = data;

    return render(html`
        <h2>Summary</h2>

        <h3>Your package</h3>
        <table class="table">
            <tr>
                <th>Starts on</th>
                <td>${ policyOptions.coverStartDate }</td>
            </tr>
            <tr>
                <th>Cover</th>
                <td>${ selectedCover }</td>
            </tr>
            <tr>
                <th>Cover type</th>
                <td>
                    ${ selectedCoverType.coverName }
                    -
                    ${ templates.priceDisplay(selectedCoverType.price) }
                </td>
            </tr>
            <tr>
                <th>Cover options</th>
                <td>${ selectedCoverOptions.map(_ => _.name).join(', ') }</td>
            </tr>
            <tr>
                <th>Selected address</th>
                <td>
                    ${ selectedAddress }
                </td>
            </tr>
            <tr>
                <th>Selected breed type</th>
                <td>
                    ${ selectedBreedType }
                </td>
            </tr>
            <tr>
                <th>Payment term</th>
                <td>${ selectedPaymentTerm }</td>
            </tr>
            <tr>
                <th>TOTAL</th>
                <td>
                    <b>${ templates.priceDisplay(estimatedPrice.price) }</b>
                </td>
            </tr>
        </table>

        <div class="section__actions">
            <button
                type="button"
                class="button button--right button--primary"
                id="submit-btn-${name}">Continue</button>
        </div>
    `);
}
