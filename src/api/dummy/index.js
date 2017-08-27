const NUM_GRADES = 5;

const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
};

const makeGrade = (location_id, label = '', color = '') => {
  return {
    id: generateUID(),
    location_id,
    label,
    color
  };
};

const makeGradesByLocation = (locationId) => {
  const grades = [];
  for (let i = 1; i <= NUM_GRADES; i++) {
    grades.push(makeGrade(locationId, `V${i}`));
  }
  return grades;
};

const makeLocation = (label) => {
  const id = generateUID();
  return {
    id,
    label,
    grades: makeGradesByLocation(id)
  };
};

export const allLocations = () => {
  return [
    makeLocation('ABP'),
    makeLocation('Crux')
  ];
};
