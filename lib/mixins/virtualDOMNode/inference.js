'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function spliceChildren(start, removedChildrenCount, addedChildren, context) {
  var childParent = this,
      childReference = null,
      childContext = context;

  addedChildren.forEach(function (addedChild) {
    addedChild.mount(childParent, childReference, childContext);
  });

  var args = [start, removedChildrenCount].concat(addedChildren),
      removedChildren = Array.prototype.splice.apply(this.children, args);

  removedChildren.forEach(function (removedChild) {
    removedChild.unmount(childContext);
  });
}

function addChild(child, context) {
  var start = Infinity,
      removedChildrenCount = 0,
      addedChildren = [child];

  this.spliceChildren(start, removedChildrenCount, addedChildren, context);
}

function removeChild(child, context) {
  var index = this.children.indexOf(child);

  if (index > -1) {
    var start = index,
        removedChildrenCount = 1,
        addedChildren = [];

    this.spliceChildren(start, removedChildrenCount, addedChildren, context);
  }
}

function setAttribute(name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      this.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      this.domElement.setAttribute(name, value);
    }
  } else {
    this.domElement.setAttribute(name, value);
  }
}

function getAttribute(name) {
  return this.domElement.getAttribute(name);
}

function clearAttribute(name) {
  this.domElement.removeAttribute(name);
}

function addAttribute(name, value) {
  this.setAttribute(name, value);
}

function removeAttribute(name) {
  this.domElement.removeAttribute(name);
}

function setClass(className) {
  this.domElement.className = className;
}

function addClass(className) {
  this.domElement.classList.add(className);
}

function removeClass(className) {
  this.domElement.classList.remove(className);
}

function toggleClass(className) {
  this.domElement.classList.toggle(className);
}

function hasClass(className) {
  return this.domElement.classList.contains(className);
}

function hasClasses(classNames) {
  return classNames.every(function (className) {
    return this.hasClass(className);
  }.bind(this));
}

function clearClasses() {
  this.domElement.className = '';
}

function getTagName() {
  return this.domElement.tagName;
}

module.exports = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9taXhpbnMvdmlydHVhbERPTU5vZGUvaW5mZXJlbmNlLmpzIl0sIm5hbWVzIjpbInNwbGljZUNoaWxkcmVuIiwic3RhcnQiLCJyZW1vdmVkQ2hpbGRyZW5Db3VudCIsImFkZGVkQ2hpbGRyZW4iLCJjb250ZXh0IiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImZvckVhY2giLCJhZGRlZENoaWxkIiwibW91bnQiLCJhcmdzIiwiY29uY2F0IiwicmVtb3ZlZENoaWxkcmVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzcGxpY2UiLCJhcHBseSIsImNoaWxkcmVuIiwicmVtb3ZlZENoaWxkIiwidW5tb3VudCIsImFkZENoaWxkIiwiY2hpbGQiLCJJbmZpbml0eSIsInJlbW92ZUNoaWxkIiwiaW5kZXgiLCJpbmRleE9mIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImtleSIsImRvbUVsZW1lbnQiLCJiaW5kIiwiZ2V0QXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJzZXRDbGFzcyIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJoYXNDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImV2ZXJ5IiwiY2xlYXJDbGFzc2VzIiwiZ2V0VGFnTmFtZSIsInRhZ05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxvQkFBL0IsRUFBcURDLGFBQXJELEVBQW9FQyxPQUFwRSxFQUE2RTtBQUMzRSxNQUFNQyxjQUFjLElBQXBCO0FBQUEsTUFDTUMsaUJBQWlCLElBRHZCO0FBQUEs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aUI7QUFDZnpELGtCQUFnQkEsY0FERDtBQUVmcUIsWUFBVUEsUUFGSztBQUdmRyxlQUFhQSxXQUhFO0FBSWZHLGdCQUFjQSxZQUpDO0FBS2ZRLGdCQUFjQSxZQUxDO0FBTWZDLGtCQUFnQkEsY0FORDtBQU9mRSxnQkFBY0EsWUFQQztBQVFmRCxtQkFBaUJBLGVBUkY7QUFTZkUsWUFBVUEsUUFUSztBQVVmRSxZQUFVQSxRQVZLO0FBV2ZHLGVBQWFBLFdBWEU7QUFZZkUsZUFBYUEsV0FaRTtBQWFmRSxZQUFVQSxRQWJLO0FBY2ZFLGNBQVlBLFVBZEc7QUFlZkcsZ0JBQWNBLFlBZkM7QUFnQmZDLGNBQVlBO0FBaEJHLENBQWpCIiwiZmlsZSI6ImluZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgYWRkZWRDaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50XS5jb25jYXQoYWRkZWRDaGlsZHJlbiksXG4gICAgICAgIHJlbW92ZWRDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZHJlbiwgYXJncyk7XG5cbiAgcmVtb3ZlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocmVtb3ZlZENoaWxkKSB7XG4gICAgcmVtb3ZlZENoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMCxcbiAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtjaGlsZF07XG5cbiAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMSxcbiAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gIHJldHVybiBjbGFzc05hbWVzLmV2ZXJ5KGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3BsaWNlQ2hpbGRyZW46IHNwbGljZUNoaWxkcmVuLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgc2V0QXR0cmlidXRlOiBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZTogZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZTogY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgc2V0Q2xhc3M6IHNldENsYXNzLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXM6IGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlczogY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lOiBnZXRUYWdOYW1lXG59O1xuIl19