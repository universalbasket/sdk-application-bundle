import { html } from '/src/main.js';
import Person from '../../generic/person.js';

export default () => html`
<div name="contact-person">
    ${Person('contact-person')}
    <div class="field">
        <label class="field__name" for="contact-person[date-of-birth]">Date Of Birth</label>
        <input type="date" name="contact-person[date-of-birth]" value="1990-04-02" required>
    </div>
</div>
`;
