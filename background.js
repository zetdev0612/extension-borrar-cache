chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'clearData') {
        clearBrowsingData(request.options, sendResponse);
        return true; // Indicar que la respuesta será asincrónica
    }
});

function clearBrowsingData(options, sendResponse) {
    // Calcula el tiempo desde el cual borrar
    let timingMs;
    switch (options.timeRange) {
        case '1':
            timingMs = 1 * 60 * 60 * 1000; // 1 hora
            break;
        case '24':
            timingMs = 24 * 60 * 60 * 1000; // 24 horas
            break;
        case '168':
            timingMs = 7 * 24 * 60 * 60 * 1000; // 1 semana
            break;
        case '720':
            timingMs = 30 * 24 * 60 * 60 * 1000; // 1 mes
            break;
        case 'all':
            timingMs = undefined; // Todo el tiempo
            break;
        default:
            timingMs = 24 * 60 * 60 * 1000;
    }

    const dataToDelete = {
        since: timingMs ? Date.now() - timingMs : undefined
    };

    const dataTypes = {
        cacheStorage: options.cache,
        cookies: options.cookies,
        localStorage: options.localStorage,
        history: options.history
    };

    // Usa la API de browsingData para borrar
    chrome.browsingData.remove(dataToDelete, dataTypes, () => {
        if (chrome.runtime.lastError) {
            console.error('Error al borrar datos:', chrome.runtime.lastError);
            sendResponse({ success: false });
        } else {
            console.log('Datos borrados exitosamente');
            sendResponse({ success: true });
        }
    });

    return true;
}
