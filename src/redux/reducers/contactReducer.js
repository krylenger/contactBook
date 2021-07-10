const initialState = [
  {
    id: 0,
    name: 'John',
    lastname: 'Dorian',
    age: 27,
    pager: 926545,
  },
  {
    id: 1,
    name: 'Carla',
    lastname: 'Espinosa',
    age: 28,
    pager: 945455,
  },
  {
    id: 2,
    name: 'Perry',
    lastname: 'Cox',
    age: 40,
    pager: 955654,
  },
  {
    id: 3,
    name: 'Robert',
    lastname: 'Celso',
    age: 58,
    pager: 128215,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      state = [...state, action.payload];
      return state;
    case 'EDIT_CONTACT':
      const updatedState = state.map((contact) => (contact.id === action.payload.id ? action.payload : contact));
      return updatedState;
    case 'DELETE_CONTACT':
      const filteredState = state.filter(contact => contact.id !== action.payload);
      return filteredState;
    default:
      return state;
  }
};

export default contactReducer;
