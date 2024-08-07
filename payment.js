document.addEventListener('DOMContentLoaded', function() {
    const selectionDetails = document.getElementById('selectionDetails');
    const queryParams = new URLSearchParams(window.location.search);

    const details = {
        collectFrom: queryParams.get('collectFrom'),
        car: queryParams.get('car'),
        dateFrom: queryParams.get('dateFrom'),
        timeFrom: queryParams.get('timeFrom'),
        dateTo: queryParams.get('dateTo'),
        timeTo: queryParams.get('timeTo'),
        rentalType: queryParams.get('rentalType'),
        driverOver23: queryParams.get('driverOver23') ? 'Yes' : 'No',
        discountCode: queryParams.get('discountCode') ? 'Yes' : 'No'
    };

    selectionDetails.innerHTML = `
        <p><strong>Collect From:</strong> ${details.collectFrom}</p>
        <p><strong>Car:</strong> ${details.car}</p>
        <p><strong>Pick Up Date:</strong> ${details.dateFrom} at ${details.timeFrom}</p>
        <p><strong>Return Date:</strong> ${details.dateTo} at ${details.timeTo}</p>
        <p><strong>Rental Type:</strong> ${details.rentalType}</p>
        <p><strong>Driver Over 23:</strong> ${details.driverOver23}</p>
        <p><strong>Discount Code:</strong> ${details.discountCode}</p>
    `;

    const paymentForm = document.getElementById('paymentForm');
    const errorMessage = document.getElementById('errorMessage');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value;
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVC = document.getElementById('cardCVC').value;

        const cardNumberValid = /^\d{16}$/.test(cardNumber);
        const cardExpiryValid = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardExpiry);
        const cardCVCValid = /^\d{3}$/.test(cardCVC);

        if (cardNumberValid && cardExpiryValid && cardCVCValid) {
            alert('Payment processed successfully!');
            window.location.href = 'index.html';
        } else {
            errorMessage.style.display = 'block';
        }
    });
});
