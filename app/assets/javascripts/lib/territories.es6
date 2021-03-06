import _ from 'underscore';

export class Territories {
  constructor(territories) {
    this.territories = territories;
  }

  withCategory() {
    return this.territories.reduce((acc, territory) => {
      if(!territory) return acc;

      let category = territory.category;

      if (territory.state) {
        category = category + ` - ${territory.state}`;
      }
      
      return [
        ...acc, {
          ...territory,
          label: `${territory.name} (${category})`,
          value: territory.id,
          bounds: territory.bounds
        }
      ];
    }, []);
  }

  withOptions() {
    return this.territories.reduce((acc, territory) => {
      if(!territory) return acc;
      
      return [
        ...acc, {
          ...territory,
          label: territory.name,
          value: territory.id
        }
      ];
    }, []);
  }
}
