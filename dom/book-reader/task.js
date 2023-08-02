const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const someP = document.querySelectorAll('p')

fontSizes.forEach((fontSize) => {
  fontSize.addEventListener('click', () => {
    fontSizes.forEach((fontSize) => fontSize.classList.remove('font-size_active'));
    fontSize.classList.add('font-size_active');

    if (fontSize.classList.contains('font-size_small')) {
      book.classList.remove('font-size_big')
      book.classList.add('font-size_small');
    } else if (fontSize.classList.contains('font-size_big')) {
      book.classList.remove('font-size_small')
      book.classList.add('font-size_big');
    } else {
      book.classList.remove('font-size_big', 'font-size_small');
    }
  });
});

// смена фона
const colors = document.querySelectorAll('.color');

colors.forEach((color) => {
  color.addEventListener('click', () => {
    colors.forEach((color) => color.classList.remove('color_active'));
    color.classList.add('color_active');

    if (color.classList.contains('bg_color_black')) {
      book.classList.remove('bg_color_gray', 'bg_color_white')
      book.classList.add('bg_color_black');
    } else if (color.classList.contains('bg_color_gray')) {
      book.classList.remove('bg_color_white', 'bg_color_black')
      book.classList.add('bg_color_gray');
    } else {
      book.classList.remove('bg_color_black', 'bg_color_gray');
      book.classList.add('bg_color_white');
    }

    someP.forEach((p) => {
        if (color.classList.contains('text_color_black')) {
            p.classList.remove('text_gray', 'text_whitesmoke')
            p.classList.add('text_black');
          } else if (color.classList.contains('text_color_gray')) {
            p.classList.remove('text_whitesmoke', 'text_black')
            p.classList.add('text_gray');
          } else if (color.classList.contains('text_color_whitesmoke')) {
            p.classList.remove('text_black', 'text_gray');
            p.classList.add('text_whitesmoke');
          }
    })
  });
});