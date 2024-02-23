(function() {
  const elements = document.getElementById('main-text').getElementsByTagName('*');
  for (let i = 1; i < elements.length; i++) {
    const element = elements[i];
    if (element.id) {
      element.id = '_' + element.id;
    }
  }
  let headings = document.querySelector("#main-text").querySelectorAll('h1, h2, h3, h4, h5, h6');
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
    anchor.onclick = smoothscroll;
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
})();
