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
    { type: "name", width: 190, text: "Milestone description" },
    { width: 80, text: "Category", field: "category" },
    {
      type: "resourceassignment",
      text: "Assigned to",
      showAvatars: false,
      width: 100,
    },

    {
      type: "percent",
      text: "PROGRESS",
      field: "renderedPercentDone",
      showValue: true,
      width: 100,
    },
    { type: "date", field: "startDate", text: "START", width: 110 },
    { type: "date", field: "endDate", text: "END", width: 110 },
  ],

  // Custom taskbar content
  taskRenderer({ taskRecord, renderData }) {
    const { category, parentId } = taskRecord;
    if (parentId !== null) {
      switch (category) {
        case "Goal":
          renderData.style = "background-color:" + "#d65532";
          break;
        case "Milestone":
          renderData.style = "background-color:" + "none";
          break;
        case "Low Risk":
          renderData.style = "background-color:" + "#00b0f0";
          break;
        case "Med Risk":
          renderData.style = "background-color:" + "#4868e5";
          break;
        case "High Risk":
          renderData.style = "background-color:" + "#852c98";
          break;
        case "On Track":
          renderData.style = "background-color:" + "#4ca472";
          break;
        default:
          renderData.style = "background-color:" + "#e6e6e6";
      }
    }
    if (category === "Milestone")
      return `<span style="position:absolute; top: -10px"><i class="b-fa b-fa-flag b-fa-2xs" style="color: orange;"></i></span>`;

    return "";
  },
});

gantt.taskStore.modelClass.addField({
  name: "category",
  type: "string",
});
