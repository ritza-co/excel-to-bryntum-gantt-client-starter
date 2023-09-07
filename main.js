import { Gantt } from "@bryntum/gantt/gantt.module.js";

const gantt = new Gantt({
  appendTo: document.body,
  project: {
    taskStore: {
      autoTree: true,
      transformFlatData: true,
    },
    transport: {
      load: {
        url: "http://localhost:3000/download",
      },
    },
    autoLoad: true,
    validateResponse: true,
  },
  columns: [
    { type: "name", width: 180, text: "TASK" },
    {
      type: "resourceassignment",
      text: "Assigned Resources",
      showAvatars: false,
      width: 160,
    },

    {
      type: "percent",
      text: "PROGRESS",
      field: "renderedPercentDone",
      showValue: true,
      width: 160,
    },
    { type: "date", field: "startDate", text: "START", width: 110 },
    { type: "date", field: "endDate", text: "END", width: 110 },
  ],
});
