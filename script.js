const products = [
  {
    brand: "MSI",
    cpu: {
      brand: "INTEL ",
      name: "i5",
      gen: 10,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: " GB",
    },
    ssd: {
      size: 250,
      unit: " GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3060ti",
      size: 8,
      unit: " GB",
    },
    price: 150000,
    monitor: {
      brand: "LG ",
      size: 24,
      unit: " inch",
    },
    mouse: "RazerDeathAdder V2",
    keyboard: "Sk68",
  },
  {
    brand: "ASUS",
    cpu: {
      brand: "INTEL ",
      name: "i7 ",
      gen: 12,
    },
    os: "Windows 10",
    ram: {
      size: 8,
      unit: " GB",
    },
    ssd: {
      size: 250,
      unit: " GB",
    },
    gpu: {
      brand: "Nvidia ",
      model: "Rtx3080ti ",
      size: 12,
      unit: " GB",
    },
    price: 250000,
    monitor: {
      brand: "ACER ",
      size: 32,
      unit: " inch",
    },
    mouse: "Logitech G402",
    keyboard: "TVS Gold",
  },
  {
    brand: "ASUS",
    cpu: {
      brand: "INTEL ",
      name: "i7 ",
      gen: 12,
    },
    os: "Windows 10",
    ram: {
      size: 8,
      unit: " GB",
    },
    ssd: {
      size: 250,
      unit: " GB",
    },
    gpu: {
      brand: "Nvidia ",
      model: "Rtx3080ti ",
      size: 12,
      unit: " GB",
    },
    price: 250000,
    monitor: {
      brand: "ACER ",
      size: 32,
      unit: " inch",
    },
    mouse: "Logitech G402",
    keyboard: "TVS Gold",
  },
  {
    brand: "GIGABYTE",
    cpu: {
      brand: "AMD ",
      name: "Ryzen 5 ",
      gen: 2500,
    },
    os: "Windows 11",
    ram: {
      size: 16,
      unit: " GB",
    },
    ssd: {
      size: 500,
      unit: " GB",
    },
    gpu: {
      brand: "Nvidia",
      model: " Rtx3090ti ",
      size: 24,
      unit: " GB",
    },
    price: 350000,
    monitor: {
      brand: "SAMSUNG ",
      size: 21,
      unit: " inch",
    },
    mouse: "Razer Viper",
    keyboard: "Logitech prodigy",
  },
];

products.forEach(accessSpecs);
function accessSpecs(data) {
  var pc = data;
  console.log(pc);

  var secondaryArrayElements = [
    {
      className: "brand-name",
      text: pc.brand,
    },
  ];

  var thirdArrayElements = [
    {
      className: "cpu-name",
      text: pc.cpu.brand,
    },
    {
      className: "cpu-gen",
      text: pc.cpu.gen,
    },
  ];

  var fourthElements = [
    {
      className: "os-name",
      text: pc.os,
    },
  ];

  var fifthElements = [
    {
      className: "ram-number",
      text: pc.ram.size,
    },
    {
      className: "",
      text: pc.ram.unit,
    },
  ];

  var sixthElements = [
    {
      className: "ssd-number",
      text: pc.ssd.size,
    },
    {
      className: "",
      text: pc.ssd.unit,
    },
  ];

  var seventhElements = [
    {
      className: "graphics-name",
      text: pc.gpu.brand,
    },
    {
      className: "graphics-model",
      text: pc.gpu.model,
    },
    {
      className: "graphics-size",
      text: pc.gpu.size,
    },
    {
      className: "graphics-unit",
      text: pc.gpu.unit,
    },
  ];
  var eigthElements = [
    {
      className: "price-number",
      text: pc.price,
    },
  ];

  var ninthElements = [
    {
      className: "moni-brand",
      text: pc.monitor.brand,
    },
    {
      className: "moni-size",
      text: pc.monitor.size,
    },
    {
      className: "moni-unit",
      text: pc.monitor.unit,
    },
  ];

  var tenthElements = [
    {
      className: "brand-name",
      text: pc.mouse,
    },
  ];

  var eleventhElements = [
    {
      className: "brand-name",
      text: pc.keyboard,
    },
  ];

  var brandWrap = creatingWrapper(
    "brand-ids",
    "brand:",
    secondaryArrayElements
  );

  var cpuWrap = creatingWrapper("cpu-id", "CPU:", thirdArrayElements);
  // console.log(cpuWrap);

  var osWrap = creatingWrapper("os-id", "OS:", fourthElements);
  // console.log(osWrap);

  var ramWrap = creatingWrapper("ram-id", "RAM:", fifthElements);
  // console.log(ramWrap);

  var ssdWrap = creatingWrapper("ssd-id", "SSD:", sixthElements);
  // console.log(ssdWrap);

  var gpuWrap = creatingWrapper("graphics-id", "Gpu:", seventhElements);
  // console.log(gpuWrap);

  var priceWrap = creatingWrapper("price-id", "Price:", eigthElements);
  // console.log(priceWrap);

  var moniWrap = creatingWrapper("monitor-id", "Monitor Brand:", ninthElements);
  // console.log(moniWrap);

  var mouseWrap = creatingWrapper("mouse", "Mouse:", tenthElements);
  // console.log(mouseWrap);

  var keyboardWrap = creatingWrapper("keyboard", "KeyBoard:", eleventhElements);
  // console.log(keyboardWrap);

  var finalwrap = document.createElement("div");
  finalwrap.setAttribute("class", "classCont");
  finalwrap.append(brandWrap);
  finalwrap.append(cpuWrap);
  finalwrap.append(osWrap);
  finalwrap.append(ramWrap);
  finalwrap.append(ssdWrap);
  finalwrap.append(gpuWrap);
  finalwrap.append(priceWrap);
  finalwrap.append(moniWrap);
  finalwrap.append(mouseWrap);
  finalwrap.append(keyboardWrap);
  var body = document.querySelector(".bodi");
  body.append(finalwrap);

  // console.log(finalwrap);
}

