const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach((hasTooltip) => {
  hasTooltip.addEventListener('click', (event) => {
    event.preventDefault();

    const tooltips = document.querySelectorAll('.tooltip');

    const tooltipText = hasTooltip.getAttribute('title');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = tooltipText;

    const tooltipTop = hasTooltip.offsetTop + hasTooltip.offsetHeight + 5;
    const tooltipLeft = hasTooltip.offsetLeft;

    let isActive = false;

    tooltips.forEach((existingTooltip) => {
      if (existingTooltip.classList.contains('tooltip_active')) {
        isActive = true;
        existingTooltip.classList.remove('tooltip_active');
        existingTooltip.remove();
      }
    });

    if (!isActive) {
      document.body.appendChild(tooltip);
      tooltip.classList.add('tooltip_active');
      tooltip.style.top = tooltipTop + 'px';
      tooltip.style.left = tooltipLeft + 'px';
    }
  });
});