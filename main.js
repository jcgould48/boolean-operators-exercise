function moreThan5(x) {
return x>5;
}

function topScore(x,y) {
  return x>y;
}

function isInDanger(x) {
return (x>=60 && x<=71);

}

function isCoasting(x) {
return (x>=72 && x<=83);
}

function isSucceeding(x) {
return (x>=84 && x<=92);
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

function notAnElementarySchoolAdministrator(str1,str2) {
return str1!='elementary' || str2!='admin';
}

function isMiddleSchoolTeacher(str1,x) {
return (str1==='teacher' && (x>=6 && x<=8));
}

function differentPeople(str1, str2) {
return str1!=str2;
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