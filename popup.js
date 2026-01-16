document.getElementById('clearButton').addEventListener('click', async () => {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Borrando...';
    statusDiv.className = 'status-message loading';

    // Recopilar opciones seleccionadas
    const options = {
        cookies: document.getElementById('cookies').checked,
        cache: document.getElementById('cache').checked,
        localStorage: document.getElementById('localStorage').checked,
        history: document.getElementById('history').checked,
        timeRange: document.getElementById('timeRange').value
    };

    try {
        // Enviar mensaje al service worker
        const response = await chrome.runtime.sendMessage({
            action: 'clearData',
            options: options
        });

        if (response && response.success) {
            statusDiv.textContent = '✓ ¡Datos borrados exitosamente!';
            statusDiv.className = 'status-message success';
        } else {
            statusDiv.textContent = '✗ Error al borrar datos';
            statusDiv.className = 'status-message error';
        }

        // Limpiar mensaje después de 3 segundos
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'status-message';
        }, 3000);

    } catch (error) {
        statusDiv.textContent = '✗ Error: ' + error.message;
        statusDiv.className = 'status-message error';
    }
});
