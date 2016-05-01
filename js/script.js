function President(name, party, yearsInOffice, homeState) {
  this.name = name
  this.homeState = homeState
  this.politicalParty = party
  this.yearsInOffice = yearsInOffice
}

President.prototype.veto = function(){
  return "NO!"
}

President.prototype.passBill = function(){
  return "You can do that!"
}

President.prototype.doCharity = function(){
  return "I like to help people."
}

President.prototype.conductPressInterview = function(){
  return "I am proud to be an American."
}

President.prototype.sayHi = function(){
  return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
}