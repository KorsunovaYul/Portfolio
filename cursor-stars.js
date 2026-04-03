// Анимация звёздочек при нажатии (mousedown)
document.addEventListener('mousedown', function(e) {
  // Не показываем звёздочки при клике правой кнопкой
  if (e.button !== 0) return;
  
  // Создаём 3 звёздочки
  for (let i = 0; i < 3; i++) {
    const star = document.createElement('div');
    star.className = 'click-star';
    star.innerHTML = '<svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8462 0.580801C23.9381 -0.1936 25.0619 -0.1936 25.1538 0.580801L25.9247 7.07732C26.92 15.4661 33.5339 22.08 41.9226 23.0753L48.4191 23.8462C49.1936 23.9381 49.1936 25.0619 48.4191 25.1538L41.9226 25.9247C33.5339 26.92 26.92 33.5339 25.9247 41.9226L25.1538 48.4191C25.0619 49.1936 23.9381 49.1936 23.8462 48.4191L23.0753 41.9226C22.08 33.5339 15.4661 26.92 7.07732 25.9247L0.580801 25.1538C-0.1936 25.0619 -0.1936 23.9381 0.580801 23.8462L7.07732 23.0753C15.4661 22.08 22.08 15.4661 23.0753 7.07732L23.8462 0.580801Z" fill="#FFAE00"/></svg>';
    
    // Позиционируем звёздочки в разных направлениях
    const angles = [0, 120, 240];
    const angle = angles[i] * Math.PI / 180;
    const distance = 50;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    // Используем clientX/clientY для правильного позиционирования при прокрутке
    star.style.left = (e.clientX - 24) + 'px';
    star.style.top = (e.clientY - 24) + 'px';
    star.style.setProperty('--tx', x + 'px');
    star.style.setProperty('--ty', y + 'px');
    
    document.body.appendChild(star);
    
    // Удаляем звёздочку после анимации
    setTimeout(() => {
      star.remove();
    }, 600);
  }
});
