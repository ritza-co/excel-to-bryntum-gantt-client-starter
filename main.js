import { Gantt } from "@bryntum/gantt/gantt.module.js";

const gantt = new Gantt({
  appendTo: document.body,
  project: {
    tasksData: [
      {
        id: 0,
        name: "Parent task",
        expanded: true,
      },
      {
        id: 1,
        name: "Child",
        parentId: 0,
        resourceAssignment: "Name",
        percentDone: 50,
        startDate: "2023-05-08T22:00:00.000Z",
        endDate: "2023-05-11T22:00:00.000Z",
        manuallyScheduled: true,
      },
    ],
    taskStore: {
      autoTree: true,
      transformFlatData: true,
    },
  },
  columns: [{ type: "name", width: 180, text: "TASK" }],
});
