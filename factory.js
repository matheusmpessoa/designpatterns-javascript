class Factory {
  createPosition(type, years) {
    console.log(`Criando vaga de: ${type}. É obrigatório ${years} anos de experiência`);
    return (type, years);
  }
}

class PositionsFactory extends Factory {
  Senior(years) {
    return new Senior(years);
  }

  Junior(years) {
    return new Junior(years);
  }
}

const factory = new PositionsFactory();

const senior = factory.createPosition('Senior', 6);
const junior = factory.createPosition('Junior', 1);