function creatingWrapper(primaryclass, primarytext, secondaryElements) {
  var primaryElement = document.createElement("span");
  primaryElement.innerText = primarytext;
  primaryElement.setAttribute("class", primaryclass);

  secondaryElements.forEach(function (secondaryElementData) {
    var spanwrapper = document.createElement("span");
    spanwrapper.innerText = secondaryElementData.text;
    spanwrapper.setAttribute("class", secondaryElementData.className);
    primaryElement.appendChild(spanwrapper);
  });

  // console.log(secondaryElement);

  var wrapper = document.createElement("div");
  wrapper.appendChild(primaryElement);

  return wrapper;
}
var checkboxes = document.querySelectorAll(".brandFilter");
console.log(checkboxes);
checkboxes.forEach(filtering);
function filtering(box) {
  box.addEventListener("click", value);
  function value() {
    var selectedBrand = this.value;
    console.log(selectedBrand);

    var items = document.querySelectorAll(".classCont");
    items.forEach(removing);
    function removing(item) {
      item.remove();
    }
    products.forEach(accessSpecs);
    function accessSpecs(data) {
      var pc = data;

      var secondaryArrayElements = [
        {
          className: "brand-name",
          text: pc.brand,
        },
      ];

      var thirdArrayElements = [
        {
          className: "cpu-name",
          text: pc.cpu.brand,
        },
        {
          className: "cpu-gen",
          text: pc.cpu.gen,
        },
      ];

      var fourthElements = [
        {
          className: "os-name",
          text: pc.os,
        },
      ];

      var fifthElements = [
        {
          className: "ram-number",
          text: pc.ram.size,
        },
        {
          className: "",
          text: pc.ram.unit,
        },
      ];

      var sixthElements = [
        {
          className: "ssd-number",
          text: pc.ssd.size,
        },
        {
          className: "",
          text: pc.ssd.unit,
        },
      ];

      var seventhElements = [
        {
          className: "graphics-name",
          text: pc.gpu.brand,
        },
        {
          className: "graphics-model",
          text: pc.gpu.model,
        },
        {
          className: "graphics-size",
          text: pc.gpu.size,
        },
        {
          className: "graphics-unit",
          text: pc.gpu.unit,
        },
      ];
      var eigthElements = [
        {
          className: "price-number",
          text: pc.price,
        },
      ];

      var ninthElements = [
        {
          className: "moni-brand",
          text: pc.monitor.brand,
        },
        {
          className: "moni-size",
          text: pc.monitor.size,
        },
        {
          className: "moni-unit",
          text: pc.monitor.unit,
        },
      ];

      var tenthElements = [
        {
          className: "brand-name",
          text: pc.mouse,
        },
      ];

      var eleventhElements = [
        {
          className: "brand-name",
          text: pc.keyboard,
        },
      ];

      console.log("I'M BEFORE IF");

      if (selectedBrand == pc.brand) {
        console.log("I'M in IF");
        var brandWrap = creatingWrapper(
          "brand-ids",
          "brand:",
          secondaryArrayElements
        );
        console.log(brandWrap);

        var cpuWrap = creatingWrapper("cpu-id", "CPU:", thirdArrayElements);
        // console.log(cpuWrap);

        var osWrap = creatingWrapper("os-id", "OS:", fourthElements);
        // console.log(osWrap);

        var ramWrap = creatingWrapper("ram-id", "RAM:", fifthElements);
        // console.log(ramWrap);

        var ssdWrap = creatingWrapper("ssd-id", "SSD:", sixthElements);
        // console.log(ssdWrap);

        var gpuWrap = creatingWrapper("graphics-id", "Gpu:", seventhElements);
        // console.log(gpuWrap);

        var priceWrap = creatingWrapper("price-id", "Price:", eigthElements);
        // console.log(priceWrap);

        var moniWrap = creatingWrapper(
          "monitor-id",
          "Monitor Brand:",
          ninthElements
        );
        // console.log(moniWrap);

        var mouseWrap = creatingWrapper("mouse", "Mouse:", tenthElements);
        // console.log(mouseWrap);

        var keyboardWrap = creatingWrapper(
          "keyboard",
          "KeyBoard:",
          eleventhElements
        );
        // console.log(keyboardWrap);

        var finalwrap = document.createElement("div");
        finalwrap.setAttribute("class", "classCont");
        finalwrap.append(brandWrap);
        finalwrap.append(cpuWrap);
        finalwrap.append(osWrap);
        finalwrap.append(ramWrap);
        finalwrap.append(ssdWrap);
        finalwrap.append(gpuWrap);
        finalwrap.append(priceWrap);
        finalwrap.append(moniWrap);
        finalwrap.append(mouseWrap);
        finalwrap.append(keyboardWrap);
        var body = document.querySelector(".bodi");
        body.append(finalwrap);

        console.log(finalwrap);
      }

      //   if (selectedBrand == pc.brand) {
      //     console.log("i have found a match");
      //   }
      // }
    }
  }
}
