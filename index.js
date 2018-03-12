const logDriverNames = function(drivers) {
  return drivers.forEach(function(driver) {
    return console.log(driver.name);
  });
}
const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    driver.hometown === hometown ? console.log(driver.name) : null;
  });
}
const driversByRevenue = function(drivers) {
  // Array.prototype.slice.call(drivers); // also works
  // http://www.javascriptkit.com/javatutors/arrayprototypeslice.shtml
  const driversCopy = drivers.slice();
  return driversCopy.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}
const driversByName = function(drivers) {
  const driversCopy = drivers.slice();
  return driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}
const totalRevenue = function(drivers) {
  const reduceDriverRevenues = function(total, driver, i, drivers) {
    return total += driver.revenue;
  }
  return drivers.reduce(reduceDriverRevenues, 0);
}
const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
