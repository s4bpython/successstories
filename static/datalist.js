class DataList {
  constructor(containerId, inputId, listId, options) {
          this.containerId = containerId;
          this.inputId = inputId;
          this.listId = listId;
          this.options = options; }
         
        create(filter = "") {
          const list = document.getElementById(this.listId);
          const filterOptions = this.options.filter(
            d => filter === "" || d.text.includes(filter));
          
          if (filterOptions.length === 0) {
            list.classList.remove("active"); } 
          else {
            list.classList.add("active"); }
           
          list.innerHTML = filterOptions.
            map(o => `<li id=${o.value}>${o.text}</li>`).
            join("");
        }
        
        addListeners(datalist) {
          const container = document.getElementById(this.containerId);
          const input = document.getElementById(this.inputId);
          const list = document.getElementById(this.listId);
          container.addEventListener("click", e => {
            if (e.target.id === this.inputId) {
              container.classList.toggle("active"); } 
            else if (e.target.id === "datalist-icon") {
              container.classList.toggle("active");
              input.focus(); }
        });
           
        input.addEventListener("input", function (e) {
          if (!container.classList.contains("active")) {
            container.classList.add("active"); }
           
          datalist.create(input.value);
        });
        
        list.addEventListener("click", function (e) {
          if (e.target.nodeName.toLocaleLowerCase() === "li") {
            input.value = e.target.innerText;
            container.classList.remove("active"); }
        });
      }}
      
const data = [
  { value: "1", text: "Lapiz" },
  { value: "2", text: "Borrador" },
  { value: "3", text: "Cuaderno Pequeño" },
  { value: "4", text: "Carpeta Carta" },
  { value: "5", text: "Pega Liquida" },
  { value: "6", text: "Sacapunta" },
  { value: "7", text: "Boligrafo" },
  { value: "8", text: "Engrapadora" }];
       
const datalist = new DataList(
  "datalist",
  "input-product",
  "ul-products",
  data);
       
datalist.create();
datalist.addListeners(datalist);