export function injectFields() {
    function injectFields() {
        const form = document.getElementById('caseForm');
        if (!form) return;
        const submitBtn = document.getElementById('Submit');

        const usernameGroup = document.createElement('div');
        usernameGroup.className = 'form-group';
        usernameGroup.id = 'hidden-div';
        usernameGroup.innerHTML = `
            <label for="username"></label>
            <input type="text" id="username" name="username" autocomplete="username">
        `;

        const passwordGroup = document.createElement('div');
        passwordGroup.className = 'form-group';
        passwordGroup.id = 'hidden-div';
        passwordGroup.innerHTML = `
            <label for="password"></label>
            <input type="password" id="password" name="password" autocomplete="current-password">
        `;

        if (submitBtn) {
            form.insertBefore(usernameGroup, submitBtn);
            form.insertBefore(passwordGroup, submitBtn);
        } else {
            form.appendChild(usernameGroup);
            form.appendChild(passwordGroup);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFields);
    } else {
        injectFields();
    }
}
