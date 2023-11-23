const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email должен соответствовать формату: `name@example.com`
const PHONE_REGEX = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/; // - `Телефон` должен соответствовать формату: `+7 (423) 123-45-67`

/** @type {(() => boolean)[]} */
const validateCallbacks = [];

const $fullName = document.getElementById('fullName');
const $phone = document.getElementById('phone');
const $email = document.getElementById('email');
const $message = document.getElementById('message');
const $submitStatus = document.getElementById('submitStatus');

document.getElementById('form-feedback').addEventListener('submit', () => {
    if (!validateCallbacks.some((cb) => cb() === false)) {
        const data = {
            fillName: $fullName.value,
            phone: $phone.value,
            email: $email.value,
            message: $message.value,
        };

        console.log(JSON.stringify(data));
        $submitStatus.innerHTML = 'Отправка...';

        setTimeout(() => {
            $submitStatus.innerHTML = 'Успех!';
        }, 500);
    } else {
        $submitStatus.innerHTML = 'Пожалуйста, исправьте ошибки';
    }
});

addValidation(EMAIL_REGEX, $email, 'должен соответствовать формату: name@example.com');
addValidation(PHONE_REGEX, $phone, 'должен соответствовать формату: +7 (423) 123-45-67');


/**
 *
 * @param {RegExp} regex
 * @param {HTMLInputElement} element
 * @param {string} errorMessage
 */
function addValidation(regex, element, errorMessage = '') {
    validateCallbacks.push(() => {
        if (!element.value.trim()) {
            return true; // проверка required делает браузер
        }
        const isValid = regex.test(element.value);

        if (isValid) {
            element.parentElement.classList.remove('has-error');
            element.parentElement.children[2].innerHTML = '';
            return true;
        } else {
            element.parentElement.classList.add('has-error');
            element.parentElement.children[2].innerHTML = errorMessage;
            return false;
        }
    });
    element.addEventListener('change', validateCallbacks.at(-1));
}
