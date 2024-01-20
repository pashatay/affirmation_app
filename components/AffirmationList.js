class AffirmationList {
  constructor() {
    this.affirmations = [
      "I am strong.",
      "I am capable.",
      "I am worthy.",
      // add more
    ];
  }

  getRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * this.affirmations.length);
    return this.affirmations[randomIndex];
  }
}

export default new AffirmationList();
