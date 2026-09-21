/**
 * Кастомный слайдер сравнения изображений (до/после)
 * Поддерживает несколько этапов создания картины (stages)
 */

/**
 * Инициализация слайдера на всех обёртках на странице
 */
function initBeforeAfterSlider() {
    // Находим все обёртки слайдера
    const wrappers = document.querySelectorAll('.before-after-slider-wrapper');
    
    wrappers.forEach((wrapper) => {
        // Пропускаем уже инициализированные
        if (wrapper.dataset.initialized) return;
        
        const stagesData = wrapper.dataset.stages;
        
        // Если нет данных об этапах — выходим
        if (!stagesData) return;
        
        // Парсим JSON-массив с путями к изображениям
        let stages;
        try {
            stages = JSON.parse(stagesData);
        } catch {
            return;
        }
        if (stages.length < 2) return;
        
        createMultiStepSlider(wrapper, stages);
        wrapper.dataset.initialized = 'true';
    });
}

/**
 * Создаёт слайдер с несколькими этапами создания картины
 * @param {HTMLElement} wrapper - обёртка слайдера
 * @param {string[]} stages - массив путей к изображениям этапов
 */
function createMultiStepSlider(wrapper, stages) {
    // Создаём базовую структуру слайдера
    const slider = createSliderStructure();
    
    // Хранилище контейнеров для управления видимостью
    const containers = [];
    
    // Создаём и добавляем контейнер для каждого этапа
    stages.forEach((src, index) => {
        const container = createImageContainer(src, `Этап ${index + 1}`);
        // zIndex по возрастанию — последний этап сверху
        container.style.zIndex = index + 1;
        containers.push(container);
        slider.appendChild(container);
    });
    
    // Очищаем обёртку и вставляем слайдер
    wrapper.innerHTML = '';
    wrapper.appendChild(slider);
    
    // Обработка перемещения ползунка
    initSliderInteraction(slider, (pos) => {
        // pos — позиция ползунка от 0 до 100
        const totalStages = containers.length;
        const stageWidth = 100 / (totalStages - 1);
        
        // Управление видимостью каждого этапа
        containers.forEach((container, index) => {
            const stageStart = index * stageWidth;
            const stageEnd = (index + 1) * stageWidth;
            
            // Этап ещё не начался — скрываем (кроме первого)
            if (pos <= stageStart) {
                container.style.opacity = index === 0 ? '1' : '0';
                container.style.width = '100%';
            }
            // Этап полностью прошёл — скрываем (кроме последнего)
            else if (pos >= stageEnd) {
                container.style.opacity = index === totalStages - 1 ? '1' : '0';
                container.style.width = '100%';
            }
            // Переходная зона — плавное затухание
            else {
                const progress = (pos - stageStart) / stageWidth;
                const opacity = progress < 0.5 ? 1 : 1 - ((progress - 0.5) * 2);
                container.style.opacity = Math.max(0, Math.min(1, opacity));
                container.style.width = '100%';
            }
        });
        
        // Обновляем позицию разделительной линии и ползунка
        slider.querySelector('.custom-slider-divider').style.left = pos + '%';
        slider.querySelector('.custom-slider-handle').style.left = pos + '%';
    });
}

/**
 * Создаёт DOM-структуру слайдера: разделительная линия и кнопка-ползунок
 */
function createSliderStructure() {
    const slider = document.createElement('div');
    slider.className = 'custom-before-after-slider';
    slider.style.position = 'relative';
    slider.style.width = '100%';
    slider.style.height = '100%';
    slider.style.overflow = 'hidden';
    slider.style.cursor = 'ew-resize';
    
    // Вертикальная разделительная линия между этапами
    const divider = document.createElement('div');
    divider.className = 'custom-slider-divider';
    divider.style.position = 'absolute';
    divider.style.top = '0';
    divider.style.bottom = '0';
    divider.style.left = '0';
    divider.style.width = '2px';
    divider.style.background = 'rgba(255, 255, 255, 0.9)';
    divider.style.transform = 'translateX(-50%)';
    divider.style.zIndex = '100';
    divider.style.pointerEvents = 'none';
    
    // Круглая кнопка-ползунок со стрелками
    const handle = document.createElement('div');
    handle.className = 'custom-slider-handle';
    handle.style.position = 'absolute';
    handle.style.top = '50%';
    handle.style.left = '0';
    handle.style.transform = 'translate(-50%, -50%)';
    handle.style.width = '40px';
    handle.style.height = '40px';
    handle.style.borderRadius = '50%';
    handle.style.background = 'rgba(255, 255, 255, 0.95)';
    handle.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    handle.style.zIndex = '101';
    handle.style.cursor = 'ew-resize';
    handle.style.display = 'flex';
    handle.style.alignItems = 'center';
    handle.style.justifyContent = 'center';
    
    // Стрелка влево внутри кнопки
    const arrowLeft = document.createElement('span');
    arrowLeft.style.cssText = 'position:absolute;left:6px;width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:7px solid #1a1a1a;';
    
    // Стрелка вправо внутри кнопки
    const arrowRight = document.createElement('span');
    arrowRight.style.cssText = 'position:absolute;right:6px;width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid #1a1a1a;';
    
    handle.appendChild(arrowLeft);
    handle.appendChild(arrowRight);
    
    slider.appendChild(divider);
    slider.appendChild(handle);
    
    return slider;
}

/**
 * Создаёт контейнер для одного этапа с изображением
 * @param {string} src - путь к изображению
 * @param {string} alt - текстовая подсказка
 * @returns {HTMLElement} контейнер с изображением
 */
function createImageContainer(src, alt) {
    // Обёртка для изображения с абсолютным позиционированием
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.right = '0';
    container.style.bottom = '0';
    container.style.overflow = 'hidden';
    container.style.backgroundColor = '#f7f7f8';
    
    // Само изображение
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    
    container.appendChild(img);
    return container;
}

/**
 * Добавляет обработчики событий мыши и тач для перетаскивания ползунка
 * @param {HTMLElement} slider - элемент слайдера
 * @param {function} onUpdate - коллбек обновления позиции (0-100)
 */
function initSliderInteraction(slider, onUpdate) {
    let isDragging = false;
    
    // Вычисляет позицию ползунка на основе координаты X
    function updateSlider(x) {
        const rect = slider.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        // Ограничиваем диапазон от 0 до 100
        pos = Math.max(0, Math.min(100, pos));
        onUpdate(pos);
    }
    
    // === Обработчики мыши ===
    
    // Начало перетаскивания за кнопку
    slider.querySelector('.custom-slider-handle').addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    // Клик в любом месте слайдера перемещает ползунок
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSlider(e.clientX);
    });
    
    // Перемещение ползунка при движении мыши
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });
    
    // Конец перетаскивания
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // === Обработчики тач-событий ===
    
    // Начало перетаскивания за кнопку
    slider.querySelector('.custom-slider-handle').addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    // Клик в любом месте слайдера перемещает ползунок
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSlider(e.touches[0].clientX);
    });
    
    // Перемещение ползунка при движении пальца
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSlider(e.touches[0].clientX);
    });
    
    // Конец перетаскивания
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Начальная позиция ползунка — левая позиция (0%)
    onUpdate(10);
}

