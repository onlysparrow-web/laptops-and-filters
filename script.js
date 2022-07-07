const products = [
  {
    brand: "MSI",
    cpu: {
      brand: "INTEL",
      name: "i5",
      gen: 10,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: "GB",
    },
    ssd: {
      size: 250,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3060ti",
      size: 8,
      unit: "GB",
    },
    price: 150000,
    monitor: {
      brand: "LG",
      size: 24,
      unit: "inch",
    },
    mouse: "RazerDeathAdder V2",
    keyboard: "Sk68",
  },
  {
    brand: "ASUS",
    cpu: {
      brand: "INTER",
      name: "i7",
      gen: 12,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: "GB",
    },
    ssd: {
      size: 250,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3080ti",
      size: 12,
      unit: "GB",
    },
    price: 250000,
    monitor: {
      brand: "ACER",
      size: 32,
      unit: "inch",
    },
    mouse: "Logitech G402",
    keyboard: "TVS Gold",
  },
  {
    brand: "GIGABYTE",
    cpu: {
      brand: "AMD",
      name: "Ryzen 5",
      gen: 2500,
    },
    os: "Windows11",
    ram: {
      size: 16,
      unit: "GB",
    },
    ssd: {
      size: 500,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3090ti",
      size: 24,
      unit: "GB",
    },
    price: 350000,
    monitor: {
      brand: "SAMSUNG",
      size: 21,
      unit: "inch",
    },
    mouse: "Razer Viper",
    keyboard: "Logitech prodigy",
  },
];
products.forEach(accessSpecs);

function accessSpecs(data) {
  var pc = data;
  // console.log(pc.brand);

  // var brandid = document.createElement("span");
  // brandid.innerText = "BRAND";
  // brandid.setAttribute("class", "brand-id");

  // var brandName = document.createElement("span");
  // brandName.innerText = pc.brand;
  // brandName.setAttribute("class", "brand-name");

  // brandName.appendChild(brandid);

  // console.log(brandName);

  // var cont = document.createElement("div");
  // cont.appendChild(brandName);
  // console.log(cont);
  var firstWrap = creatingWrapper("brand-ids", "brand", "brand-name", pc.brand);
}
function creatingWrapper(
  primaryclass,
  primarytext,
  secondaryclass,
  secondarytext
) {
  var primaryElement = document.createElement("span");
  primaryElement.innerText = primarytext;
  primaryElement.setAttribute("class", primaryclass);

  var secondaryElement = document.createElement("span");
  secondaryElement.innerText = secondarytext;
  secondaryElement.setAttribute("class", secondaryclass);

  primaryElement.appendChild(secondaryElement);

  // console.log(secondaryElement);

  var wrapper = document.createElement("div");
  wrapper.appendChild(primaryElement);
  console.log(wrapper);

  return wrapper;
}
