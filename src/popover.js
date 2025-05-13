export function createPopover(text = 'Default text') {
    const existing = document.querySelector('.popover');
    if (existing) existing.remove();

    const button = document.getElementById('popover-button');
    const popover = document.createElement('div');
    popover.className = 'popover';
    popover.style.position = 'absolute';

    const header = document.createElement('div');
    header.className = 'popover-header';
    header.textContent = 'Popover title';

    const body = document.createElement('div');
    body.className = 'popover-body';
    body.textContent = text;

    popover.appendChild(header);
    popover.appendChild(body);
    popover.style.display = 'flex';
    popover.style.visibility = 'hidden';
    document.body.appendChild(popover);

    const popoverRect = popover.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const left = buttonRect.left + buttonRect.width / 2 - popoverRect.width / 2;
    const top = buttonRect.top + window.scrollY - popoverRect.height - 10;

    popover.style.left = `${left + window.scrollX}px`;
    popover.style.top = `${top}px`;
    popover.style.visibility = 'visible';
}

export function removePopover() {
    const existing = document.querySelector('.popover');
    if (existing) existing.remove();
}
