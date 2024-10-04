const scanButton = document.getElementById('scan-button');
const result = document.getElementById('result');
const fingerprint = document.querySelector('.fingerprint');

// Simulating fingerprint scan process
scanButton.addEventListener('click', function () {
    result.textContent = 'Scanning...';
    fingerprint.style.opacity = '1';
    
    // Simulate the scanning process with a delay
    setTimeout(() => {
        fingerprint.style.opacity = '0.4';
        const scanSuccess = Math.random() > 0.3;
        
        if (scanSuccess) {
            result.textContent = 'Fingerprint matched!';
        } else {
            result.textContent = 'Fingerprint not recognized. Try again.';
        }
    }, 2000); // 2 seconds scan duration
});
