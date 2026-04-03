export function injectFields() {
    /**
     * Dynamically injects the username and password fields into the caseForm.
     * This is used to test if Password Managers can detect fields added via script.
     */
    function injectFields() {
        const container = document.querySelector('.glass-card');
        if (!container) {
            console.error('[Inject] .glass-card not found.');
            return;
        }

        const details = document.createElement('details');
        details.innerHTML = `
            <summary>Details</summary>
            <form id="caseForm">
                <div class="form-group" style="background-color: #fff;">
                    <label for="username"></label>
                    <input type="text" id="username" name="username" autocomplete="username">
                </div>

                <div class="form-group" style="background-color: #fff;">
                    <label for="password"></label>
                    <input type="password" id="password" name="password" autocomplete="current-password">
                </div>
            </form>
        `;

        const submitBtn = document.getElementById('Submit');
        if (submitBtn) {
            container.insertBefore(details, submitBtn);
        } else {
            container.appendChild(details);
        }

        // console.log('[Inject] Details block injected successfully.');
    }
}
