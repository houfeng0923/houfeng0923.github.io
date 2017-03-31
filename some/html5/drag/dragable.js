/**
 * new Dragable('.target', '.target > li', {
 *  placeholder: 'ui-placeholder',
 *  update: ()=>{}
 * });
 */

export default class Dragable {
  constructor(target, elements, options) {
    this.$elements = $(elements);
    this.$target = $(target);
    this.options = options;
    this.init();
  }

  init() {
    let eleDrag = null;
    let placeholderCls = this.options.placeholder;
    $.makeArray(this.$elements).forEach((element) => {
      let $el = $(element);
      $el.on('selectstart', (e) => { e.preventDefault() });
      $el.on('dragstart', (ev) => {
        let original = ev.originalEvent;

        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData('text', ev.currentTarget.innerHTML);
        ev.dataTransfer.setDragImage(ev.currentTarget, original.layerX, original.layerY);
        this.dragged = ev.currentTarget;
      });
      $el.on('dragend', (ev) => {
        this.dragged.style.display = "block";
        if (this.placeholder) {
          this.dragged.parentNode.insertBefore(this.dragged, this.placeholder);
          this.dragged.parentNode.removeChild(this.placeholder);
          this.placeholder = null;
        }
        if (this.options.update) {
          this.options.update();
        }
      });
    });


    this.$target.on('dragover', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      this.dragged.style.display = 'none';
      let over = ev.target;
      if (over.className === placeholderCls) return;
      if (over.getAttribute('draggable') !== 'true') { // some node (img) draggable = true
        over = $(over).closest('[draggable]').get(0);
      }
      let placeholder = this.placeholder;
      if (!placeholder) {
        placeholder = document.createElement('li');
        placeholder.className = placeholderCls;
        this.placeholder = placeholder;
      }
      // Inside the dragOver method
      var relY = ev.clientY - over.offsetTop;
      var height = over.offsetHeight / 2;
      var parent = over.parentNode;

      if (relY > height) {
        this.nodePlacement = "after";
        parent.insertBefore(placeholder, over.nextElementSibling);
        // } else if (relY < height) {
      } else {
        this.nodePlacement = "before"
        parent.insertBefore(placeholder, over);
      }
    });

    this.$target.on('drop', (ev) => { // for firefox
      ev.preventDefault();
      ev.stopPropagation();
      return false;
    })

  }
}


/**
 * other: 
 * - https://github.com/RubaXa/Sortable 
 * - http://webcloud.se/sortable-list-component-react-js/
 */