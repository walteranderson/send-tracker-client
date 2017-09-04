const NUM_GRADES = 5;

const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
};

const makeGrade = (gradeset_id, label = '', color = '') => {
  return {
    id: generateUID(),
    gradeset_id,
    label,
    color
  };
};

const makeGradesBySet = (setId, labels = []) => {
  const grades = [];
  for (let i = 1; i <= NUM_GRADES; i++) {
    const label = labels[i] || `V${i}`;
    grades.push(makeGrade(setId, label));
  }
  return grades;
};

const makeGradeset = (type = 'custom', label = '', labels = []) => {
  const id = generateUID();

  return {
    id,
    type,
    label,
    grades: makeGradesBySet(id, labels)
  };
};

const VScale = makeGradeset('VSCALE', 'V-System', ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7']);
const FontScale = makeGradeset('FONT', 'Fontainebleau', ['5A', '5B', '5C', '6A', '6B', '6C', '7A', '7B', '7C']);

const makeLocation = (label, gradesets = null) => {
  const id = generateUID();
  gradesets = gradesets || [makeGradeset()];

  return {
    id,
    label,
    gradesets
  };
};

const makeUser = () => {
  const id = generateUID();
  return {
    id,
    email: 'admin@email.com',
    username: 'admin'
  };
};


//////////

export const allLocations = () => {
  return [
    makeLocation('ABP', [VScale]),
    makeLocation('Crux', [VScale, FontScale])
  ];
};

export const expandedUser = () => {
  const user = makeUser();

  user.locations = allLocations();

  return user;
};
