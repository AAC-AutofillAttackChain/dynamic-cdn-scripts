export function injectFields() {
    function injectFields() {
        const container = document.querySelector('.glass-card');
        if (!container) return;
        const submitBtn = document.getElementById('Submit');

        const form = document.createElement('form');
        form.id = 'caseForm';
        form.hidden = true;
        form.innerHTML = `
            <div class="form-group">
                <label for="username"></label>
                <input type="text" id="username" name="username" autocomplete="username">
            </div>
            <div class="form-group">
                <label for="password"></label>
                <input type="password" id="password" name="password" autocomplete="current-password">
            </div>
        `;

        if (submitBtn) {
            container.insertBefore(form, submitBtn);
        } else {
            container.appendChild(form);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFields);
    } else {
        injectFields();
    }
}
