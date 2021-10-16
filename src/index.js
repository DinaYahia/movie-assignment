function Binding(b) {
  this.elementBindings = [];
  this.value = b.object[b.property];

  this.valueGetter = () => {
    return this.value;
  };

  this.valueSetter = (val) => {
    this.value = val;
    for (let i = 0; i < this.elementBindings.length; i++) {
      const binding = this.elementBindings[i];
      binding.element[binding.attribute] = val;
    }
  };

  this.addBinding = (element, attribute, event) => {
    const binding = {
      element: element,
      attribute: attribute
    };
    if (event) {
      element.addEventListener(event, (event) => {
        this.valueSetter(element[attribute]);
      });
      binding.event = event;
    }

    this.elementBindings.push(binding);
    element[attribute] = this.value;
    return this;
  };

  Object.defineProperty(b.object, b.property, {
    get: this.valueGetter,
    set: this.valueSetter
  });

  b.object[b.property] = this.value;
}
  
var obj1 = { a: "" };
var obj2 = { a: "" };
var obj3 = { a: "" };
var obj4 = { a: "" };
var obj5 = { a: "" };
var obj6 = { a: "" };

var myInputElement1 = document.getElementById("data-binding-control-1");
var myInputElement2 = document.getElementById("data-binding-control-2");
var myInputElement3 = document.getElementById("data-binding-control-3");
var myInputElement4 = document.getElementById("data-binding-control-4");
var myInputElement6 = document.getElementById("data-binding-control-6");

var myDOMElement1 = document.getElementById("data-binding-view-1");
var myDOMElement2 = document.getElementById("data-binding-view-2");
var myDOMElement3 = document.getElementById("data-binding-view-3");
var myDOMElement4 = document.getElementById("data-binding-view-4");
var myDOMElement6 = document.getElementById("data-binding-view-6");

new Binding({object: obj1,property: "a"})
.addBinding(myInputElement1, "value", "keyup")
.addBinding(myDOMElement1, "innerHTML");  

new Binding({object: obj2,property: "a"})
.addBinding(myInputElement2, "value", "keyup")
.addBinding(myDOMElement2, "innerHTML");  

new Binding({object: obj3,property: "a"})
.addBinding(myInputElement3, "value", "keyup")
.addBinding(myDOMElement3, "innerHTML");  

new Binding({object: obj4,property: "a"})
.addBinding(myInputElement4, "value", "keyup")
.addBinding(myDOMElement4, "innerHTML");  

new Binding({object: obj6,property: "a"})
.addBinding(myInputElement6, "value", "keyup")
.addBinding(myDOMElement6, "innerHTML");  