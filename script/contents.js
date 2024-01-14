(function() {
    let headings = document.querySelectorAll('h1:not(:first-child), h2, h3, h4, h5, h6');

    let contentDiv = document.createElement('div');
    contentDiv.id = 'content';

    let currentParent = contentDiv;
    let previousLevel = 1;

    headings.forEach(function(heading, index) {
        let level = parseInt(heading.tagName.charAt(1));
        let wrapper = document.createElement('div');
        let anchor = document.createElement('a');
        anchor.innerHTML = heading.innerHTML;
        anchor.href = `#${heading.id}`;
        anchor.onclick = smoothScroll;
        wrapper.appendChild(anchor);

        if (level > previousLevel) {
            currentParent.appendChild(wrapper);
            currentParent = wrapper;
        } else if (level < previousLevel) {
            for (let i = level; i < previousLevel; i++) {
                currentParent = currentParent.parentNode;
            }
            currentParent.parentNode.appendChild(wrapper);
            currentParent = wrapper;
        } else {
            contentDiv.appendChild(wrapper);
        }

        previousLevel = level;
    });

    document.body.insertBefore(contentDiv, document.body.firstChild);
})()