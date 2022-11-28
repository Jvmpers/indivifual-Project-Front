
import { GET_ALL_RAZAS,CLEAR_DETAIL_RAZA,GET_DETAIL_RAZA,GET_QUERY, CREATE_RAZA, FILTER_REAL_OR_CREATE_RAZAS, ORDER_RAZAS, FILTER_TEMPERAMENT,FILTER_EQUAL_ALL_RAZAS,GET_ALL_TEMPERAMENTS} from "../Action";


const initialState = {
  allRazas: [],
  filterRazas1: [],
  filterRazas2: [],
  filterRazas3: [],
  DetailRaza: [],
  temperaments:[],
  buscador:[],
  confirm:"a"
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RAZAS:
      return {
        ...state,
        allRazas: action.payload,
        filterRazas1: action.payload,
        filterRazas2: action.payload,
        filterRazas3: action.payload
      }
    case GET_DETAIL_RAZA:
      return {
        ...state,
        DetailRaza: action.payload,
      }
    case CREATE_RAZA:
      return {
        ...state,
        confirm: action.payload,
      }
    case FILTER_REAL_OR_CREATE_RAZAS:
      return {
        ...state,
        filterRazas1: action.payload,
      }
    case ORDER_RAZAS:
      return {
        ...state,
        filterRazas3: action.payload,
      }
    case FILTER_TEMPERAMENT:
      return {
        ...state,
        filterRazas2: action.payload,
      }
      case FILTER_EQUAL_ALL_RAZAS:
        return{
          ...state,
          filterRazas3:[],
        }
        case GET_ALL_TEMPERAMENTS:
          return {
            ...state,
            temperaments: action.payload
          }
          case GET_QUERY:
            return{
              ...state,
              filterRazas3: action.payload
            }
            case CLEAR_DETAIL_RAZA:
              return{
                ...state,
                DetailRaza:[]
              }
    default:
      return state;
  }
};
