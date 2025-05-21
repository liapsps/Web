// Script principal para funcionalidades do site

// Executar quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Componentes do site
    const themeToggle = document.querySelector('.theme-toggle');
    const topButton = document.getElementById('topBtn');
    
    // Inicializar o modo escuro/claro
    initializeTheme();
    
    // Configurar eventos
    setupScrollEvents();
    setupThemeToggle();
    
    /**
     * Inicializa o tema baseado nas preferências salvas
     */
    function initializeTheme() {
        // Verificar se há preferência salva
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeButtonText();
        }
    }
    
    /**
     * Configura o botão de alternância de tema
     */
    function setupThemeToggle() {
        themeToggle.addEventListener('click', function() {
            // Alternar classe de modo escuro
            document.body.classList.toggle('dark-mode');
            
            // Salvar preferência no localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            
            // Atualizar texto do botão
            updateThemeButtonText();
        });
    }
    
    /**
     * Atualiza o texto do botão de tema
     */
    function updateThemeButtonText() {
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '☀️ Modo';
        } else {
            themeToggle.innerHTML = '🌙 Modo';
        }
    }
    
    /**
     * Configura eventos de rolagem
     */
    function setupScrollEvents() {
        // Mostrar/ocultar botão de voltar ao topo
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topButton.style.display = 'block';
            } else {
                topButton.style.display = 'none';
            }
        };
        
        // Rolar para o topo ao clicar no botão
        topButton.addEventListener('click', function() {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
        });
    }
});