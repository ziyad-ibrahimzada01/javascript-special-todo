const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const phone = document.querySelector('#phone')
const form = document.querySelector('form')
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(location.search)
    const id = params.get('id')
    const contactName = params.get('name')
    const contactSurname = params.get('surname')
    const contactPhone = params.get('phone')
    if (contactName && contactSurname && contactPhone) {
        name.value = contactName
        surname.value = contactSurname
        phone.value = contactPhone
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = JSON.parse(localStorage.getItem('data')) || []
        if (id) {
            const index = data.findIndex(item => item.id === parseInt(id))
            if (index !== -1) {
                data[index] = {
                    id: parseInt(id),
                    name: name.value,
                    surname: surname.value,
                    phone: phone.value
                };
                localStorage.setItem('data', JSON.stringify(data))
            }
        } else {
            data.push({
                id: (data[data.length - 1]?.id || 0) + 1,
                name: name.value,
                surname: surname.value,
                phone: phone.value
            });
            localStorage.setItem('data', JSON.stringify(data))
        }
        location.href = 'contact.html'
    })
})
