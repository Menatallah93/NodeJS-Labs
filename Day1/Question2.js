var getAge =function(name, birthDate) {
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();

    if (yearDiff < 0) {
      throw new Error('Invalid birth year');
    }

    return `Hello ${name}, your age now is: ${yearDiff}`;
  }

module.exports = {
    getAge: getAge
  };