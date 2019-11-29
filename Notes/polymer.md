
# Polymer

## structure

```html
<!Doctype html>

<html>
<head>
 
	<base href="https://cdn.rawgit.com/download/polymer-cdn/2.6.0/lib/">
	<script src="webcomponentsjs/webcomponents-loader.js"></script>

	<link rel="import" href="iron-ajax/iron-ajax.html">

	<link rel="import" href="polymer/polymer-element.html">
	<title>My component</title>
</head>
<body>
	hello component
<polymer-element></polymer-element>

<dom-module id="polymer-element">

  <template>

    <style>
    .orange{ background-color: orange; }
    .green{ background-color: green; }
    </style>
    <h2 class$=[[color]]>month: [[month]]</h2>
    <div>
      <input type="text" value={{month::input}}>
      <input type="text" value={{color::input}}>
    </div>
  </template>
 
  <script>
    class PolymerElement extends Polymer.Element{

      static get is() {return "polymer-element"}

      static get properties() {
        return {
          month: { type: String, value: 'November' },
          color: String
        }
      }

      constructor(){
        super();
        console.log('constructor')
      }

      connectedCallback(){
	super.connectedCallback();
        console.log('connected')
      }

      disconnetedCallback(){
        super.disconnectedDallback();
        console.log('disconnected')
      }

      attributeChangedCallback(){
        super.attributeChangedCallback();
        console.log('changed')
      }

      ready(){
        super.ready();
        console.log('ready')
      }
    }
    customElements.define(PolymerElement.is, PolymerElement)
  </script>

</dom-module>

</body>
</html>
```

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU3NjE5MzgwXX0=
-->