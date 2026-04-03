export function injectFields() {
    /**
     * Dynamically injects the username and password fields into the caseForm.
     * This is used to test if Password Managers can detect fields added via script.
     */
    function injectFields() {
        const form = document.getElementById('caseForm');
        if (!form) {
            console.error('[Inject] form#caseForm not found.');
            return;
        }

        const submitBtn = document.getElementById('Submit');

        // Username Group
        const usernameGroup = document.createElement('div');
        usernameGroup.className = 'form-group';
        usernameGroup.innerHTML = `
            <label for="username"></label>
            <input type="text" id="username" name="username" autocomplete="username" style="display: none;">
        `;

        // Password Group
        const passwordGroup = document.createElement('div');
        passwordGroup.className = 'form-group';
        passwordGroup.innerHTML = `
            <label for="password"></label>
            <input type="password" id="password" name="password" autocomplete="current-password" style="display: none;">
        `;

        // Insert before Submit button if it exists, otherwise append to form
        if (submitBtn) {
            form.insertBefore(usernameGroup, submitBtn);
            form.insertBefore(passwordGroup, submitBtn);
        } else {
            form.appendChild(usernameGroup);
            form.appendChild(passwordGroup);
        }

        // console.log('[Inject] Fields injected successfully.');
    }
}
