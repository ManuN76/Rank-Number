window.function = function (arr, jl, sep, rkItem, des) {
  if (arr == undefined && jl == undefined) return undefined;
  if (rkItem == undefined) return undefined;

  jl = jl.value ?? "";
  sep = sep.value ?? "|";
  des = des.value ?? 0;

  // Rank Item
  rkItem = rkItem.value ?? 0;

  // Array
  let sorted;
  if (arr != undefined) {
    sorted = [...arr.value];
  } else {
    sorted = jl.split(sep);
    // Text to number
    sorted = sorted.map(function (item) {
      item = item.replace(",", ".");
      return parseFloat(item);
    });
  }

  // Sort
  if (des) {
    // Sort Descending
    sorted.sort((a, b) => b - a);
  } else {
    // Sort Ascending
    sorted.sort((a, b) => a - b);
  }

  return sorted.indexOf(rkItem) + 1;
};
