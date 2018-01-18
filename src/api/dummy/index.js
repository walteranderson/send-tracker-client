const NUM_GRADES = 10;

const generateUID = () => {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
};

const makeGrade = (gradeset_id, label = '', color = false) => {
  if (!color) color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

  return {
    id: generateUID(),
    gradeset_id,
    label,
    color
  };
};

const makeGradesBySet = (setId, gradeLabels = []) => {
  return gradeLabels.map((label, index) => {
    return makeGrade(setId, label);
  });

  // const grades = [];
  // for (let i = 1; i <= NUM_GRADES; i++) {
  //   const label = gradeLabels[i] || `V${i}`;
  //   grades.push(makeGrade(setId, label));
  // }
  //
  // return grades;
};

const makeGradeset = (type = 'custom', label = '', grades = []) => {
  const id = generateUID();

  return {
    id,
    type,
    label,
    grades: makeGradesBySet(id, grades)
  };
};

const VScale = makeGradeset('VSCALE', 'V-System', ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10']);
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
