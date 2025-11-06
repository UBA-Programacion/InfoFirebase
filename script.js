document.addEventListener('DOMContentLoaded', () => {
    // Busca todos los bloques <pre>
    const preBlocks = document.querySelectorAll('pre');

    preBlocks.forEach((pre, index) => {
        // Asegurarse de que el bloque tenga un <code>
        const code = pre.querySelector('code');
        if (!code) return;

        // Crear el botón de copiar
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copiar';
        copyButton.setAttribute('aria-label', 'Copiar código al portapapeles');

        // Posicionar el botón
        pre.style.position = 'relative'; // Necesario para el posicionamiento absoluto
        pre.appendChild(copyButton);

        // Lógica de Copiar
        copyButton.addEventListener('click', () => {
            const codeToCopy = code.innerText;
            navigator.clipboard.writeText(codeToCopy).then(() => {
                // Éxito
                copyButton.textContent = '¡Copiado!';
                copyButton.classList.add('copied');
                
                // Volver a "Copiar" después de 2 segundos
                setTimeout(() => {
                    copyButton.textContent = 'Copiar';
                    copyButton.classList.remove('copied');
                }, 2000);

            }).catch(err => {
                console.error('Error al copiar:', err);
                copyButton.textContent = 'Error';
            });
        });
    });
});