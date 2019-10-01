function moreThan5(x) {
return x>5;
}

function topScore(x,y) {
  return x>y;
}

function isInDanger(x) {
return x>=60 + x<=71;

}

function isCoasting(x) {
return x>= 72, x<=83;
}

function isSucceeding() {

}

function isFailing(x) {
return x<60;
}

function isAcing(x) {
return x>92;
}

function isStudent(str) {
return str==='student';
}

function isTeacher(str) {
return str==='teacher';
}

function isAdmin(str) {
return str==='admin';
}

function isElementary(str) {
return str==='elementary';
}

function notAnElementarySchoolAdministrator(str) {
return str
}

function isMiddleSchoolTeacher() {

}

function differentPeople() {

}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}