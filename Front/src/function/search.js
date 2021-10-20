const getResultSearch = (search, trucks) => {
    let filterSearch;
    if (search.lenght === 0) {
      filterSearch = trucks;
    }
    else {
      filterSearch = trucks.filter((item) => {
        const lowerSearch = search.toLowerCase();
        const lowerTrucks = item.name.toLowerCase();
        const lowerOverView = item.overview.toLowerCase();
        const eventsFilter = item.events.filter((itemEvent) => (
          itemEvent.adresse.toLowerCase().includes(lowerSearch)
        ));
        const foodFilter = item.sell_type_food.filter((itemFood) => (
          itemFood.name.toLowerCase().includes(lowerSearch)
        ));
        return lowerTrucks.includes(lowerSearch)
          || lowerOverView.includes(lowerSearch)
          || eventsFilter.length > 0
          || foodFilter.length > 0;
      });
    }
    return filterSearch;
  };
  export default getResultSearch;
  