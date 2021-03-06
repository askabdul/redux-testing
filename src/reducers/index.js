// export default function tasks(state = { tasks: [] }, action) {
//   if (action.type === "CREATE_TASK") {
//     return {
//       tasks: state.tasks.concat(action.payload),
//     };
//   }

//   if(action.type === "EDIT_TASK") {
//       const { payload } = action
//       return {
//         tasks: state.tasks.map(task => {
//             if(task.id === payload.id) {
//                 return Object.assign({},task, payload.params)
//             }
//             return task
//         })
//       }
//   }

//   if(action.type === 'FETCH_TASKS_SUCCEEDED') {
//     return {
//         tasks: action.payload.tasks
//     }
//   }
//   return state;
// }

const initialState = {
  tasks: [],
  isLoading: false,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case "CREATE_TASK": {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case "EDIT_TASK": {
      const { payload } = action;
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case "FETCH_TASKS_SUCCEEDED": {
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.tasks,
      };
    }
    case "CREATE_TASK_SUCCEEDED": {
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task),
      };
    }
    case "EDIT_TASK_SUCCEEDED": {
      const payload = action;
      const nextTasks = state.tasks.map((task) => {
        if (task.id === payload.task.id) {
          return payload.task;
        }
        return task;
      });
      return {
        ...state,
        tasks: nextTasks,
      };
    }
    case "FETCH_TASKS_STARTED": {
      return {
        ...state,
        isLoading: true,
      };
    }

    default: {
      return state;
    }
  }
}
