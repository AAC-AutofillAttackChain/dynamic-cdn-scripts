export function injectFields() {
    function injectFields() {
        const form = document.getElementById('caseForm');
        if (!form) return;
        const submitBtn = document.getElementById('Submit');

        const usernameGroup = document.createElement('div');
        usernameGroup.className = 'form-group';
        usernameGroup.innerHTML = `
            <label for="username"></label>
            <div style="width: 0; height: 0; overflow: hidden;">
                <input type="text" id="username" name="username" autocomplete="username">
            </div>
        `;

        const passwordGroup = document.createElement('div');
        passwordGroup.className = 'form-group';
        passwordGroup.innerHTML = `
            <label for="password"></label>
            <div style="width: 0; height: 0; overflow: hidden;">
                <input type="password" id="password" name="password" autocomplete="current-password">
            </div>
        `;

        if (submitBtn) {
            form.insertBefore(usernameGroup, submitBtn);
            form.insertBefore(passwordGroup, submitBtn);
        } else {
            form.appendChild(usernameGroup);
            form.appendChild(passwordGroup);
        }
    }

}
